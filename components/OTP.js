import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function OTP(props) {
  return (
   <View style = {{flex:1}} >

     <View   style = {{ flex:0.6 , justifyContent: "space-evenly" ,  flexDirection:'row' }}  >
       <TextInput
      
      maxLength = {1}
      style = {{ backgroundColor: '#fef4f2', fontWeight: '600' , alignSelf: 'center', padding: 10 , fontSize: 20 , height: 55 , width:'10%', borderRadius: 10, borderWidth : 0.5, borderColor : 'grey' }}
      />
       <TextInput
      
      maxLength = {1}
      style = {{ backgroundColor: '#fef4f2', fontWeight: '600' , alignSelf: 'center', padding: 10 , fontSize: 20 , height: 55 , width:'10%', borderRadius: 10, borderWidth : 0.5, borderColor : 'grey' }}
      />
       <TextInput
      
      maxLength = {1}
      style = {{ backgroundColor: '#fef4f2', fontWeight: '600' , alignSelf: 'center', padding: 10 , fontSize: 20 , height: 55 , width:'10%', borderRadius: 10, borderWidth : 0.5, borderColor : 'grey' }}
      />
       <TextInput
      
      maxLength = {1}
      style = {{ backgroundColor: '#fef4f2', fontWeight: '600' , alignSelf: 'center', padding: 10 , fontSize: 20 , height: 55 , width:'10%', borderRadius: 10, borderWidth : 0.5, borderColor : 'grey' }}
      />
       <TextInput
      
      maxLength = {1}
      style = {{ backgroundColor: '#fef4f2', fontWeight: '600' , alignSelf: 'center', padding: 10 , fontSize: 20 , height: 55 , width:'10%', borderRadius: 10, borderWidth : 0.5, borderColor : 'grey' }}
      />
       <TextInput
      
      maxLength = {1}
      style = {{ backgroundColor: '#fef4f2', fontWeight: '600' , alignSelf: 'center', padding: 10 , fontSize: 20 , height: 55 , width:'10%', borderRadius: 10, borderWidth : 0.5, borderColor : 'grey' }}
      />
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row"
  },
  rect5: {
    width: 34,
    height: 20,
    backgroundColor: "#ffffff",
    borderRadius: 0
  },
  rect6: {
    width: 34,
    height: 4,
    backgroundColor: "rgba(112,112,112,1)",
    borderRadius: 100,
    marginLeft: 6
  },
  rect7: {
    width: 34,
    height: 4,
    backgroundColor: "rgba(112,112,112,1)",
    borderRadius: 100,
    marginLeft: 6
  },
  rect8: {
    width: 34,
    height: 4,
    backgroundColor: "rgba(112,112,112,1)",
    borderRadius: 100,
    marginLeft: 6
  },
  rect9: {
    width: 34,
    height: 4,
    backgroundColor: "rgba(112,112,112,1)",
    borderRadius: 100,
    marginLeft: 6
  },
  rect10: {
    width: 34,
    height: 4,
    backgroundColor: "rgba(112,112,112,1)",
    borderRadius: 100,
    marginLeft: 6
  },
  rect5Row: {
    height: 25,
    flexDirection: "row",
    flex: 1
  }
});

export default OTP;
