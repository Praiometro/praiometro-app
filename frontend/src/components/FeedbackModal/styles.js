import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'flex-end',
    },
    container: {
        width: '100%',
        backgroundColor: '#023E63',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        paddingBottom: 40,
        gap: 20,
    },
    handle: {
        width: 48,
        height: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 2,
        alignSelf: 'center',
        marginBottom: 8,
    },
    feedbackTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    starsContainer: {
        flexDirection: 'row',
        gap: 6,
    },
    atributesContainer: {
        justifyContent: 'space-between',
        gap: 16,
        paddingHorizontal: 4,
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
    closeButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 12,
        flex: 1,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    closeButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#22C55E', // green-500
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 12,
        flex: 1,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12,
        marginTop: 8,
    },
    validationError: {
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(239, 68, 68, 0.5)',
        borderRadius: 12,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    validationErrorText: {
        color: '#FCA5A5', // red-300
        fontSize: 14,
        flex: 1,
    },
})