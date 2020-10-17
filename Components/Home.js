import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate('About')}
        title="Go to About"></Button>
    </View>
  );
};

export default Home;
