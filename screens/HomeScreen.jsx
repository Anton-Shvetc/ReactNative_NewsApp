import {
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "../components/Post";
import { useState, useEffect } from "react";
import { dataItems } from "../assets/data/data";
import { Loading } from "../components/Loading";

export function HomeScreen({navigation}) {
  const [items, setItems] = useState(dataItems);
  const [isLoading, setIsLoaing] = useState(true);

  const fetchPosts = () => {
    setIsLoaing(true);
    // axios.get('').then(({data}) => {
    //   setItems(data)
    // }).catch((err) => {
    //   console.log(err)
    // }).finally(() =>{
    //   setIsLoaing(false)
    //   })

    setTimeout(() => {
      setIsLoaing(false);
    }, 3000);
  };

  useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      // <View style={{height: '100%', justifyContent: "center", alignItems: "center" }}>
      //   <ActivityIndicator size="large" />
      //   <Text style={{ marginTop: 5 }}>Загрузка...</Text>
      // </View>
      <Loading />
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
            <Post {...item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
