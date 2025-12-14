import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '85%',
        // backgroundColor removed, handled by LinearGradient
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
    },
    headerText: {
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(147, 197, 253, 1)', // blue-200
    },
    scrollContent: {
        paddingRight: 16,
    },
    topRow: {
        flexDirection: 'row',
    },
    bottomRow: {
        flexDirection: 'row',
        marginTop: 4,
    },
    hourItem: {
        alignItems: 'center',
        gap: 4,
    },
    hourText: {
        fontSize: 9,
        color: 'rgba(147, 197, 253, 0.8)',
        fontFamily: 'monospace',
    },
    tempText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    rainItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
    },
    rainText: {
        fontSize: 9,
    },
    scrollHint: {
        fontSize: 11,
        color: 'rgba(147, 197, 253, 0.5)',
        textAlign: 'center',
        marginTop: 10,
    },
    emptyText: {
        fontSize: 13,
        color: 'rgba(147, 197, 253, 0.6)',
        textAlign: 'center',
        paddingVertical: 20,
    },
});
