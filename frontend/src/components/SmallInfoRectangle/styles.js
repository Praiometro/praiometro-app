import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        minHeight: 90,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        gap: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    regularText: {
        fontSize: 12,
        width: 70,
        fontWeight: '400',
        color: 'rgba(147, 197, 253, 1)', // blue-200
    },
    boldText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
});