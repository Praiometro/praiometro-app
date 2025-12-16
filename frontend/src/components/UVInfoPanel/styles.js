import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '85%',
        // backgroundColor removed, handled by LinearGradient
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    content: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 12,
        fontWeight: '700',
        color: 'rgba(147, 197, 253, 1)', // blue-200
        textTransform: 'uppercase',
    },
    valueRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 12,
        marginBottom: 8,
    },
    value: {
        fontSize: 36,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        gap: 4,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
        borderWidth: 1,
        marginBottom: 6,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: '700',
    },
    tipRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 6,
    },
    tipText: {
        fontSize: 13,
        color: 'rgba(147, 197, 253, 1)',
        flex: 1,
        lineHeight: 18,
    },
    uvBar: {
        width: 6,
        height: 64,
        borderRadius: 3,
        marginLeft: 16,
        opacity: 0.8,
    },
});
