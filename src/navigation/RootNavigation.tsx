import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@screens/Home/Home';
import Login from '@screens/Login/Login';
import InputProfile from '@screens/Login/Pages/InputProfile/InputProfile';
import Alarm from '@screens/Alarm/Alarm';
import Search from '@screens/Search/Search';
import FoodAdd from '@screens/FoodAdd/FoodAdd';
import Agenda from '@screens/Agenda/Agenda';
import FoodSearchResult from '@screens/FoodAdd/pages/FoodSearchResult';
import FoodAddInput from '@screens/FoodAdd/pages/FoodAddInput';
import FoodDone from '@screens/FoodAdd/pages/FoodDone';
import Detail from '@screens/Detail/Detail';

export type RootTabParamList = {
  Home: {};
  Agenda: {};
  Login: {};
  Alarm: {};
  Search: {};
  FoodAdd: {};
  InputProfile: {};
  FoodSearchResult: {};
  FoodDone: {};
  FoodAddInput: {
    text: string;
  };
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
      <Stack.Screen name="Agenda" component={Agenda} />
      <Stack.Screen name="Alarm" component={Alarm} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="FoodAdd" component={FoodAdd} />
      <Stack.Screen name="FoodSearchResult" component={FoodSearchResult} />
      <Stack.Screen name="FoodAddInput" component={FoodAddInput} />
      <Stack.Screen name="FoodDone" component={FoodDone} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
