import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Picker, CheckBox } from 'react-native';
import Feather from 'react-native-vector-icons/FontAwesome'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const AfterReachingSite = () => {
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  console.log(selectedValue1)
  console.log(selectedValue2)

  var data = {
    descriptionText: 'Here will be the description'
  }
  return (
    <ScrollView>
      <View style={styles.mainContainer} >
        <View style={{ alignItems: 'center', marginTop: '13%', flexDirection: 'row', marginLeft: '10%', marginRight: '10%' }}>
          <Text style={{ fontSize: 18 }} >Site Engineer Name</Text>
          <View style={styles.SiteEngineerFiller}></View>
          <Feather name="phone" color="black" size={25} style={{ top: 5 }} />
        </View>
        <View style={{ backgroundColor: '#000000', alignItems: 'center', height: 200, marginBottom: '5%', marginTop: '5%' }} >
          <View style={{ alignItems: 'center' }} >
            <Text style={{ paddingTop: 15, color: '#ffffff', fontSize: 20 }}> Description</Text>
            <View style={{ marginTop: 10, alignItems: 'center', width: '75%' }} >
              <Text style={{ color: '#ffffff', fontSize: 16, textAlign: 'center' }}>{data.descriptionText}</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: '13%', flexDirection: 'row', marginLeft: '10%', marginRight: '10%' }} >
          <View>
            <TouchableOpacity >
              <View >
                <View style={styles.icon1Stack}>
                  <FeatherIcon name="arrow-left" style={styles.icon1}></FeatherIcon>
                  <View style={styles.rect4}>
                    <FeatherIcon name="arrow-left" style={styles.icon2}></FeatherIcon>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.signInFiller} >
            <View style={styles.rect3} >
              <Text style={{ marginLeft: '10%', fontSize: 20 }} >Area 1</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity >
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
        <View style={{ flexDirection: 'row', marginTop: '25%', marginLeft: '8%' }} >
          <View style={{ alignSelf: 'center' }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }} >2:00 pm</Text>
          </View>
          <View style={styles.DropDownMenu} >
            <Picker
              selectedValue1={selectedValue1}
              style={{ width: '100%', alignSelf: 'center' }}
              mode='dropdown'
              onValueChange={(itemValue) => setSelectedValue1(itemValue)}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View style={{ alignSelf: 'center' }} >
            <TouchableOpacity  >
              <FontAwesome name='check-circle-o' size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '8%' }} >
          <View style={{ alignSelf: 'center' }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }} >7:00 pm</Text>
          </View>
          <View style={styles.DropDownMenu} >
            <Picker
              selectedValue2={selectedValue2}
              style={{ width: '100%', alignSelf: 'center' }}
              mode='dropdown'
              onValueChange={(itemValue) => setSelectedValue2(itemValue)}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View style={{ alignSelf: 'center' }} >
            <TouchableOpacity  >
              <FontAwesome name='check-circle-o' size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end', marginTop:'5%', marginRight:'10%' }} >
          <View style = {{ flexDirection:'row' }} >
          <View style = {{ alignSelf:'center', marginRight:'2%' }} >
          <Text  >Site Cleaned</Text>
          </View>
          <CheckBox
          />
          </View>
        </View>
        <View style = {{ marginTop:'15%' , alignItems:'flex-end', marginRight:'10%' }} >
            <Text style = {{ color:'#5D83C6', fontSize:16 }} >Report an issue</Text>
          </View>
        <View style={styles.SiteEngineerRow}>
          <Text style={{ color: '#353535', fontFamily: 'Comfortaa', fontSize: 18, fontWeight: 'bold' }} >Address </Text>
          <View style={styles.SiteEngineerFiller}></View>
          <Feather name="share-alt" color="black" size={25} style={{ top: 5 }} />
        </View>
        <View style={styles.ModalRow}>
          <Text style={styles.TypeStyle, { fontSize: 20 }} >Type</Text>
          <View style={styles.signInFiller}></View>
          <Text style={styles.Number, { fontSize: 20 }}>Number</Text>
        </View>
        <View style={{
          marginTop: '7%',
          marginLeft: '20%',
          marginRight: '25%', flexDirection: 'row'
        }}>
          <Text style={styles.TypeStyle} >Skills</Text>
          <View style={styles.signInFiller}></View>
          <Text style={styles.Number}>18</Text>
        </View>
        <View style={{
          marginTop: '5%',
          marginLeft: '20%',
          marginRight: '25%', flexDirection: 'row'
        }}>
          <Text style={styles.TypeStyle} >Semi Skilled</Text>
          <View style={styles.signInFiller}></View>
          <Text style={styles.Number}>269</Text>
        </View>
        <View style={{
          marginTop: '5%',
          marginLeft: '20%',
          marginRight: '25%', flexDirection: 'row'
        }}>
          <Text style={styles.TypeStyle} >Unskilled</Text>
          <View style={styles.signInFiller}></View>
          <Text style={styles.Number}>25</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: '12%' }}  >
          <Text style={{ fontSize: 36 }} >478 sqft</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: '13%', flexDirection: 'row', marginLeft: '15%', marginRight: '8%' }}>
          <TouchableOpacity   >
            <Text style={{ fontSize: 24, color: '#FF0000' }}>Cancel</Text>
          </TouchableOpacity >
          <View style={styles.SiteEngineerFiller}></View>

          <TouchableOpacity style={styles.approvedButton} >
            <View style={{ alignSelf: 'center' }} >
              <Text style={{ fontSize: 20, color: '#ffffff' }}>Get Approved</Text>
            </View>
          </TouchableOpacity >

        </View>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    marginBottom: '15%'
  },
  SiteEngineerFiller: {
    flex: 1,
    flexDirection: "row",
  },
  SiteEngineerRow: {
    flexDirection: "row",
    marginTop: '10%',
    marginLeft: '10%',
    marginRight: '10%'
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 150,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  TypeStyle: {
    fontFamily: "comfortaa-regular",
    color: "#000000",
  },
  signInFiller: {
    marginLeft: '15%',
    flex: 1,
    flexDirection: "row"
  },
  Number: {
    fontFamily: "comfortaa-regular",
    color: "#121212",
  },
  ModalRow: {
    flexDirection: "row",
    marginTop: '10%',
    marginLeft: '20%',
    marginRight: '20%'
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
  rect3: {
    width: "75%",
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: 'center',
    paddingStart: 20
  },
  approvedButton: {
    width: "100%",
    height: 55,
    padding: 25,
    backgroundColor: "#93D152",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: 'center',
  },
  DropDownMenu: {
    width: "60%",
    height: '100%',
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    alignItems: 'flex-end',
    paddingStart: 0,
    alignItems: 'center',
    marginRight: '5%',
    marginHorizontal: '5%'
  },
  icon1: {
    top: 8,
    left: 9,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  textInputPhone: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    flexDirection: 'row',
    maxWidth: '90%'
  },

})

export default AfterReachingSite;