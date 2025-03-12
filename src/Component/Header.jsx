import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Headerr = ({ isCart }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {
          isCart ? <Ionicons name={"chevron-back"} color={"#ff6ee7"} size={25} /> :
          <Image source={require('../../assets/app.png')} style={styles.appImage} />
        }
      </View>
      
      <View style={styles.centerContainer}>
        <Text style={styles.myCart}>My Cart</Text>
      </View>
      
      <View style={styles.rightContainer}>
        <Image source={require('../../assets/dp.jpg')} style={styles.dpImage} />
      </View>
    </View>
  );
};

export default Headerr;

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 60,
    paddingHorizontal: 15,
  },
  leftContainer: {
    padding: 8,
    borderRadius: 20,
    width: 45, // Fixed width to match rightContainer
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    width: 45, // Fixed width to balance the layout
    alignItems: 'flex-end',
  },
  appImage: {
    width: 28,
    height: 28,
  },
  dpImage: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  myCart: {
    fontSize: 25,
    fontWeight: 500,
    color: '#000',

  },
});