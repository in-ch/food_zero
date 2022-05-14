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
import Category from '@screens/Category/Category';
import CategoryAdd from '@screens/Category/page/CategoryAdd';
import CategoryUpdate from '@screens/Category/page/CategoryUpdate';
import Neighbor from '@screens/ Neighbor/ Neighbor';
import Setting from '@screens/Setting/Setting';
import Terms from '@screens/Setting/pages/Terms';
import PersonalPolicy from '@screens/Setting/pages/PersonalPolicy';
import Profile from '@screens/Profile/Profile';
import ProfileEdit from '@screens/Profile/pages/ProfileEdit';

export type RootTabParamList = {
  Home: {};
  Login: {};
  Alarm: {};
  Search: {};
  FoodAdd: {};
  InputProfile: {};
  FoodSearchResult: {};
  FoodDone: {};
  Detail: {};
  Category: {};
  CategoryAdd: {};
  CategoryUpdate: {};
  Neighbor: {};
  Setting: {};
  Terms: {};
  PersonalPolicy: {};
  Profile: {};
  ProfileEdit: {};
  Agenda: {
    selected?: string;
  };
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
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="CategoryAdd" component={CategoryAdd} />
      <Stack.Screen name="CategoryUpdate" component={CategoryUpdate} />
      <Stack.Screen name="Neighbor" component={Neighbor} />
      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="PersonalPolicy" component={PersonalPolicy} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
