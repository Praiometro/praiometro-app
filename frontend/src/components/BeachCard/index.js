import styles from './styles';
import { Pressable, Text, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { LinearGradient } from 'expo-linear-gradient';

function getUVRisk(uvIndex) {
    if (uvIndex == null) return null;
    if (uvIndex <= 2) return 'BAIXO';
    if (uvIndex <= 5) return 'MODERADO';
    if (uvIndex <= 7) return 'ALTO';
    if (uvIndex <= 10) return 'MUITO ALTO';
    return 'EXTREMO';
}

export default function BeachCard({beachName, especificLocation = 'Sem localização específica', id, navigation, balneabilidade, uvIndex}) {
    const uvRisk = getUVRisk(uvIndex);
    
    return (
        <Pressable 
            onPress={() => navigation.navigate('Praia', {id: id})} 
            style={({ pressed }) => [
                styles.pressableContainer, // Changed from styles.container
                pressed ? { opacity: 0.8 } : null
            ]}
        >
            <LinearGradient
                colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.05)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientContainer}
            >
                <View style={styles.leftContainer}>
                    <FontAwesome6 name="location-dot" size={25} color="#93C5FD" />
                    <View style={styles.textContainer}>
                        <Text style={styles.beachName} numberOfLines={1}>{beachName}</Text>
                        <Text style={styles.especificLocation} numberOfLines={1}>{especificLocation}</Text>  
                    </View>
                </View>
                
                <View style={styles.rightContainer}>
                    {balneabilidade !== undefined && balneabilidade !== null && (
                        <View style={[
                            styles.statusBadge,
                            balneabilidade ? styles.statusBadgeProper : styles.statusBadgeImproper
                        ]}>
                            <FontAwesome6 
                                name={balneabilidade ? "check" : "xmark"} 
                                size={8} 
                                color="#FFFFFF" 
                            />
                            <Text style={styles.statusBadgeText}>
                                {balneabilidade ? 'Própria' : 'Imprópria'}
                            </Text>
                        </View>
                    )}
                    
                    {uvIndex != null && uvRisk && (
                        <View style={styles.uvBadge}>
                            <Text style={styles.uvBadgeText}>UV {uvIndex} ({uvRisk})</Text>
                        </View>
                    )}
                </View>
            </LinearGradient>
        </Pressable>
    );
}