import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Headerr from '../Component/Header'
import CartCard from '../Component/CartCard'

const CartScreen = () => {
  return (
    <LinearGradient colors={['#f8cbfb', '#FFFFFF']} style={styles.linearGradient}>
      <View style={styles.headercontainer}>
      <Headerr isCart={true}/>
      </View>
      <CartCard/>
      <CartCard/>

    </LinearGradient>
  )
}

export default CartScreen;

const styles = StyleSheet.create({
    linearGradient: {
    },
})