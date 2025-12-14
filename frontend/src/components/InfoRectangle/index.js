import { View, Text } from 'react-native';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function InfoRectangle({title, description = "Sem informações", children, danger = false, safe = false}) {
  return (
    <LinearGradient
        colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.05)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
    >
      <View style={styles.content}>
        {children}
        <View style={styles.textContainer}>
            <Text style={styles.boldText}>{description}</Text>
            <Text style={styles.regularText}>{title}</Text>
        </View>
      </View>
      {danger && (
        <View style={styles.alertMessage}>
          <Foundation name="alert" size={35} color="#FFC107" />
          <Text style={styles.alertText}>Perigoso para banhistas!</Text>
        </View>
      )}
      {safe && (
        <View style={styles.alertMessage}>
          <FontAwesome6 name="person-swimming" size={32} color="#015486" />
          <Text style={styles.alertText}>Seguro para banhistas!</Text>
        </View>
      )}
    </LinearGradient>
  );
}