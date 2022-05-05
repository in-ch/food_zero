import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../c_screens/Home/Home';
import Login from '../c_screens/Login/Login';
import InputProfile from '../c_screens/Login/Pages/InputProfile/InputProfile';
import Alarm from '~/c_screens/Alarm/Alarm';
import Search from '~/c_screens/Search/Search';

export type RootTabParamList = {
  Home: {};
  Login: {};
  Alarm: {};
  Search: {};
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
      <Stack.Screen name="Alarm" component={Alarm} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
