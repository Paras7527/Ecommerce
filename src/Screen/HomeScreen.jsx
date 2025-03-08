import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Component/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../Component/Category';
import { FlatList } from 'react-native';
import { useState } from 'react';
import ProductCard from '../Component/ProductCard';

const Categories = ['Trending Now', 'All', 'Mens', 'Women', 'Kids'];
const HomeScreen = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <LinearGradient colors={['#9ffffc', '#FFFFFF']} style={styles.linearGradient} >
      <Header />
      <Text style={styles.matchText}>Match Your Style</Text>
      <View style={styles.InputContainer}>
        <Fontisto name={"search"} size={25} />
        <TextInput style={styles.TextInput} placeholder="Search" />
      </View>
      <FlatList data={Categories}
        renderItem={({ item }) => <Category item={item} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false} />

      {/* Product List */}
      <View style={{flexDirection:"row"}}>
        <ProductCard/>
        <ProductCard/>
      </View>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  linearGradient: {
    padding: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff"
  },
  matchText: {
    fontSize: 28,
    color: "#000",
    marginTop: 100,
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