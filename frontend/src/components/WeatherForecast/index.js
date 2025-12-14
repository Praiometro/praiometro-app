import { View, Text, ScrollView, Dimensions } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import Svg, { Path, Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

// Mapeamento de weather_code WMO para ícones
function getWeatherIcon(code) {
    if (code == null) return { icon: 'cloud', color: '#93C5FD' };
    if (code === 0) return { icon: 'sun', color: '#FBBF24' }; // Clear sky
    if (code <= 3) return { icon: 'cloud-sun', color: '#FBBF24' }; // Partly cloudy
    if (code <= 49) return { icon: 'cloud', color: '#9CA3AF' }; // Fog/Cloudy
    if (code <= 59) return { icon: 'cloud-rain', color: '#60A5FA' }; // Drizzle
    if (code <= 69) return { icon: 'cloud-showers-heavy', color: '#3B82F6' }; // Rain
    if (code <= 79) return { icon: 'snowflake', color: '#E5E7EB' }; // Snow
    if (code <= 99) return { icon: 'cloud-bolt', color: '#F59E0B' }; // Thunderstorm
    return { icon: 'cloud', color: '#93C5FD' };
}

function formatHour(timestamp) {
    if (!timestamp) return '--:--';
    const date = new Date(timestamp);
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

// Componente do gráfico de linha
function TemperatureChart({ temperatures, itemWidth }) {
    if (!temperatures || temperatures.length < 2) return null;
    
    const chartHeight = 60;
    const chartWidth = temperatures.length * itemWidth;
    const validTemps = temperatures.filter(t => t != null);
    
    if (validTemps.length < 2) return null;
    
    const minTemp = Math.min(...validTemps) - 2;
    const maxTemp = Math.max(...validTemps) + 2;
    const range = maxTemp - minTemp || 1;
    
    // Gerar pontos para o path
    const points = temperatures.map((temp, index) => {
        const x = (index * itemWidth) + (itemWidth / 2);
        const y = temp != null 
            ? chartHeight - ((temp - minTemp) / range) * chartHeight
            : chartHeight / 2;
        return { x, y, temp };
    });
    
    // Criar path suave usando curvas de Bezier
    let pathD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const cpx = (prev.x + curr.x) / 2;
        pathD += ` Q ${prev.x + (curr.x - prev.x) * 0.5} ${prev.y}, ${cpx} ${(prev.y + curr.y) / 2}`;
        pathD += ` T ${curr.x} ${curr.y}`;
    }
    
    return (
        <View style={{ height: chartHeight, width: chartWidth, marginVertical: 4 }}>
            <Svg width={chartWidth} height={chartHeight}>
                <Path
                    d={pathD}
                    stroke="#FFFFFF"
                    strokeWidth={2}
                    fill="none"
                />
                {points.map((point, index) => (
                    point.temp != null && (
                        <Circle
                            key={index}
                            cx={point.x}
                            cy={point.y}
                            r={3}
                            fill="#FFFFFF"
                        />
                    )
                ))}
            </Svg>
        </View>
    );
}

export default function WeatherForecast({ previsao = [] }) {
    const itemWidth = 56;
    
    if (!previsao || previsao.length === 0) {
        return (
            <LinearGradient
                colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.05)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.container}
            >
                <View style={styles.header}>
                    <Ionicons name="time" size={16} color="#93C5FD" />
                    <Text style={styles.headerText}>Previsão Próximas 24h</Text>
                </View>
                <Text style={styles.emptyText}>Dados de previsão indisponíveis</Text>
            </LinearGradient>
        );
    }

    const temperatures = previsao.map(item => item.temperatura);

    return (
        <LinearGradient
            colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.05)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <View style={styles.header}>
                <Ionicons name="time" size={16} color="#93C5FD" />
                <Text style={styles.headerText}>Previsão Próximas 24h</Text>
            </View>
            
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View>
                    {/* Linha 1: Hora + Ícone + Temperatura */}
                    <View style={styles.topRow}>
                        {previsao.map((item, index) => {
                            const { icon, color } = getWeatherIcon(item.weather_code);
                            return (
                                <View key={index} style={[styles.hourItem, { width: itemWidth }]}>
                                    <Text style={styles.hourText}>{formatHour(item.hora)}</Text>
                                    <FontAwesome6 name={icon} size={16} color={color} />
                                    <Text style={styles.tempText}>{item.temperatura ?? '--'}°</Text>
                                </View>
                            );
                        })}
                    </View>
                    
                    {/* Linha 2: Gráfico de Linha */}
                    <TemperatureChart temperatures={temperatures} itemWidth={itemWidth} />
                    
                    {/* Linha 3: Probabilidade de Chuva */}
                    <View style={styles.bottomRow}>
                        {previsao.map((item, index) => {
                            const rainProb = item.precipitacao_prob ?? 0;
                            const rainColor = rainProb > 50 ? '#60A5FA' : 'rgba(147, 197, 253, 0.5)';
                            const fontWeight = rainProb > 50 ? '700' : '400';
                            return (
                                <View key={index} style={[styles.rainItem, { width: itemWidth }]}>
                                    <FontAwesome6 name="droplet" size={8} color={rainColor} />
                                    <Text style={[styles.rainText, { color: rainColor, fontWeight }]}>
                                        {rainProb}%
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
            
            <Text style={styles.scrollHint}>Deslize para ver mais horas</Text>
        </LinearGradient>
    );
}
