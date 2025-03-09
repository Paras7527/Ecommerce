import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Headerr from '../Component/Header'
import { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'

const sizes = ['S', 'M', 'L', 'XL']
const colorsArray = ['#a0e100', '#6029fc', '#eb313a', '#585b52', '#006b69']

const ProductDetailsScreen = () => {
  const route = useRoute();
  const item = route.params?.item || {};
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <LinearGradient colors={['#f8cbfb', '#FFFFFF']} style={styles.linearGradient}>
      <View style={styles.Headerrcontainer}>
        
      </View>
      <Image source={{ uri: item.image }} style={styles.coverimage} />
      <View style={styles.contentcontainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={[styles.price, styles.title]}>${item.price || '39.99'}</Text>
      </View>
      <Text style={[styles.title, styles.sizeText]}>Size</Text>
      <View style={styles.sizecontainer}>
        {sizes.map((size, index) => (
          <TouchableOpacity style={styles.sizevalueconatiner} onPress={() => { setSelectedSize(size) }} key={index} >
            <Text style={[styles.sizevalue, selectedSize === size && { color: "#ff6ee7" }]}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={[styles.title, styles.colorText]}>Colours</Text>
      <View style={styles.colourcontainer}>
        {colorsArray.map((color, index) => (
          <View style={[styles.circleborder, selectedColor === color && { borderColor: color, borderWidth: 1, },
          ]} key={index}>
            <TouchableOpacity onPress={() => { setSelectedColor(color); }} style={[styles.sizevalueconatiner, { backgroundColor: color }]} />
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
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
    marginTop: 30,
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
    fontWeight: "bold",
    marginRight: 20,
  },
  price: {
    color: "4D4C4C",
  },
  sizeText: {
    marginTop: 20,
    marginLeft: 20,
    color: "#4D4C4C",
    fontWeight: "bold",
  },
  sizecontainer: {
    flexDirection: "row",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    justifyContent: "space-between",
  },
  sizevalueconatiner: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  sizevalue: {
    fontSize: 18,
    color: "#4D4C4C",
    fontWeight: "bold",
    marginTop: 10,
  },
  colorText: {
    marginTop: 20,
    marginLeft: 20,
    color: "#4D4C4C",
    fontWeight: "bold",
  },
  colourcontainer: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
  },
  circleborder: {
    height: 48,
    width: 48,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  Button: {
    backgroundColor: "#ff6ee7",
    padding: 20,
    borderRadius: 30,
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  }
})