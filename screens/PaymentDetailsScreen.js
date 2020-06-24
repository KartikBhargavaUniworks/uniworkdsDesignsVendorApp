import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function PaymentDetailsScreen({ navigation }) {
   
  return (
    <ScrollView   >
      <View style={styles.mainContainer} >
        <View style={{ alignItems: 'center', marginTop: 72 }}>
          <Text style={{ fontSize: 36 }} >Payment Details</Text>
        </View>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Account Number</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Confirm Account Number</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >IFSC Code</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Account Holder's Name</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >PAN Number</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }} >
          <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Aadhar Details</Text>
          <View style={{ flex: 1, flexDirection: 'row' }} ></View>
          <View style={{ marginRight: '15%' }} >
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={()=>navigation.navigate('Camera')} >
              <Text style={{ color: '#546AD9', fontSize: 14 }}>Upload Photo</Text>
              <MaterialIcons name='camera-alt' style={{ alignSelf: 'center', color: '#546AD9' }} size={20} />
            </TouchableOpacity>
          </View>
          <View>
            
          </View>
        </View>
        <TouchableOpacity style={styles.SubmitButtonStyle} onPress={() => navigation.navigate('HomeScreen')} >
          <Text style={{ fontSize: 20, top: 13, color: '#ffffff' }} >Proceed</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 4
  },
  containerRecatngleName: {
    marginTop: 40,
    alignItems: 'center'
  },
  containerRecatngle: {
    marginTop: 15,
    alignItems: 'center'
  },
  rect3: {
    width: "75%",
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row",
    paddingStart: 20

  },
  textInputPhone: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    flexDirection: 'row',
    maxWidth: '80%'
  },
  SubmitButtonStyle: {
    marginTop: '15%',
    marginLeft: '10%',
    height: 60,
    marginRight: '10%',
    backgroundColor: '#99DD70',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    marginBottom: '10%'
  },
});

export default PaymentDetailsScreen;
