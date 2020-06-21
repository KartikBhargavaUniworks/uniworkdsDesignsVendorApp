import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Complete from "../components/Complete";

function SignInScreen(props, navigation) {
  return (
    <View style={styles.container}>
      <View style={styles.signInRow}>
        <Text style={styles.signIn}>Sign in</Text>
        <View style={styles.signInFiller}></View>
        <Text style={styles.logIn}>Log in</Text>
      </View>
      <View style = {styles.containerRecatngle}>
      <TextInput style = {styles.rect3}
      placeholder = "Name"
      />
      </View>
      <View style = {styles.containerRecatngle}>
      <TextInput style = {styles.rect4}
      placeholder = "Email"
      >
      </TextInput>
      </View>
      <View style = {styles.containerRecatngle}>
      <TextInput style = {styles.rect3}
      placeholder = "Passrod"
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerRecatngle:{
      marginTop:70,
      alignItems:'center'
  },
  signIn: {
    fontFamily: "comfortaa-regular",
    color: "#121212",
    fontSize: 36,
    height: 50,
    width: 147
  },
  signInFiller: {
    flex: 1,
    flexDirection: "row"
  },
  logIn: {
    fontFamily: "comfortaa-regular",
    color: "#121212",
    fontSize: 36,
    height: 50,
    width: 124,
    opacity: 0.5
  },
  signInRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 72,
    marginLeft: 33,
    marginRight: 27
  },
  rect5: {
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row",
    flex: 1
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
    opacity: 0.6,
    width: 42,
    height: 15
  },
  name: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    opacity: 0.3,
    width: 37,
    height: 14,
    marginLeft: 173,
    marginTop: 2
  },
  textInput2Row: {
    height: 16,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 35,
    marginTop: 21
  },
  group3: {
    width: 300,
    height: 60,
    marginTop: 34,
    marginLeft: 33
  },
  rect3: {
    width: 300,
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row",
    padding:20
  },
  phoneNumber: {
    fontFamily: "roboto-regular",
    color: "rgba(112,112,112,1)",
    opacity: 0.6,
    height: 15,
    width: 120
  },
  phone4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    opacity: 0.3,
    textAlign: "right",
    width: 39,
    height: 14,
    marginLeft: 93,
    marginTop: 2
  },
  phoneNumberRow: {
    height: 16,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 35,
    marginTop: 22
  },
  group2: {
    width: 300,
    height: 60,
    marginTop: 45,
    marginLeft: 30
  },
  rect4: {
    width: 300,
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row"
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
    opacity: 0.6,
    width: 68,
    height: 15
  },
  password: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    opacity: 0.3,
    textAlign: "right",
    width: 58,
    height: 28,
    marginLeft: 126
  },
  textInputRow: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 35,
    marginTop: 22
  },
  complete1: {
    height: 60,
    width: 60,
    opacity: 0.5,
    marginTop: 152,
    marginLeft: 150
  }
});

export default SignInScreen;
