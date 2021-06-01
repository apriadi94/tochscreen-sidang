import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import InputScreen from '../screen/InputScreen'

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerShown : false
      }}/>
      <Stack.Screen name="Input" component={InputScreen} options={{
        headerShown : false
      }}/>
    </Stack.Navigator>
  );
};

export default AppStack;