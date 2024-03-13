import { View, TextInput, FlatList, ListRenderItemInfo, Text } from "react-native";
import EventsItem from "../../components/EventsItem";
import { eventsList, Events } from "../../constants/eventsList";
import { HeaderEvents } from "../../components/HeaderEvents";
import { useState, useEffect, useContext } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { styles } from "./styles";
import { OtherSeparator } from "../../components/OtherSeparator";
import PostsServices from "../../services/PostsServices";
import { AuthContext } from "../../contexts/auth";

export interface postsData {
  id: number,
  title: string,
  description: string,
  data: string,
  place: string,
  is_paid: boolean,
  price: string,
  photo: string,
}


export default function HomePage() {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState<postsData[] | undefined>(undefined);
  const [filteredPosts, setFilteredPosts] = useState<postsData[]>([]);
  const Auth = useContext(AuthContext);

  useEffect(() => {
    PostsServices.getPosts()
      .then(response => {
        console.log(response?.data.posts);
        setPosts(response?.data.posts);
      })
      .catch(error => {
        console.error("Erro ao buscar os posts:", error);
      });
  }, []);

  useEffect(() => {
    if (posts) {
      const filtered = posts.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchText, posts]);

  function renderItem({ item }: ListRenderItemInfo<postsData>) {
    return <EventsItem {...item} />;
  }

  return (
    <View style={styles.container}>

        <Text style={styles.title}>
          Em alta
        </Text>
        <HeaderEvents></HeaderEvents>
        
        <View style= {{padding:7}}>
          <View style={styles.search_area}>
            <TextInput
              style={styles.search_bar}
              placeholder="Pesquise um evento"
              placeholderTextColor="#FFB74A"
              value={searchText}
              onChangeText={(t) => setSearchText(t)}
            />
            <EvilIcons  style={styles.icon} name="search" size={30} color="#FFB74A"></EvilIcons>
        </View>
        </View>
        <FlatList
              keyExtractor={item => item.title}
              data={filteredPosts}
              renderItem={({item}) => <EventsItem{...item}/>}
              contentContainerStyle={{ padding: 10, paddingTop: 20, paddingBottom: 40 }}
              ItemSeparatorComponent={OtherSeparator}
        />
    </View>
  );
}

