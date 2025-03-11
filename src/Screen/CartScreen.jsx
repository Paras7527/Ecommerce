import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Headerr from '../Component/Header'

const CartScreen = () => {
  return (
    <LinearGradient colors={['#f8cbfb', '#FFFFFF']} style={styles.linearGradient}>
        <View>
            <Headerr isCart={true}/>
        </View>
    </LinearGradient>
  )
}

export default CartScreen;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
})