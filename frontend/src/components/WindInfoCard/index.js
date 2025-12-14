import { View, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

function getWindStatus(speed) {
    if (speed == null) return { level: 'N/A', type: 'unknown' };
    if (speed < 20) return { level: 'SEGURO', type: 'safe' };
    if (speed < 40) return { level: 'MODERADO', type: 'warning' };
    return { level: 'FORTE', type: 'danger' };
}

function getWindDirection(degrees) {
    if (degrees == null) return 'N/A';
    const directions = [
        { min: 0, max: 22.5, name: 'Norte', abbr: 'N' },
        { min: 22.5, max: 67.5, name: 'Nordeste', abbr: 'NE' },
        { min: 67.5, max: 112.5, name: 'Leste', abbr: 'L' },
        { min: 112.5, max: 157.5, name: 'Sudeste', abbr: 'SE' },
        { min: 157.5, max: 202.5, name: 'Sul', abbr: 'S' },
        { min: 202.5, max: 247.5, name: 'Sudoeste', abbr: 'SO' },
        { min: 247.5, max: 292.5, name: 'Oeste', abbr: 'O' },
        { min: 292.5, max: 337.5, name: 'Noroeste', abbr: 'NO' },
        { min: 337.5, max: 360, name: 'Norte', abbr: 'N' },
    ];
    
    const dir = directions.find(d => degrees >= d.min && degrees < d.max);
    return dir ? `${dir.name} (${dir.abbr})` : 'N/A';
}

export default function WindInfoCard({ windSpeed, windDirection, compact = false }) {
    const { level, type } = getWindStatus(windSpeed);
    const directionText = getWindDirection(windDirection);
    
    return (
        <LinearGradient
            colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.05)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={compact ? styles.titleCompact : styles.title}>VENTO</Text>
                <Feather name="wind" size={compact ? 24 : 28} color="#93C5FD" />
            </View>
            
            <View style={compact ? styles.contentCompact : styles.content}>
                <View style={[
                    styles.badge,
                    type === 'safe' && styles.badgeSafe,
                    type === 'warning' && styles.badgeWarning,
                    type === 'danger' && styles.badgeDanger,
                    type === 'unknown' && styles.badgeUnknown,
                ]}>
                    {type === 'safe' && <FontAwesome6 name="check" size={8} color="#86EFAC" />}
                    {type === 'warning' && <FontAwesome6 name="triangle-exclamation" size={8} color="#FDE047" />}
                    {type === 'danger' && <FontAwesome6 name="xmark" size={8} color="#FCA5A5" />}
                    <Text style={[
                        styles.badgeText,
                        type === 'safe' && styles.badgeTextSafe,
                        type === 'warning' && styles.badgeTextWarning,
                        type === 'danger' && styles.badgeTextDanger,
                    ]}>{level}</Text>
                </View>
                
                <View style={styles.valueRow}>
                    <Text style={compact ? styles.valueCompact : styles.value}>{windSpeed ?? '-'}</Text>
                    <Text style={compact ? styles.unitCompact : styles.unit}>km/h</Text>
                </View>
                
                <View style={styles.detailRow}>
                    <Ionicons name="compass-outline" size={14} color="#93C5FD" />
                    <Text style={compact ? styles.detailTextCompact : styles.detailText}>{directionText}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}
