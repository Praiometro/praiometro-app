import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';
import { styles } from './styles';
import { fetchNews } from '../../api/news';
import NewsCard from '../../components/NewsCard';

export default function Noticias() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState(null);

    const loadNews = useCallback(async () => {
        try {
            setError(null);
            const data = await fetchNews();
            setNews(data);
        } catch (err) {
            console.error(err);
            setError('Erro ao carregar notícias.');
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        loadNews();
    }, [loadNews]);

    const onRefresh = () => {
        setRefreshing(true);
        loadNews();
    };

    if (loading && !refreshing) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#FFFFFF" />
                <Text style={[styles.messageText, { marginTop: 16 }]}>Carregando notícias...</Text>
            </View>
        );
    }

    if (error && !refreshing && news.length === 0) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.messageText}>{error}</Text>
                <Text style={styles.subMessageText}>Tente novamente mais tarde.</Text>
                <Fontisto style={{ marginTop: 20 }} name="beach-slipper" size={80} color="#FAFAFA" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={news}
                keyExtractor={(item, index) => item.guid || index.toString()}
                renderItem={({ item }) => <NewsCard item={item} />}
                contentContainerStyle={styles.listContent}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#FFFFFF" />
                }
                ListEmptyComponent={
                    !loading && (
                        <View style={[styles.centerContainer, { marginTop: 50 }]}>
                            <Text style={styles.messageText}>Nenhuma notícia encontrada.</Text>
                        </View>
                    )
                }
            />
        </View>
    );
}
