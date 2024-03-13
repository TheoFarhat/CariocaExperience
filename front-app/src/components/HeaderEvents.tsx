import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export function HeaderEvents () {
  

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inside}>
        <Image source={require("../../assets/imgs/pista-lagoa.jpg")} style={styles.image_description}></Image>
        <View style={styles.text_description}>
          <Text style={styles.text_saturday}>
            Sábado, 10 de agosto 9:00h.
          </Text>
          <Text style={styles.text_title}>
            Workshop de Skateboard.
          </Text>
          <Text style={styles.text_title}>
            Aprenda a andar de Skate!
          </Text>
          <View style={styles.icon_location}>
            <Text style={styles.text_format_icon}>
              Pista da Lagoa
            </Text>
            <EvilIcons name="location" size={25} color="white"></EvilIcons>
          </View>
        </View>
        </View>
        <View>
        </View>
      </View>
      <Text style={styles.title}>
        Disponiveis
      </Text>
      <View style={{ height: 1, width: "100%", backgroundColor: "#b4835f97", marginBottom: 5 }} />
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFB74A",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderTopWidth: 1,
    borderTopColor: "black" ,
    height: 200,
  },

  title: {
    fontSize: 18,
    fontFamily: "Bayon",
    marginLeft: 5
  },
  inside: {
    flex: 1,
    flexDirection: "row",
    alignItems:"center", 
    marginLeft: 10,
    gap: 10,
    marginTop: 40
  },
  image_description: {
    height: 150,
    width: 150,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 35
  },
  text_description: {
    gap: 10,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 30
  },
  text_saturday: {
    fontSize: 18,
    color: "white",
    fontFamily: "Bebas",
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10
  },
  text_title: {
    fontSize: 19,
    fontFamily: "Bebas"
  },
  text_format: {
    fontSize: 17,
    fontFamily: "Bebas"
  },
  icon_location: {
    flexDirection: "row",
    flex: 1,
    alignItems: "baseline"
  },
  text_format_icon: {
    fontSize: 17,
    fontFamily: "Bebas",
    color: "white",
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10
  },
  button: {
    backgroundColor: "#E48A00",
    width: 140,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 4,
    marginBottom: 10,
    marginLeft: 150,
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
});