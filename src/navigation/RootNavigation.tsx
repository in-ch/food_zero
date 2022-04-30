import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../c_screens/Home/Home';
import Login from '../c_screens/Login/Login';
import InputProfile from '../c_screens/Login/Pages/InputProfile/InputProfile';

export type RootTabParamList = {
  Home: {};
  Login: {};
  InputProfile: {};
};

const RootNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="InputProfile" component={InputProfile} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
