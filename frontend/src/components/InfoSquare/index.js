import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function InfoSquare({children, title, info, description}) {
  return (
    <LinearGradient
        colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.05)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
    >
        <View style={styles.infoContainer}>
            <View style={title === 'Umidade' ? styles.headerUmidade : styles.headerSensacao}>
                {children}
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
            <Text style={styles.mainText}>{info}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
    </LinearGradient>
  );
}