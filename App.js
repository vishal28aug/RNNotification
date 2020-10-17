import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Notification from './Components/Notification';
import Home from './Components/Home';
import About from './Components/About';
import { navigationRef } from './services/RootNavigation';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Notification">
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
