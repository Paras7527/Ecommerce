import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Headerr = ({ isCart }) => {
  return (
    <View style={styles.container}>
      <View style={styles.appiconContainer}>
        <Image source={require("../assets/appicon.png")} style={styles.appicon}/>
      </View>
      <Image source={require("../assets/Paras.jpeg")} style={styles.DP}/>
    </View>
  );
};

export default Headerr;

const styles = StyleSheet.create({
  appicon:{
    width: 35,
    height: 35,
    borderRadius: 25,
  },
  appiconContainer:{
    backgroundColor: "#fff",
    height:44,
    width:44,
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
  },
  DP:{
    height:44,
    width:44,
    borderRadius:22,
    borderColor:"#c34c91",
    borderWidth:2,
  },
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:20,
  },
});