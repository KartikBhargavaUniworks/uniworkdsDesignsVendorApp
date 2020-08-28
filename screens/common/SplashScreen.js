import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, Button, Text } from "react-native";

function SplashScreen({navigation}) {
  return (
    <View
      style={styles.container}
    >
      <Image
        source={require("../../assets/images/green-plant-on-white-wooden-table-36447421.jpg")}
        resizeMode="contain"
        style={styles.image2}
      ></Image> 
      <TouchableOpacity
        style={styles.button}
        onPress = {() => navigation.navigate('HomeScreen')}
      >
        <View style = {styles.containerButton} >
        <Text styles ={styles.text} >Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom : 36
  },
  image2: {
    height: 410,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: "absolute",
    top: 100,
    width: "75%"
  },
  containerButton :{
    flex:1,
   alignItems: 'center',
   justifyContent: 'center',
  
  },
  getstarted: {
    height: 60
  },
  button: {
    width: 300,
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100
  },
  text: {
    fontFamily: "comfortaa-regular",
    color: "#121212",
  }
});

export default SplashScreen;
