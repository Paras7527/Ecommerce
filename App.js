import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import HomeScreen from './src/Screen/HomeScreen';

const Tab = createBottomTabNavigator();

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
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffbaba",
      }}>
        <Tab.Screen name="HOME" component={HomeScreen} options={{
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
        <Tab.Screen name="CART" component={Cart} options={{
          tabBarIcon: () => {
            return (
              <Icon name={"shopping-cart"} size={25} />
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
  )
}

export default App;

const styles = StyleSheet.create({})
