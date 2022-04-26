import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../c_screens/Home/Home';

export type RootTabParamList = {
  Home: {};
};

const RootNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
