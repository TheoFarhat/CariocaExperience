import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { postsData } from "../pages/HomePage";
import PostsServices from "../services/PostsServices";
import { AuthContext } from "../contexts/auth";
import { useContext, useState } from "react";

type PostInfo = {
    title: string;
    description: string;
    place: string;
    id: number;
    data: string;
    price: string;
    postFunction: any;
    photo: string
  };
  



export default function MyEventsItem({title, photo, description, place, data, price,id, postFunction}: PostInfo) {
    const Auth = useContext(AuthContext);
    const [isSaved, setIsSaved] = useState(false);
    const [savedPost, setSavedPost] = useState<any[]>();
    const removeSaved = () => {
        PostsServices.removeSavedPost(Auth.token, id).then(response => {
          setIsSaved(false);
          postFunction();
          
        })
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
                    <EvilIcons name="location" size={25} color="#ff8800"></EvilIcons>
                </View>
                <Text style={styles.description}>
                    {data}
                </Text>
                <Text style={styles.description}>
                    {price}
                </Text>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.button_text} onPress={removeSaved}>
                    Remover
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
        backgroundColor: "#ffdca7",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
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
        color: "#ff8800",

      },
      icon_location: {
        flexDirection: "row",
        flex: 1,
        alignItems: "baseline",
      },
      button: {
        backgroundColor: "red",
        width: 100,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 100,
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

    
  });