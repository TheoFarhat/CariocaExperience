import { View, Text, FlatList} from "react-native";
import { myEvents, myEventsList } from "../../constants/myEventsList";
import MyEventsItem from "../../components/MyEventsItem";
import { ListRenderItemInfo } from "react-native";
import { OtherSeparator } from "../../components/OtherSeparator";
import { styles } from "./styles";
import PostsServices from "../../services/PostsServices";
import { useState, useEffect, useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import { useFocusEffect } from "@react-navigation/native";
import * as React from "react";



interface postsData {
  id: number;
  title: string;
  description: string;
  data: string;
  place: string;
  is_paid: boolean;
  price: string;
  photo: string;
}



export default function MyEventsPage() {
  const [myPosts, setMyPosts] = useState<postsData[]>();
  const Auth = useContext(AuthContext);

  

    

    const getMyPosts = () => {
      PostsServices.savedPosts(Auth.token).then(response => {
        setMyPosts(response?.data.saved);
        
      })
    }

    useEffect(() => {
      PostsServices.savedPosts(Auth.token).then(response => {
        console.log("API Response:", response?.data);
        console.log(response?.data.saved);
        setMyPosts(response?.data.saved);
        
      })
    },[]);

    useFocusEffect(
      React.useCallback(() => {
        getMyPosts();
        return () => {
          setMyPosts([]);
        };
      }, [])
    );
  
    const reload = () => {
      setMyPosts([]);
      getMyPosts();
    }
    
    function renderItem({ item }: ListRenderItemInfo<postsData>) {
      return <MyEventsItem {...item}postFunction={reload} />;
  }
  return (
    <>
     <View style={styles.container}>
        <View style={styles.title_box}>
            <Text style={styles.title} >
                Meus Eventos
            </Text>
        </View> 
        <FlatList
            keyExtractor={item => item.title}
            data={myPosts}
            renderItem={renderItem}
            contentContainerStyle={{ padding: 10 }}
            ItemSeparatorComponent={OtherSeparator}
            />  
     </View>
     
    </>
  );
}

