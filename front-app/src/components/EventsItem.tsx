import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { postsData } from "../pages/HomePage"
import EvilIcons from "@expo/vector-icons/EvilIcons";
import PostsServices from "../services/PostsServices";
import { AuthContext } from "../contexts/auth";
import { useState, useContext } from "react";

export default function EventsItem({title, description, place, data, price, photo, id}: postsData) {
const Auth = useContext(AuthContext);
  const [isSaved, setIsSaved] = useState(false);
  const [savedPost, setSavedPost] = useState<any[]>();
 

  const Save = () => {
      PostsServices.savePost(Auth.token, id).then(response => {
        setIsSaved(true);
      });
    }
  

  
    return (
        <>
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: photo }} />
            <View style={styles.content}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text numberOfLines={2} style={styles.description}>
                    {description}
                </Text>
                <View style={styles.icon_location}>
                    <Text style={styles.location}>
                        {place}
                    </Text>
                    <EvilIcons name="location" size={25} color="#FFB74A"></EvilIcons>
                </View>
                <Text style={styles.description}>
                    {data}
                </Text>
                <Text style={styles.description}>
                    {price}
                </Text>
                <TouchableOpacity style={styles.button} onPress={Save}>
                    <Text style={styles.button_text}>
                        Salvar
                    </Text>
                </TouchableOpacity>
            </View>   
        </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        borderColor: "#E48A00",
        borderWidth: 1
    },
    image: {
        height: 140,
        width: 140,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,

    },
    content: {
        flex: 1,
        marginLeft: 16
    },
    title: {
        fontSize: 25,
        fontFamily: "Bebas",
        color: "black",
        marginBottom: 16,
      },
      description: {
        fontFamily: "Bebas",
        fontSize: 17,
        color: "black",
      },
      location:  {
        fontFamily: "Bebas",
        fontSize: 17,
        color: "#FFB74A",

      },
      icon_location: {
        flexDirection: "row",
        flex: 1,
        alignItems: "baseline",
      },
      button: {
        backgroundColor: "#E48A00",
        width: 140,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        marginBottom: 10,
        alignSelf: "center",
        borderColor: "black",
        borderWidth: 1,
        marginLeft: 70,
      },
      button_text: {
        fontSize: 20,
        color: "black",
        fontFamily: "Bebas",
        textAlign: "center",
      },
  });