import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import HomeStackScreen from "./screens/HomeStackScreen";


function App() {
  return (
   <NavigationContainer>
     <HomeStackScreen/>
      </NavigationContainer>
    
  )
}

export default App;
