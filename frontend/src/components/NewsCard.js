import { Pressable, Text, View, Image, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { StyleSheet } from 'react-native';

export default function NewsCard({ item }) {
    const handlePress = () => {
        if (item.link) {
            Linking.openURL(item.link);
        }
    };

    // Formatar data
    const date = new Date(item.pubDate).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    return (
        <Pressable onPress={handlePress} style={({ pressed }) => [
            styles.pressableContainer,
            pressed ? { opacity: 0.8 } : null
        ]}>
            <LinearGradient
                colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.05)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientContainer}
            >
                {item.imageUrl && (
                    <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
                )}
                <View style={styles.contentContainer}>
                    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                    
                    <View style={styles.footer}>
                        <View style={styles.sourceContainer}>
                            <FontAwesome6 name="newspaper" size={12} color="#93C5FD" />
                            <Text style={styles.source}>{item.source}</Text>
                        </View>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                </View>
            </LinearGradient>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressableContainer: {
        width: '100%',
        marginBottom: 12,
    },
    gradientContainer: {
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 12,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    contentContainer: {
        flexDirection: 'column',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
    },
    sourceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    source: {
        fontSize: 12,
        color: '#93C5FD',
        fontWeight: '500',
    },
    date: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.7)',
    }
});
