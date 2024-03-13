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
        padding: 30,
        justifyContent: "space-around",
        flex: 1,
        flexDirection: "row"
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
})   