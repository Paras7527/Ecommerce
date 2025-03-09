import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Headerr from '../Component/Header'
const ImageUrl = "https://www.shutterstock.com/image-photo/confident-young-african-american-female-600nw-2258698735.jpg"
const ProductDetailsScreen = () => {
  return (
    <LinearGradient colors={['#f8cbfb', '#FFFFFF']} style={styles.linearGradient}>
      <View style={styles.Headerrcontainer}>
        <Headerr />
      </View>
      <Image source={{ uri: ImageUrl }} style={styles.coverimage} />
      <View style={styles.contentcontainer}>
        <Text style={styles.title}>Jacket</Text>
        <Text style={[styles.price, styles.title]}>$39.99</Text>
      </View>
      <View style={styles.sizeContainer}>
        <Text style={styles.title}>Size</Text>
        <Text style={styles.title}>M</Text>
        
      </View>
    </LinearGradient>

  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  Headerrcontainer: {
    padding: 20,
  },
  coverimage: {
    width: "100%",
    height: 430,
    marginTop: 90,
  },
  contentcontainer: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    color: "#444444",
  },
  price: {
    color: "4D4C4C",
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  }
})