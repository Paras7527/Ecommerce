import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Headerr from '../Component/Header'
import CartCard from '../Component/CartCard'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const CartScreen = () => {
  const { carts } = useContext(CartContext);
  return (
    <LinearGradient colors={['#f8cbfb', '#FFFFFF']} style={styles.Container}>
      <View style={styles.headercontainer}>
      <Headerr isCart={true}/>
      </View>
      <FlatList data={carts}
        ListFooterComponent={<>
          <View style={styles.priceContainer}>
            <View style={styles.priceAndTitle}>
              <Text style={styles.text}>Total:</Text>
              <Text style={styles.text}>$119.7</Text>
            </View>
            <View style={styles.priceAndTitle}>
              <Text style={styles.text}>shipping:</Text>
              <Text style={styles.text}>$0.00</Text>
            </View>
          </View>
          <View style={styles.Divider} />
          <View style={styles.priceAndTitle}>
            <Text style={styles.text}>Grand Total:</Text>
            <Text style={[styles.text, { color: "#000", fontWeight: 500 }]}>$119.7</Text>
          </View>
          <TouchableOpacity style={styles.checkoutContainer}>
            <Text style={styles.checkouttext}>Checkout</Text>
          </TouchableOpacity>
        </>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom:40 }}
        renderItem={CartCard} />


    </LinearGradient>
  )
}

export default CartScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 15,
  },
  priceContainer: {
    marginTop: 30,

  },
  priceAndTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: "#757575",
  },
  Divider: {
    height: 1,
    backgroundColor: "#757575",
    marginHorizontal: 20,
    marginVertical: 15,
    borderWidth: 0.5,
    borderColor: "#c0c0c0",
  },
  checkoutContainer: {
    backgroundColor: "#ff6ee7",
    marginHorizontal: 20,
    padding: 17,
    borderRadius: 300,
    alignItems: "center",
    marginVertical: 20,
  },
  checkouttext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
  }
})