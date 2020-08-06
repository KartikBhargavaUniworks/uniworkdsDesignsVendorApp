import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, Dimensions, } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from "react-native-gesture-handler";
import OTP from "../components/OTP";
import FeatherIcon from "react-native-vector-icons/Feather";

export default class SignInScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      password: "",
      secureTextEntry: true,
      phoneNumber: "",
      checkPhoneNumber: false,
      showOtp: false,
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
      Contractor: true,
      SuperVisor: false,
      confirmSignUp: true,
      showType: false,
      supervisorNumber: ""
    }
  }


  updateSecureTextEntry = () => {
    this.setState({ secureTextEntry: !this.state.secureTextEntry })
  }


  signUp = async () => {
    try {
      const result = await fetch('https://uniworksvendorapis.herokuapp.com/auth/register', {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Username: this.state.userName.toLowerCase(),
          Phone_number: "+91" + this.state.phoneNumber,
          Password: this.state.password
        })
      })
      let respone = await result.json()
      console.log(respone)
      this.setState({
        showOtp: true
      })
    } catch (e) {
      console.log(e)
    }
  }
  saveOtp = (val1, val2, val3, val4, val5, val6) => {
    console.log(val1, val2, val3, val4, val5, val6)
    this.setState({
      otp1: val1,
      otp2: val2,
      otp3: val3,
      otp4: val4,
      otp5: val5,
      otp6: val6,
    })
  }

  confirmSignup = async () => {
    var code = this.state.otp1 + this.state.otp2 + this.state.otp3 + this.state.otp4 + this.state.otp5 + this.state.otp6
    console.log(code)
    if (this.state.showType == false) {
      try {
        const result = await fetch("https://uniworksvendorapis.herokuapp.com/auth/confirmSignup", {
          method: 'POST',
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Username: this.state.userName,
            ConfirmationCode: code,
            Password: this.state.password,
          })
        }).then((response) => response.json())
          .then((json) => {
            this.saveTokenandNavigate(json)
          }

          )
      } catch (e) {
        console.log(e.toString())
      }
      this.setState({ showType: true, showOtp: false })
      console.log(this.state)
    } else {
      if (this.state.Contractor == true) {
        const result = await fetch("https://uniworksvendorapis.herokuapp.com/user/1", {
          method: 'PUT',
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            role: 'CSVD'
          })
        }).catch(e => console.log(e.toString()))
        this.props.navigation.navigate("Personal Details")
      } else {
        const result = await fetch("https://uniworksvendorapis.herokuapp.com/user/1", {
          method: 'PUT',
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            role: 'CSVR',
            number: "+91".concat(this.state.supervisorNumber.toString()),
          })
        }).then(respone => respone.json())
          .then(json => {
            console.log(json)
            this.props.navigation.navigate("Personal Details")
          }).catch(e => console.log(e.toString()))
      }
    }
  }
  saveTokenandNavigate = async (val) => {
    await AsyncStorage.setItem('accessToken', val)
    await AsyncStorage.setItem('userName', this.state.userName)
    console.log(await AsyncStorage.getItem('accessToken'))
  }

  handleTypechosen = () => {
    this.setState({ Contractor: !this.state.Contractor, SuperVisor: !this.state.SuperVisor })
  }

  render() {
    return (
      <ScrollView scrollEnabled={true} >
        <View style={styles.mainContainer} >
          <View style={styles.signInRow}>
            <Text style={styles.signIn} >Sign in</Text>
            <View style={styles.signInFiller}></View>
            <Text style={styles.logIn} onPress={() => this.props.navigation.navigate('LoginScreen')}>Log in</Text>
          </View>
          <View style={styles.containerRecatngleName}>
            <View style={styles.rect3} >
              <TextInput placeholder='Name'
                style={styles.textInput}
                onChangeText={(username) => this.setState({ userName: username })}
                value={this.state.userName} />
              <Text style={{ marginTop: 15 }} >Name</Text>
            </View>
          </View>
          <View style={styles.containerRecatnglePassword}>
            <View style={styles.rect3} >
              <TextInput style={styles.textInput}
                secureTextEntry={this.state.secureTextEntry ? true : false}
                onChangeText={(passWord) => this.setState({ password: passWord })}
                placeholder="Password"
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={this.updateSecureTextEntry}
              >
                {this.state.secureTextEntry ?
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
          <View style={styles.containerRecatnglePhone}>
            <View style={styles.rect3} >
              <TextInput style={styles.textInputPhone}
                onChangeText={(number) => this.setState({ phoneNumber: number })}
                keyboardType="numeric"
                maxLength={10}
                placeholder="9839xxxxxx"
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                disable={true}
              >
                <Text style={{ color: 'grey', marginRight: 10 }} onPress={this.signUp} >Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View >
            {this.state.showOtp ?
              <View style={styles.otpmainContainer}>
                <Text style={{ fontSize: 35 }} >OTP</Text>
                <View style={styles.otpContainer}>
                  <OTP save={this.saveOtp} ></OTP>
                </View>
              </View>
              : null}
          </View>
          <View>
            {
              this.state.showType ?
                <View>
                  <View style={{ marginStart: '20%', marginTop: '15%' }} >
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }} >I am</Text>
                  </View>
                  <View
                    style={[
                      styles.buttons,
                    ], { flex: 1, justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}
                  >
                    <TouchableOpacity
                      style={[
                        styles.button,
                        {
                          backgroundColor: this.state.Contractor ? "#ffffff" : "#EBEBEB",
                          elevation: this.state.Contractor ? 2 : 0
                        },
                      ]}
                      onPress={this.handleTypechosen}
                    >
                      <Text style={{ color: this.state.Contractor ? '#76C662' : "#000000" }}>Contractor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.button,
                        { backgroundColor: this.state.SuperVisor ? "#ffffff" : "#EBEBEB", elevation: this.state.SuperVisor ? 2 : 0 },
                      ]}
                      onPress={this.handleTypechosen}
                    >
                      <Text style={{ color: this.state.SuperVisor ? '#76C662' : "#000000" }}>Supervisor</Text>
                    </TouchableOpacity>
                  </View>

                  {this.state.Contractor ?
                    <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 5 }} >
                      <Text style={{ color: '#353535', fontSize: 14, fontStyle: 'normal', maxWidth: '60%', opacity: 0.5 }} >Contractor is a person who owns the firm.</Text>
                    </View>
                    :
                    <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 5 }} >
                      <Text style={{ color: '#353535', fontSize: 14, fontStyle: 'normal', maxWidth: '60%', opacity: 0.5 }} >Supervisor is the person who works under the contractor.</Text>
                    </View>
                  }
                  {
                    this.state.SuperVisor ?
                      <View style={styles.containerRecatnglePhone}>
                        <View style={styles.rect3} >
                          <TextInput style={styles.textInputPhone}
                            onChangeText={(number) => this.setState({ supervisorNumber: number })}
                            keyboardType="numeric"
                            maxLength={10}
                            placeholder="9839xxxxxx"
                          />
                          <TouchableOpacity
                            style={styles.eyeIcon}
                            disable={true}
                          >
                            <Text style={{ color: 'grey', marginRight: 10 }} onPress={this.signUp} >Contractor's Phone</Text>
                          </TouchableOpacity>
                        </View>
                      </View> :
                      null
                  }
                </View>
                : null
            }
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={this.confirmSignup} >
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
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: "30%"
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
    top: '10%',
    alignItems: 'center',
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
    top: 20
  },
  otpContainer: {
    flexDirection: 'row',
    top: 10
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
  },
  buttons: {
    flexDirection: "row",
    backgroundColor: "#EBEBEB",
    borderRadius: 10,
    marginLeft: 20,
    width: "60%",
    height: 60,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    width: "35%",
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 10 },
  },
});


