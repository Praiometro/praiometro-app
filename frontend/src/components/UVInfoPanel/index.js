import { View, Text } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';


function getUVTip(uvIndex) {
    if (uvIndex == null) return 'Dados indisponíveis';
    if (uvIndex <= 2) return 'Não requer proteção especial';
    if (uvIndex <= 5) return 'Use óculos de sol e protetor solar';
    if (uvIndex <= 7) return 'Use protetor solar e chapéu';
    if (uvIndex <= 10) return 'Risco de queimadura. Use filtro solar FPS 30+, camisa e chapéu';
    return 'Evite exposição ao sol entre 10h-16h';
}

function getUVStatusType(uvIndex) {
    if (uvIndex == null) return 'unknown';
    if (uvIndex <= 2) return 'safe';

    if (uvIndex <= 7) return 'warning'; 
    return 'danger';
}

function getUVRiskLabel(uvIndex) {
     if (uvIndex == null) return 'N/A';
     if (uvIndex <= 2) return 'BAIXO';
     if (uvIndex <= 5) return 'MODERADO';
     if (uvIndex <= 7) return 'ALTO';
     if (uvIndex <= 10) return 'MUITO ALTO';
     return 'EXTREMO';
}

export default function UVInfoPanel({ uvIndex, style, showBar = true }) {
    const tip = getUVTip(uvIndex);
    const type = getUVStatusType(uvIndex);
    const level = getUVRiskLabel(uvIndex);

    let badgeStyle = {};
    let badgeTextStyle = {};
    let iconName = "circle-question";
    let iconColor = "#9CA3AF";


    if (type === 'safe') {
        badgeStyle = { backgroundColor: 'rgba(34, 197, 94, 0.2)', borderColor: 'rgba(34, 197, 94, 0.3)' };
        badgeTextStyle = { color: '#86EFAC' };
        iconColor = '#86EFAC';
        iconName = 'check';
    } else if (type === 'warning') {
        badgeStyle = { backgroundColor: 'rgba(234, 179, 8, 0.2)', borderColor: 'rgba(234, 179, 8, 0.3)' };
        badgeTextStyle = { color: '#FDE047' };
        iconColor = '#FDE047';
        iconName = 'triangle-exclamation';
    } else if (type === 'danger') {
        badgeStyle = { backgroundColor: 'rgba(239, 68, 68, 0.2)', borderColor: 'rgba(239, 68, 68, 0.3)' };
        badgeTextStyle = { color: '#FCA5A5' };
        iconColor = '#FCA5A5';
        if (uvIndex > 7) iconName = 'fire'; 
 

        iconName = 'fire'; 
    } else {
            badgeStyle = { backgroundColor: 'rgba(107, 114, 128, 0.2)', borderColor: 'rgba(107, 114, 128, 0.3)' };
            badgeTextStyle = { color: '#9CA3AF' }; 
            iconColor = '#9CA3AF';
            iconName = 'minus';
    }

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
                
                <View style={[styles.badge, badgeStyle]}>
                    <FontAwesome6 
                        name={iconName} 
                        size={8} 
                        color={iconColor} 
                    />
                    <Text style={[styles.badgeText, badgeTextStyle]}>{level}</Text>
                </View>

                <View style={styles.valueRow}>
                    <Text style={styles.value}>{uvIndex ?? '-'}</Text>
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
