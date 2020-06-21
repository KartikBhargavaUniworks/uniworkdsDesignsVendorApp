import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import LoginScreen from './LoginScreen';
import PersonalDetailsScreen from './PersonalDetailsScreen';
import PaymentDetailsScreen from './PaymentDetailsScreen';
import RecoverAccountScreen from './RecoverAccountScreen';
import NewPassword from './NewPasswordScreen';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
         <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
         <RootStack.Screen name="Personal Details" component={PersonalDetailsScreen}/>
         <RootStack.Screen name="Payment Details" component={PaymentDetailsScreen}/>
         <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
         <RootStack.Screen name="Recover Account" component={RecoverAccountScreen} />  
         <RootStack.Screen name="New Password" component={NewPassword} />   
    </RootStack.Navigator>
);

export default RootStackScreen;