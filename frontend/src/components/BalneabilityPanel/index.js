import { View, Text } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import styles from './styles';
import { formatHour } from '../../helpers/formatHour';

export default function BalneabilityPanel({ balneabilidade, timestamp }) {
    const isProper = balneabilidade === true;
    const isImproper = balneabilidade === false;
    const isUnknown = balneabilidade == null;

    return (
        <View style={[
            styles.container,
            isProper && styles.containerProper,
            isImproper && styles.containerImproper,
            isUnknown && styles.containerUnknown,
        ]}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    {isProper && <FontAwesome6 name="check" size={20} color="#FFFFFF" />}
                    {isImproper && <FontAwesome6 name="xmark" size={20} color="#FFFFFF" />}
                    {isUnknown && <FontAwesome6 name="question" size={20} color="#FFFFFF" />}
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        {isProper && 'Própria para Banho'}
                        {isImproper && 'Imprópria para Banho'}
                        {isUnknown && 'Indisponível'}
                    </Text>
                    {timestamp && (
                        <Text style={styles.subtitle}>
                            Atualizado hoje às {formatHour(timestamp)}
                        </Text>
                    )}
                </View>
            </View>
            <Entypo 
                name="water" 
                size={40} 
                color={isProper ? 'rgba(22, 101, 52, 0.3)' : isImproper ? 'rgba(127, 29, 29, 0.3)' : 'rgba(107, 114, 128, 0.3)'} 
            />
        </View>
    );
}
