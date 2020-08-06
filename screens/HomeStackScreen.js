import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AfterAcceptScreen from './AfterAcceptScreen'
import RootStackScreen from './RootStackScreen';
import UpcomingTaskScreen from './UpcomingTaskScreen';
import HomeTabScreen from '../components/HomeBottomTab';
import HomeScreen from './HomeScreen';
import CameraComponent from './CameraScreen';
import SiteRequestScreen from './SiteRequestScreen';
import SelectSuperVisorScreen from './SelectSuperVisorScreen';
import PersonalScreen from './settings/PersonalScreen';
import SupervisorsScreen from './settings/SupervisorsScreen';
import AccountDetailsScreen from './settings/AccountDetails';
import SecurityScreen from './settings/SecurityScreen';
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
        <HomeStack.Screen name="SiteRequestScreen" component={SiteRequestScreen}/>
        <HomeStack.Screen name="After Reaching Site" component={UpcomingTaskScreen} /> 
        <HomeStack.Screen name="UpcomingTaskScreen" component={UpcomingTaskScreen} /> 
        <HomeStack.Screen name="SelectSupervisorScreen" component={SelectSuperVisorScreen} /> 
        <HomeStack.Screen name="PersonalScreen" component={PersonalScreen} /> 
        <HomeStack.Screen name="SuperVisorsScreen" component={SupervisorsScreen} />
        <HomeStack.Screen name="AccountDetailsScreen" component={AccountDetailsScreen} />
        <HomeStack.Screen name="SecuirtyScreen" component={SecurityScreen} />   
    </HomeStack.Navigator>
);

export default HomeStackScreen;