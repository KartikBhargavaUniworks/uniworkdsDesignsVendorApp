import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AfterAcceptScreen from './AfterAcceptScreen'
import RootStackScreen from './RootStackScreen';
import AfterReachingSite from './AfterReachingSite';
import HomeTabScreen from '../components/HomeBottomTab';
const HomeStack = createStackNavigator();

function Login(){
    return(
      <RootStackScreen/>
    )
  }
  
const HomeStackScreen = () => (
    <HomeStack.Navigator headerMode='none'>
        <HomeStack.Screen name="Login" component={Login}  />
        <HomeStack.Screen name="HomeScreen" component={HomeTabScreen}/>
        <HomeStack.Screen name="AfterAcceptScreen" component={AfterAcceptScreen}/>
        <HomeStack.Screen name="After Reaching Site" component={AfterReachingSite} /> 
    </HomeStack.Navigator>
);

export default HomeStackScreen;