import { View, Text } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

function getUVRisk(uvIndex) {
    if (uvIndex == null) return { level: 'N/A', color: '#9CA3AF', bgColor: 'rgba(156, 163, 175, 0.2)' };
    if (uvIndex <= 2) return { level: 'BAIXO', color: '#22C55E', bgColor: 'rgba(34, 197, 94, 0.2)' };
    if (uvIndex <= 5) return { level: 'MODERADO', color: '#EAB308', bgColor: 'rgba(234, 179, 8, 0.2)' };
    if (uvIndex <= 7) return { level: 'ALTO', color: '#F97316', bgColor: 'rgba(249, 115, 22, 0.2)' };
    if (uvIndex <= 10) return { level: 'MUITO ALTO', color: '#EF4444', bgColor: 'rgba(239, 68, 68, 0.2)' };
    return { level: 'EXTREMO', color: '#A855F7', bgColor: 'rgba(168, 85, 247, 0.2)' };
}

function getUVTip(uvIndex) {
    if (uvIndex == null) return 'Dados indisponíveis';
    if (uvIndex <= 2) return 'Não requer proteção especial';
    if (uvIndex <= 5) return 'Use óculos de sol e protetor solar';
    if (uvIndex <= 7) return 'Use protetor solar e chapéu';
    if (uvIndex <= 10) return 'Risco de queimadura. Use filtro solar FPS 30+, camisa e chapéu';
    return 'Evite exposição ao sol entre 10h-16h';
}

export default function UVInfoPanel({ uvIndex, style, showBar = true }) {
    const { level, color, bgColor } = getUVRisk(uvIndex);
    const tip = getUVTip(uvIndex);

    return (
        <LinearGradient
            colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.05)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.container, style]}
        >
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>ÍNDICE UV</Text>
                    <FontAwesome6 name="sun" size={20} color="#FBBF24" />
                </View>
                
                <View style={styles.valueRow}>
                    <Text style={styles.value}>{uvIndex ?? '-'}</Text>
                    <View style={[styles.badge, { backgroundColor: bgColor, borderColor: color }]}>
                        <FontAwesome6 
                            name={uvIndex > 7 ? "fire" : "check"} 
                            size={10} 
                            color={color} 
                        />
                        <Text style={[styles.badgeText, { color }]}>{level}</Text>
                    </View>
                </View>

                <View style={styles.tipRow}>
                    <FontAwesome6 name="circle-info" size={14} color="#93C5FD" />
                    <Text style={styles.tipText}>{tip}</Text>
                </View>
            </View>
            
            {showBar && (
                <LinearGradient
                    colors={['#FBBF24', '#F97316', '#EF4444']}
                    style={styles.uvBar}
                />
            )}
        </LinearGradient>
    );
}
