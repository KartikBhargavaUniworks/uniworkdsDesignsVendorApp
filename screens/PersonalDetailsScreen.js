import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

function PersonalDetailsScreen({navigation}) {
  var mapStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];

  const[dataEmail, setdataEmail] = useState({
    Name:"custom:email",
    Value:""
  })
  const[dataEmergencyNumber, setdataEmergencyNumber] = useState({
    Name:"custom:emergencynumber",
    Value:""
  })
  const[datacategory, setdataCategory] = useState({
    Name:"custom:category",
    Value:""
  })
  const[dataState, setdataState] = useState({
    Name:"custom:state",
    Value:""
  })
  const[dataCity, setdataCity] = useState({
    Name:"custom:city",
    Value:""
  })
  const[dataArea, setdataArea] = useState({
    Name:"custom:area",
    Value:""
  })
  const[dataStreet, setdataStreet] = useState({
    Name:"custom:street",
    Value:""
  })
  const[dataBuilding, setdataBuilding] = useState({
    Name:"custom:building",
    Value:""
  })
  const[dataFlatNo, setdatasetFlatNo] = useState({
    Name:"custom:flatNo",
    Value:""
  })
  const [latitude, setlatitude] = useState(17.437328);
  const [longitude, setlongitude] = useState(78.394665);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({});
      setlatitude(location.coords.latitude);
      setlongitude(location.coords.longitude)
      console.log(latitude + "  " + longitude)
    })();
  });
  const handleSubmit = async () =>{
    let Array = []
    Array.push(dataEmail)
    Array.push(datacategory)
    Array.push(dataState)
    Array.push(dataCity)
    Array.push(dataArea)
    Array.push(dataStreet)
    Array.push(dataBuilding)
    Array.push(dataFlatNo)
    Array.push(dataEmergencyNumber)
    try {
      let accessToken = await AsyncStorage.getItem('accessToken')
      let userName = await AsyncStorage.getItem('userName')
      const result = await fetch("https://still-plains-75686.herokuapp.com/user/updateUserAttributes", {
        method: 'PUT',
        headers: {
          authorization:accessToken
        },
        body: JSON.stringify({
          UserName:userName,
          UserAttributes:Array
        })
      }).then((response)=>{
        const statusCode = response.status
        console.log(statusCode)
      })
      navigation.navigate("Payment Details");
    }catch(e){
      console.log(e)
    }
  }
  return (
    <ScrollView   >
      <View style={styles.mainContainer} >
        <View style = {{alignItems:'center', marginTop:72}}>
          <Text style = {{ fontSize:36 }} >Personal Details</Text>
        </View>
        <View style={styles.containerRecatngleName}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="98393xxxx"
            onChangeText={(number)=>setdataEmergencyNumber({Name:"custom:emergencyNumber", Value:number})}
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >Emergency Contact</Text>
          </View>
        </View>
        <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="Email"
            onChangeText={(email)=>setdataEmail({Name:"custom:email", Value:email})}
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >Category</Text>
          </View>
        </View>
        <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="Carpenter"
            onChangeText={(category)=>setdataCategory({
              Name:"custom:category",
              Value:category})}/>
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >Category</Text>
          </View>
        </View>
        <View style = {{marginLeft:'15%' , marginTop:'5%'}} >
       <Text style= {{ color:'#353535' , fontSize:18, fontStyle:'normal' }} >Address</Text>
       </View>
       <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="Telangana"
            onChangeText={(state)=>setdataState({
              Name:"custom:state",
              Value:state
            })}
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >State</Text>
          </View>
        </View>
        <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="Hyderabad"
            onChangeText={(city)=>setdataCity({
              Name:"custom:city",
              Value:city
            })}
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >City</Text>
          </View>
        </View>
        <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="Kavuri Hills"
            onChangeText={(area)=>setdataArea({
              Name:"custom:area",
              Value:area
            })}
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >Area</Text>
          </View>
        </View>
        <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="Jon Snow"
            onChangeText={(street)=>setdataStreet({
              Name:"custom:street",
              Value:street
            })}
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >Street</Text>
          </View>
        </View>
        <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="Lamba Trendz Uniworks"
            onChangeText={(building)=>setdataBuilding({
              Name:"custom:building",
              Value:building
            })}
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >Building</Text>
          </View>
        </View>
        <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="2nd Floor"
            onChangeText={(flatNo)=>setdatasetFlatNo({
              Name:"custom:flatNo",
              Value:flatNo
            })}
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >Flat No.</Text>
          </View>
        </View>
        <MapView
        style={{ top: 20, width: '100%', height: 200 }}
        scrollEnabled={true}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
        }}
        customMapStyle={mapStyle}
      >
        <Marker coordinate={{
          latitude: latitude,
          longitude:longitude,
          latitudeDelta:0.02, 
          longitudeDelta: 0.02
        }}
          pinColor={"white"}
          title={"UniworksDesigns"}
          description={"just for testing"} />
      </MapView>

        <TouchableOpacity style = {styles.SubmitButtonStyle} onPress={handleSubmit}>
            <Text style = {{ fontSize:20 , top:13, color:'#ffffff'}}  >Proceed</Text>
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
    marginTop:'15%',
    marginLeft:'10%',
    height:60,
    marginRight:'10%',
    backgroundColor:'#99DD70',
    borderRadius:60,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems:'center',
    marginBottom:'10%'
  },
});

export default PersonalDetailsScreen;
