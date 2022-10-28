import {
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  refreshControl,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { dataItems } from "../assets/data/data";
import { Loading } from "../components/Loading";

const PostImage = styled.Image({
  borderRadius: "10px",
  width: "100%",
  height: 250,
  marginBottom: 20,
});

const PostText = styled.Text({
  fontSize: 18,
  lineHeight: 24,
});

export function FullPostScreen({ route, navigation }) {
  const { id, title } = route.params;
  const [data, setData] = useState(dataItems.find((item) => item.id === id));
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

  useEffect(() => {
    navigation.setOptions({
      title,
    });
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={{ paddind: 20 }}>
      <PostImage source={{ uri: data.imageUrl }} />
      <PostText>{data.text}</PostText>
    </View>
  );
}
