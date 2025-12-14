import { View, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

function getWaveStatus(height) {
    if (height == null) return { level: 'N/A', type: 'unknown' };
    if (height < 0.5) return { level: 'CALMO', type: 'safe' };
    if (height < 1.5) return { level: 'MODERADO', type: 'warning' };
    return { level: 'ALTO', type: 'danger' };
}

export default function WavesInfoCard({ waveHeight, wavePeriod }) {
    const { level, type } = getWaveStatus(waveHeight);
    
    return (
        <LinearGradient
            colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.05)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.title}>ONDAS</Text>
                <MaterialIcons name="waves" size={28} color="#93C5FD" />
            </View>
            
            <View style={styles.content}>
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
                    <Text style={styles.value}>{waveHeight ?? '-'}</Text>
                    <Text style={styles.unit}>m</Text>
                </View>
                
                <View style={styles.detailRow}>
                    <Ionicons name="timer-outline" size={14} color="#93C5FD" />
                    <Text style={styles.detailText}>{wavePeriod ?? '-'}s período</Text>
                </View>
            </View>
        </LinearGradient>
    );
}
