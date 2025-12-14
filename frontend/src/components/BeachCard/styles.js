import { StyleSheet } from "react-native";

export default StyleSheet.create({
    pressableContainer: {
        width: '90%',
        marginBottom: 8,
    },
    gradientContainer: {
        borderRadius: 16,
        minHeight: 75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 8,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 12,
        gap: 2,
        flex: 1,
    },
    beachName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    especificLocation: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(147, 197, 253, 1)', // blue-200 equivalent
    },
    rightContainer: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 4,
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    statusBadgeProper: {
        backgroundColor: '#22C55E', // green-500
    },
    statusBadgeImproper: {
        backgroundColor: '#EF4444', // red-500
    },
    statusBadgeText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '700',
    },
    uvBadge: {
        backgroundColor: 'rgba(234, 179, 8, 0.8)', // yellow-500/80
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
    },
    uvBadgeText: {
        color: '#000000',
        fontSize: 10,
        fontWeight: '700',
    },
})