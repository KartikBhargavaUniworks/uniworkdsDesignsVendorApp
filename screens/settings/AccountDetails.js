import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather'

function AccountDetailsScreen(props) {
  const [dataAccountNumber, setdataAccountNumber] = useState({
    Name: "custom:AccountNumber",
    Value: ""
  })
  const [dataConfirmAccountNumber, setdataConfirmAccountNumber] = useState({
    Name: "custom:category",
    Value: ""
  })
  const [dataIFSCCODE, setdataIFSCCODE] = useState({
    Name: "custom:state",
    Value: ""
  })
  const [dataAcountHolderName, setdataAccountHolderName] = useState({
    Name: "custom:city",
    Value: ""
  })
  const [dataPANNUmber, setdataPANNumber] = useState({
    Name: "custom:area",
    Value: ""
  })
  const [dataAadharDetails, setdataAadharDetails] = useState({
    Name: "custom:street",
    Value: ""
  })
  const [dataGst, setdataGst] = useState({
    Name: "custom:gst",
    Value: ""
  })
  const handleSubmission = async () => {
    let photo = await AsyncStorage.getItem('AadhaarPhotoUri')
    let Photo = {
      Name: "custom:aadharUri",
      Value: photo
    }
    console.log(photo)
    let Array = []
    Array.push(dataAccountNumber)
    Array.push(dataIFSCCODE)
    Array.push(dataAcountHolderName)
    Array.push(dataPANNUmber)
    Array.push(dataAadharDetails)
    Array.push(Photo)
    try {
      let accessToken = await AsyncStorage.getItem('accessToken')
      let userName = await AsyncStorage.getItem('userName')
      const result = await fetch("https://still-plains-75686.herokuapp.com/user/updateUserAttributes", {
        method: 'PUT',
        headers: {
          authorization: accessToken
        },
        body: JSON.stringify({
          UserName: userName,
          UserAttributes: Array
        })
      }).then((response) => {
        const statusCode = response.status
        console.log(statusCode)
      })
      props.navigation.navigate("Payment Details");
    } catch (e) {
      console.log(e)
    }
  }
  const handleUrl = () => {
    const state = props.navigation
    console.log(state.params.photo)
  }

  return (
    <ScrollView   >
      <View style={styles.mainContainer} >  
        <TouchableOpacity style={{ flexDirection:'row', marginTop:50, marginStart:'10%' }} >
                <MaterialIcons name='credit-card' size={32} />
                <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart:10 }}>Account Details</Text>
            </TouchableOpacity>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(accoutnNo) => {
                setdataAccountNumber({
                  Name: "custom:AccountNumber",
                  Value: accoutnNo
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Account Number</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(confirmAccoutnNo) => {
                setdataConfirmAccountNumber({
                  Name: "custom:Confirm",
                  Value: confirmAccoutnNo
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Confirm Account Number</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(ifscCode) => {
                setdataIFSCCODE({
                  Name: "custom:ifsc",
                  Value: ifscCode
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >IFSC Code</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(name) => {
                setdataAccountHolderName({
                  Name: "custom:accountHolderName",
                  Value: name
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Account Holder's Name</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(pan) => {
                setdataPANNumber({
                  Name: "custom:pan",
                  Value: pan
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >PAN Number</Text>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(aadhar) => {
                setdataAadharDetails({
                  Name: "custom:aadhar",
                  Value: aadhar
                })
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }} >
          <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >Aadhar Details</Text>
          <View style={{ flex: 1, flexDirection: 'row' }} ></View>
          <View style={{ marginRight: '15%' }} >
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => props.navigation.navigate('Camera')} >
              <Text style={{ color: '#546AD9', fontSize: 14 }}>Upload Photo</Text>
              <MaterialIcons name='camera-alt' style={{ alignSelf: 'center', color: '#546AD9' }} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerRecatngleName}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(gst) => {
                setdataGst({
                  Name: "custom:gst",
                  Value: gst
                })
              }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: '18%', color: '#353535', fontSize: 14, top: 4 }} >GSTIN Details</Text>
        <TouchableOpacity style={styles.SubmitButtonStyle} onPress={handleSubmission} >
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

export default AccountDetailsScreen;
