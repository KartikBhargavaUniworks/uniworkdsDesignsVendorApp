import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import TutorialsScreen from '../screens/TutorialsScreen';
import WalletScreen from '../screens/WalletScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SettingsHomeScreen from '../screens/settings/SettingsHomeScreen';

const Tab = createBottomTabNavigator();

const HomeTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Tutorials"
        component={TutorialsScreen}
        options={{
          tabBarLabel: 'Tutorials',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="ondemand-video" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarLabel: 'Wallet',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-balance-wallet" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SettingsHomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default HomeTabScreen;

