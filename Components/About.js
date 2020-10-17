import React from 'react';
import {View, Text, Button} from 'react-native';

const About = ({navigation}) => {
  return (
    <View>
      <Text>About</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go to Home"></Button>
    </View>
  );
};

export default About;
