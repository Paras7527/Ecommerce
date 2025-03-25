import React from 'react';
import { View, Text, Button } from 'react-native';

const MyOrderScreen = ({ navigation }) => {
  return (
    <View>
      <Text>My Orders Page</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default MyOrderScreen;
