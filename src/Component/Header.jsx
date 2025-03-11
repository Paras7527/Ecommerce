import { View, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Headerr = ({isCart}) => {
  return (
    <View style={styles.container}>
      <View style={styles.appImageContainer}>
        {
          isCart ? <Ionicons name={"chevron-back"} color={"#ff6ee7"} size={25}/>:
          <Image source={require('../../assets/app.png')} style={styles.appImage} />
        }
      </View>
      <View>
        <Image source={require('../../assets/dp.jpg')} style={styles.dpImage} />
      </View>
    </View>
  );
};

export default Headerr;

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: Dimensions.get('window').width, // Full width of the screen
    flexDirection: 'row',
    justifyContent: "space-between",
    position: "absolute",
    top: 60,
    paddingHorizontal: 15,
  },
  appImageContainer: {
    padding: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  appImage: {
    width: 28,
    height: 28,
  },
  dpImage: {
    width: 45,
    height: 45,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
});