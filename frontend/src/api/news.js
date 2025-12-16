import { XMLParser } from 'fast-xml-parser';
import axios from 'axios';

const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_"
});

const RSS_FEEDS = [
    { url: 'https://niteroi.rj.gov.br/feed/', source: 'Prefeitura de Niterói' },
    { url: 'https://enfoco.com.br/feed/', source: 'Enfoco' },
    { url: 'https://niteroinews.com.br/feed/', source: 'Niterói News' },
    { url: 'https://aseguirniteroi.com.br/categoria-de-noticia/noticias/feed/', source: 'A Seguir Niterói' },
    { url: 'https://g1.globo.com/rss/g1/rj/rio-de-janeiro/', source: 'G1 - Rio de Janeiro' }
];

// Palavras-chave para buscar APENAS no título
const TITLE_KEYWORDS = [
    'praia', 'praias', 'orla',
    'balneabilidade', 'pesca',
    'pesqueiro', 'pesqueira',
    'navio', 'barco', 'barcos',
    'navios', 'pesqueiros',
    'pesqueiras', 'sol', 'indice UV',
    'banhista', 'banhistas', 
    'surf', 'surfista', 'surfistas',
    'naufragio', 'onda de calor',
    'frente fria', 'ondas', 'onda',
    'reveillon', 'ano novo',
    'previsao do tempo', 'previsao para',
    'tempo no rio', 'tempo em niteroi',
    'clima no rio', 'clima em niteroi',
    'baía de guanabara', 'baia de guanabara',
    'ressaca', 'mar agitado',
    'praia de icarai', 'praia de itacoatiara', 'praia de piratininga', 
    'praia de camboinhas', 'praia de itaipu', 'praia de charitas',
    'praia de sao francisco', 'praia de jurujuba', 'praia de boa viagem', 
    'praia da gragoata', 'praia vermelha', 'praia de adao',
    'praia de eva', 'praia das flechas', 'praia de sao charitas',
    'praia de piratininga', 'praia do sossego', 'praia de niteroi',
    'praias de niteroi', 'praias do rio', 'praia do rio', 'atividade na praia', 
    'atividades na praia', 'festa na praia', 'show na praia', 'virada na praia'
];

// Palavras-chave para buscar no conteúdo completo
const CONTENT_KEYWORDS = [
    'indice UV', 'praia de icarai', 'praia de itacoatiara', 'praia de piratininga', 
    'praia de camboinhas', 'praia de itaipu', 'praia de charitas',
    'praia de sao francisco', 'praia de jurujuba', 'praia de boa viagem', 
    'praia da gragoata', 'praia vermelha', 'praia de adao',
    'praia de eva', 'praia das flechas', 'praia de sao charitas',
    'praia de piratininga', 'praia do sossego', 'praia de niteroi',
    'praias de niteroi', 'praias do rio', 'praia do rio', 'atividade na praia', 
    'atividades na praia', 'festa na praia', 'show na praia', 'virada na praia'
];

// Rejeitar mesmo se houver correspondência de palavras-chave
const BLACKLIST = [
    'economia solidaria', 'bolsa familia', 'auxilio', 'beneficio', 'solidario',
    'solidaria', 'solidariedade', 'solucao', 'soluvel', 'soluveis', 'agricultura familiar',
    'seguro defeso', 'maternidade', 'delegacia', 'tiroteio', 'assalto', 'crime', 'homicidio',
    'assassinato', 'seguro', 'defeso', 'segura', 'defesa', 'violencia', 'morte', 'morre',
    'operacao', 'crime', 'copacabana', 'acidente', 'aluguel', 'roubo', 'imovel', 'imoveis'
];

const normalizeText = (text) => {
    if (!text) return '';
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/<[^>]*>/g, ' ')
        .replace(/https?:\/\/[^\s]+/g, '')
        .replace(/\s+/g, ' ')
        .trim();
};

export const fetchNews = async () => {
    let allNews = [];

    const promises = RSS_FEEDS.map(async (feed) => {
        try {
            const response = await axios.get(feed.url);
            const xmlData = response.data;
            const jsonObj = parser.parse(xmlData);

            if (!jsonObj.rss || !jsonObj.rss.channel || !jsonObj.rss.channel.item) {
                 return [];
            }

            let items = jsonObj.rss.channel.item;
            if (!Array.isArray(items)) {
                items = [items];
            }

            return items.map(item => ({
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                content: item['content:encoded'] || item.description,
                contentSnippet: item.description, 
                source: feed.source,
                imageUrl: extractImage(item)
            }));

        } catch (error) {
            console.error(`Error fetching feed from ${feed.url}:`, error);
            return [];
        }
    });

    const results = await Promise.all(promises);
    results.forEach(items => {
        allNews = [...allNews, ...items];
    });

    // Filtrar por palavras-chave
    const filteredNews = allNews.filter(item => {
        const titleNorm = normalizeText(item.title);
        const fullText = normalizeText(`${item.title} ${item.contentSnippet || ''}`);
        
        // Verificar lista negra no título
        const isBlacklisted = BLACKLIST.some(term => titleNorm.includes(term));
        if (isBlacklisted) return false;
        
        // Verificar palavras-chave do título (filtro primário)
        const hasTitleMatch = TITLE_KEYWORDS.some(keyword => titleNorm.includes(keyword));
        if (hasTitleMatch) return true;
        
        // Verificar palavras-chave do conteúdo (secundário, apenas para frases muito específicas)
        const hasContentMatch = CONTENT_KEYWORDS.some(keyword => fullText.includes(keyword));
        return hasContentMatch;
    });

    // Ordenar por data (mais recente primeiro)
    filteredNews.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    return filteredNews;
};

const extractImage = (item) => {
    if (item.enclosure && item.enclosure['@_url'] && item.enclosure['@_type'] && item.enclosure['@_type'].startsWith('image')) {
         return item.enclosure['@_url'];
    }
    const content = item['content:encoded'] || item.content || item.description;
    if (content) {
        const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch) {
            return imgMatch[1];
        }
    }
    return null;
};
