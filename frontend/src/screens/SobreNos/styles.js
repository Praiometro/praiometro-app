import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#015486',
        paddingVertical: 20,
        alignItems: 'center',   
    },
    header: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 24,
        borderRadius: 16,
        width: '90%',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#FFFFFF',
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: 'rgba(147, 197, 253, 1)', // blue-200
        textAlign: 'justify',
        lineHeight: 22,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 16,
    },
    instagramButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        paddingVertical: 14,
        borderRadius: 16,
        width: '48%',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    instagramButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    emailButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        paddingVertical: 14,
        borderRadius: 16,
        width: '48%',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    emailButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    attributionText: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
        textAlign: 'center',
        marginTop: 20,
    },
});