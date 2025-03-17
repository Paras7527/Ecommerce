import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import HomeScreen from './src/Screen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from './src/Screen/ProductDetailsScreen';
import CartScreen from './src/Screen/CartScreen';
import { CartProvider } from './src/Context/CartContext';
import { useContext } from 'react';
import { CartContext } from './src/Context/CartContext';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <View>

      <Text>Home</Text>
    </View>

  )
}
function Reorder() {
  return (
    <View>
      <Text>Reorder</Text>
    </View>
  )
}
function Cart() {
  return (
    <View>
      <Text>Reorder</Text>
    </View>
  )
}
function Account() {
  return (
    <View>
      <Text>Reorder</Text>
    </View>
  )
}
const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffbaba",
        }} initialRouteName='CART'>

          <Tab.Screen name="HOME_STACK" component={MyHomeStack} options={{
            tabBarIcon: () => {
              return (
                <Icon name={"home"} size={25} />
              )
            }
          }} />
          <Tab.Screen name="REORDER" component={Reorder} options={{
            tabBarIcon: () => {
              return (
                <Icon name={"reorder"} size={25} />
              )
            }
          }} />
          <Tab.Screen name="CART" component={CartScreen} options={{
            tabBarIcon: () => {
              const { cart } = useContext(CartContext);
              return (
                <View style={{ position: "relative" }}>
                  <Icon name={"shopping-cart"} size={25} />
                  <View style={{
                    height: 14,
                    width: 14,
                    borderRadius: 7,
                    backgroundColor: "#000",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: -5,
                    right: -5
                  }}>
                    <Text style={{
                      fontSize: 10,
                      color: "#ffffff",
                      fontWeight: "bold"
                    }}>{cart?.length}</Text>
                  </View>
                </View>

              )
            }
          }} />
          <Tab.Screen name="ACCOUNT" component={Account} options={{
            tabBarIcon: () => {
              return (
                <Icon name={"user"} size={25} />
              )
            }
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>

  )
}

export default App;

const styles = StyleSheet.create({})
