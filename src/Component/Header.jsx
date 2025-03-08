import { View, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appImageContainer}>
        <Image source={require('../../assets/app.png')} style={styles.appImage} />
      </View>
      <View style={styles.dpImageContainer}>
        <Image source={require('../../assets/dp.jpg')} style={styles.dpImage} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: Dimensions.get('window').width, // Full width of the screen
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 60,
    left: 0, // Align to the left edge
    marginLeft: 10,
  },
  appImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 20,
  },
  appImage: {
    width: 28,
    height: 28,
  },
  dpImageContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 3,
    backgroundColor: "white", 
    borderRadius: 30,
    marginRight: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  dpImage: {
    width: 45,
    height: 45,
    borderRadius: 20,
    
  },
});