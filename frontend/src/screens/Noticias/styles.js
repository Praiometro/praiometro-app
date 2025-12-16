import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#015486',
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
        gap: 16,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#015486',
        padding: 20,
    },
    messageText: {
        color: '#FAFAFA',
        fontSize: 18,
        marginBottom: 8,
        textAlign: 'center',
    },
    subMessageText: {
        color: '#FAFAFA',
        fontSize: 16,
        textAlign: 'center',
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    }
});
