import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        // backgroundColor removed, handled by LinearGradient
        borderRadius: 16,
        padding: 16,
        flexGrow: 1,
        height: 160,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    headerUmidade: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },
    headerSensacao: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(147, 197, 253, 1)', // blue-200
    },
    infoContainer: {
        flexDirection: 'column',
        gap: 8,
        marginTop: 8,
    },  
    mainText: {
        fontSize: 40,
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'left',
    },
    description: {
        fontSize: 11,
        fontWeight: '400',
        color: 'rgba(147, 197, 253, 0.8)',
        textAlign: 'left',
        marginTop: 6,
        width: 120,
    },
});