import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({item, HandleLike}) => { 
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("PRODUCT_DETAILS",{item})}} style={styles.container}>
      <Image source={{uri:item.image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity onPress={()=>{HandleLike(item)}} style={styles.heartContainer}>
        {item?.isLiked? (
          <AntDesign name={"heart"} size={20} color={"#fa3333"} />
        ) : (
          <AntDesign name={"hearto"} size={20} color={"#fa3333"} />)
        }
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    position: "relative",
  },
  image: {
    width: "90%",
    height: 250,
    borderRadius: 25,
    marginVertical: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    color: "#646464",
    fontWeight: "bold",
  },
  price: {
    fontSize: 17,
    marginLeft: 10,
    color: "#898989",
    fontWeight: "bold",
  },
  content: {
    paddingLeft: 15,
  },
  heartContainer: {
    position: "absolute",
    right: 20,
    top: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 6,
  }
})