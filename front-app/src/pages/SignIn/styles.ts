import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFB74A",
      alignItems: "center",
      justifyContent: "space-around"
    },
    title_format: {
      alignItems: "center",
      
    },
    title: {
      lineHeight: 50,
      color: "black",
      fontSize: 48,
      fontFamily: "Bayon"
    },
    TextInput: {
      marginBottom: 15,
      width: 300,
      height: 55,
      backgroundColor: "#F1F1F1",
      paddingLeft: 10,
      fontSize: 23,
      color: "black",
      borderRadius: 5,
      fontFamily: "Bebas",
    },
    button: {
      backgroundColor: "#E48A00",
      width: 200,
      height: 60,
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      borderRadius: 4
    },
    button_text: {
      fontSize: 24,
      color: "black",
      fontFamily: "Bebas"
    },
    sign_up: {
      color: "black",
      fontSize: 16,
      fontFamily: "Bebas"
    },
    image: {
      height: 40,
      width: 40
    },
    errorText: {
      color: "red",
      fontFamily: "Bebas",
      fontSize: 20,
      marginTop: -10
      },
      forms: {
        display: "flex",
        flexDirection: "column",
      },
      form_error: {
        marginBottom: 10
      }
})