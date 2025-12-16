import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        minHeight: 130,
        justifyContent: 'space-between',
    },
    containerCompact: {
        flex: 1,
        borderRadius: 16,
        padding: 16, 
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        minHeight: 130,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    headerCompact: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 11,
        fontWeight: '700',
        color: 'rgba(147, 197, 253, 1)',
        textTransform: 'uppercase',
    },
    titleCompact: {
        fontSize: 12, 
        fontWeight: '700',
        color: 'rgba(147, 197, 253, 1)',
        textTransform: 'uppercase',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    contentCompact: {

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
        color: '#86EFAC',
    },
    badgeTextWarning: {
        color: '#FDE047',
    },
    badgeTextDanger: {
        color: '#FCA5A5',
    },
    valueRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 4,
        marginBottom: 8,
    },
    value: {
        fontSize: 28,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    valueCompact: {
        fontSize: 36, 
        fontWeight: '700',
        color: '#FFFFFF',
    },
    unit: {
        fontSize: 14,
        color: 'rgba(147, 197, 253, 1)',
    },
    unitCompact: {
        fontSize: 14, 
        color: 'rgba(147, 197, 253, 1)',
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,

    },
    detailText: {
        fontSize: 12,
        color: 'rgba(147, 197, 253, 1)',
    },
    detailTextCompact: {
        fontSize: 13, 
        color: 'rgba(147, 197, 253, 1)',
    },
});
