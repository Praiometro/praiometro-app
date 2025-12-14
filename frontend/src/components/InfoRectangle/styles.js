import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        // backgroundColor removed, handled by LinearGradient
        width: '85%',
        minHeight: 90,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        paddingVertical: 12,
    },
    content: {
        flexDirection: 'row',
        marginLeft: 16,
        alignItems: 'center',
        gap: 12
    },
    regularText: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(147, 197, 253, 1)', // blue-200
    },
    boldText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    textContainer: {
        flexDirection: 'column',
        gap: 2,
    },
    alertMessage: {
        alignItems: 'center',
        marginRight: 16,
    },
    alertText: {
        fontSize: 9,
        fontWeight: '600',
        color: '#FFFFFF',
        textAlign: 'center',
        width: 70,
    },
});