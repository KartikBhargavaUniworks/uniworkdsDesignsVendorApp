import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from "react-native-gesture-handler";
import OTP from "../components/OTP";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function SignInScreen({ navigation }) {

  const [] = React.useState(['-', '-', '-', '-', '-', '-']);
  const [] = React.useState('');

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    phoneNumber: '',
    checkPhoneNumber: false,
    showOtp: false
  })
  const value = (data.phoneNumber.length == 10) ? true : false

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    })
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const handlePhoneNumber = (val) => {
    setData({
      ...data,
      phoneNumber: val,
      checkPhoneNumber: value
    })
  }
  const handleOtp = () => {
    setData({
      ...data,
      showOtp: true
    })
  }
  return (
    <ScrollView scrollEnabled = {true} >
      <View style = {styles.mainContainer} >
        <View style={styles.signInRow}>
          <Text style={styles.signIn} >Sign in</Text>
          <View style={styles.signInFiller}></View>
          <Text style={styles.logIn} onPress={() => navigation.navigate('LoginScreen')}>Log in</Text>
        </View>
        <View style={styles.containerRecatngleName}>
          <View style = {styles.rect3} >
            <TextInput placeholder='Name' style = {styles.textInput} />
            <Text style = {{ marginTop:15 }} >Name</Text>
          </View>
        </View>
        <View style={styles.containerRecatnglePassword}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(val) => handlePasswordChange(val)}
              placeholder="Password"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={updateSecureTextEntry}
            >
              {data.secureTextEntry ?
                <Feather
                  name="eye-off"
                  color="grey"
                  size={20}
                />
                :
                <Feather
                  name="eye"
                  color="grey"
                  size={20}
                />
              }
            </TouchableOpacity>
          </View>
        </View>
        <View style = {{ marginTop:20, marginLeft:'15%' }} >
          <Text style = {{ color:'black' , fontSize:18}} >Security Question</Text>
        </View>
        <View  style = {{borderBottomWidth:1,marginLeft:'15%', maxWidth:'70%', flexDirection:'row' , marginTop:5}} >
        <TextInput placeholder='Type Here' style = {styles.textInputPhone }/>
        <MaterialIcons name = 'edit' style = {{ color:'grey', marginTop:15, fontSize:15 }}/>
        </View>
        <View style = {{ marginTop:18, marginLeft:'15%' }} >
          <Text style = {{ color:'black' , fontSize:18}} >Answer</Text>
        </View>
        <View  style = {{borderBottomWidth:1,marginLeft:'15%', maxWidth:'70%', flexDirection:'row' , marginTop:5}} >
        <TextInput placeholder='Type Here' style = {styles.textInputPhone }/>
        <MaterialIcons name = 'edit' style = {{ color:'grey', marginTop:15, fontSize:15 }}/>
        </View>
        <View style={styles.containerRecatnglePhone}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInputPhone}
              onChangeText={(val) => handlePhoneNumber(val)}
              keyboardType="numeric"
              maxLength={10}
              placeholder="9839xxxxxx"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              disable={true}
            >
              {value ?
                <Text style={{ color: 'grey', marginRight: 10 }} onPress={handleOtp} >Confirm</Text>
                : null}
            </TouchableOpacity>
          </View>
        </View>

        <View >
          {data.showOtp ?
            <View style={styles.otpmainContainer}>
               <Text style={{ fontSize: 35 }} >OTP</Text>
              <View style={styles.otpContainer}>
                <OTP></OTP>
              </View>
            </View>
            : null}
        </View>
        <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Personal Details')} >
                    <View >
                        <View style={styles.icon1Stack}>
                            <FeatherIcon name="arrow-right" style={styles.icon1}></FeatherIcon>
                            <View style={styles.rect4}>
                                <FeatherIcon name="arrow-right" style={styles.icon2}></FeatherIcon>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom:"30%"
  },
  containerRecatngleName: {
    marginTop: 70,
    alignItems: 'center'
  },
  containerRecatnglePassword: {
    marginTop: 40,
    alignItems: 'center',
  },
  containerRecatnglePhone: {
    marginTop: 40,
    alignItems: 'center'
  },
  signIn: {
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
  complete: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
   top:'10%',
    alignItems:'center',
    justifyContent: 'flex-end',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    flexDirection: 'row',
    maxWidth: '80%'
  },
  textInputPhone: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    flexDirection: 'row',
    maxWidth: '90%'
  },
  eyeIcon: {
    marginTop: 20,
  },
  otpmainContainer: {
    flex: 1,
    alignItems: 'center',
    top:20
  },
  otpContainer: {
    flexDirection: 'row',
    top:10
  },
  otpBox: {
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    height: 45,
    width: 45,
    textAlign: 'center'
  }, icon1: {
    top: 8,
    left: 9,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  rect4: {
    top: 0,
    width: 60,
    height: 60,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    left: 0
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    marginTop: 8,
    marginLeft: 9
  },
  icon1Stack: {
    width: 60,
    height: 60
  }
});

export default SignInScreen;
