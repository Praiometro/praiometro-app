import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '85%',
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerProper: {
        backgroundColor: '#22C55E',
        borderWidth: 1,
        borderColor: '#4ADE80',
    },
    containerImproper: {
        backgroundColor: '#EF4444',
        borderWidth: 1,
        borderColor: '#F87171',
    },
    containerUnknown: {
        backgroundColor: '#6B7280',
        borderWidth: 1,
        borderColor: '#9CA3AF',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flexDirection: 'column',
        gap: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    subtitle: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.8)',
    },
});
