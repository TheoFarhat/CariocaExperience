import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#FFB74A",
        
    },
    icon_box: {
        padding: 60,
        alignItems: "center",
        
    },
    info: {
        padding: 15,
        gap: 5,
        flex: 1,
        flexDirection: "column",
    },
    title: {
        fontFamily: "Bebas",
        fontSize: 25
    },
    button: {
        backgroundColor: "white",
        width: 120,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        alignSelf: "center",
        borderColor: "black",
        borderWidth: 1,
      },
      button_text: {
        fontSize: 20,
        color: "black",
        fontFamily: "Bebas",
        textAlign: "center",
      },
      TextInput: {
        width: 300,
        height: 60,
        backgroundColor: "#F1F1F1",
        paddingLeft: 10,
        fontSize: 23,
        color: "black",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "black",
        fontFamily: "Bebas"
      },
      errorText: {
        color: "red",
        fontFamily: "Bebas",
        fontSize: 20,
        marginTop: 2
        },
        
})   