import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, } from "react-native";
import Complete from "../components/Complete";
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from "react-native-gesture-handler";

function LoginScreen({ navigation: { goBack }, navigation }) {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    phoneNumber: '',
    checkPhoneNumber: false
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

  return (
    <ScrollView contentContainerStyle={styles.mainContainer} scrollEnabled={false} >
      <View >
        <View style={styles.signInRow}>
          <Text style={styles.signIn} onPress={() => goBack()}>Sign in</Text>
          <View style={styles.signInFiller}></View>
          <Text style={styles.logIn} >Log in</Text>
        </View>
        <View style={styles.containerRecatnglePhone}>
          <TextInput style={styles.rect3}
            placeholder="9839xxxxxx"
          />
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
        <View style = {{ alignItems:'flex-end', marginRight:'15%', top:10 }} >
          <TouchableOpacity onPress = {() => navigation.navigate('Recover Account')} >
            <Text style = {{ color:'#5356C1' }} >Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity  >
          <Complete style={styles.complete} 
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 4
  },
  containerRecatnglePassword: {
    marginTop: 40,
    alignItems: 'center',
  },
  containerRecatnglePhone: {
    marginTop: '30%',
    alignItems: 'center'
  },
  signIn: {
    color: "#121212",
    fontSize: 36,
    height: 50,
    width: 147,
    opacity: 0.5
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
    top: '35%',
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
  eyeIcon: {
    marginTop: 20,
  }
});

export default LoginScreen;
