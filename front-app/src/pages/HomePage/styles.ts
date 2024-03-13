import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    search_area: {
      flexDirection: "row",
      alignSelf: "center",
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 10,
      width: 250,
      justifyContent: "space-between",
    },
    search_bar: {
      fontFamily: "Bayon",
      fontSize: 18,
      marginLeft: 5,
      color:"#FFB74A"
    },
    icon: {
      marginRight: 5
    },
    title: {
      fontSize: 18,
      fontFamily: "Bayon",
      marginLeft: 5
    }
  });
  