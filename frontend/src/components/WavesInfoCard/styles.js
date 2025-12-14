import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor removed, handled by LinearGradient
        borderRadius: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        minHeight: 130,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 11,
        fontWeight: '700',
        color: 'rgba(147, 197, 253, 1)', // blue-200
        textTransform: 'uppercase',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
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
    badgeSafe: {
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 0.3)',
    },
    badgeWarning: {
        backgroundColor: 'rgba(234, 179, 8, 0.2)',
        borderColor: 'rgba(234, 179, 8, 0.3)',
    },
    badgeDanger: {
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        borderColor: 'rgba(239, 68, 68, 0.3)',
    },
    badgeUnknown: {
        backgroundColor: 'rgba(107, 114, 128, 0.2)',
        borderColor: 'rgba(107, 114, 128, 0.3)',
    },
    badgeText: {
        fontSize: 10,
        fontWeight: '700',
    },
    badgeTextSafe: {
        color: '#86EFAC', // green-300
    },
    badgeTextWarning: {
        color: '#FDE047', // yellow-300
    },
    badgeTextDanger: {
        color: '#FCA5A5', // red-300
    },
    valueRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 4,
    },
    value: {
        fontSize: 28,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    unit: {
        fontSize: 14,
        color: 'rgba(147, 197, 253, 1)',
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginTop: 6,
    },
    detailText: {
        fontSize: 12,
        color: 'rgba(147, 197, 253, 1)',
    },
});
