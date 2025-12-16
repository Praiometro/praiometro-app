import { StyleSheet } from "react-native";

export default StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#015486',
    },
    contentContainer: {
        paddingBottom: 40,
        flexGrow: 1,
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 10,
    },
    temperature: {
        color: '#FFFFFF',
        fontSize: 80,
        fontWeight: '400',
        textAlign: 'center',
        position: 'relative',
        left: 16,
    },
    infoContainer: {
        marginTop: 16,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
    },
    squaresContainer: {
        flexDirection: 'row',
        gap: 16,
        width: '85%',
    },
    cardsRow: {
        flexDirection: 'row',
        gap: 16,
        width: '85%',
        justifyContent: 'space-between',
    },
    flexCard: {
        flex: 1,
        width: 'auto',
        minHeight: 180,
    },
    fullScreen: {
        flex: 1,
        backgroundColor: '#015486',
    },
    update: {
        color: '#e7e9edff',
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 20,
    },
})