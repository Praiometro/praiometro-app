import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '85%',
        // backgroundColor removed, handled by LinearGradient
        borderRadius: 16,
        padding: 18,
        gap: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    feedbackTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    starsContainer: {
        flexDirection: 'row',
        gap: 4,
    },
    atributesContainer: {
        justifyContent: 'space-between',
        gap: 12,
        paddingHorizontal: 8,
    },
    atributeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    atributeTitle: {
        fontSize: 15,
        fontWeight: '400',
        color: 'rgba(147, 197, 253, 1)', // blue-200
    },
    button: {
        backgroundColor: '#3B82F6', // blue-500
        padding: 12, 
        borderRadius: 12, 
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});