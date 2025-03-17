import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Headerr from '../Component/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../Component/Category';
import { FlatList } from 'react-native';
import { useState } from 'react';
import ProductCard from '../Component/ProductCard';
import data from '../data/data.json';

const Categories = ['Trending Now', 'All', 'Mens', 'Women', 'Kids'];
const HomeScreen = () => {
  const [products, setProducts] = useState(data.products);
  const [selectedCategory, setSelectedCategory] = useState("Mens");
  const[isLiked,setisLiked]=useState(false);
  const HandleLike = (item) => {
    const newProducts = products.map((product) => {
      if (product.id === item.id) {
        return { ...product, isLiked: !product.isLiked };
      }
      return product;
    });
    setProducts(newProducts);
  }
  return (
    <LinearGradient colors={['#f8cbfb', '#FFFFFF']} style={styles.Container}>
      <Headerr />
      <FlatList
        numColumns={2}
        ListHeaderComponent={
          <>
            <Text style={styles.matchText}>Match Your Style</Text>
            <View style={styles.InputContainer}>
              <Fontisto name={"search"} size={25} />
              <TextInput style={styles.TextInput} placeholder="Search" />
            </View>
            <FlatList data={Categories}
              renderItem={({ item }) => <Category item={item} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />}
              keyExtractor={(item) => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingtop: 150 }}
            />
          </>
        }
        data={products}
        renderItem={({item,index})=><ProductCard item={item} HandleLike={HandleLike}/>} />
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 15,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff"
  },
  matchText: {
    fontSize: 28,
    color: "#000",
    marginTop: 30,
    fontWeight: 600,
  },
  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 300,
    marginTop: 20,
  },
  TextInput: {
    fontSize: 18,
    marginLeft: 15,
  }
})