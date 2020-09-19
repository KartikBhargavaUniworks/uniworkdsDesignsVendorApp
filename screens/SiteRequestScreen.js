import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import Feather from 'react-native-vector-icons/FontAwesome'
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import images from '../assets/images'

class MapsView extends React.Component {
  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    var mapStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];
    return (
      <MapView
        style={{ width: '100%', height: 400 }}
        scrollEnabled={true}
        initialRegion={{
          latitude: 17.437328,
          longitude: 78.394665,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={mapStyle}
      >
        <Marker coordinate={{
          latitude: 17.437328,
          longitude: 78.394665,
        }}
          pinColor={"white"}
          title={"UniworksDesigns"}
          description={"just for testing"} />
      </MapView>

    );
  }
}
const SiteRequestScreen = ({ navigation: { navigate, goBack }}) => {
  const [showDescription, setShowDescription] = useState(false)
  var Images = [
    images.welcom1Image,
    images.welcom2Image,
    images.welcom3Image,
    images.welcom4Image,
  ]
  var data = {
    descriptionText: 'Prepare the wall by Making & Chipping (wall choosing). Installation by Pipe installation & Waterproofing Testing by pressure & leakge testing.Finishing by Filling the condult with mortar . Hacking the finish for bonding.Fixing mesh on the closed conduits'
  }
  const dates = {
    dateFrom: '24/05/2020',
    dateTo: '28/04/2020'
  }
  const Timing = {
    timingFrom: '9:30',
    timingTo: '18:30'
  }
  const handleShowDescription = () => {
    setShowDescription(!showDescription)
  }
  let tools = ['Pen/Pencil', 'Measuring Tape', 'Screwdrivers', 'Cuttinpliers/ Nail Picker', 'Drilling machine and drill bits']
  const renderTools = ({ item }) => {
    return (
      <Text style={{ marginLeft: '20%', marginTop: '5%' }} >-{item} </Text>
    )
  }
  const renderImages = ({ item }) => {
    return (
      <View>
        <Image
          style={{ height: 300 }}
          source={item}
        />
      </View>
    )
  }
  return (
    <ScrollView >
      <View style={styles.mainContainer} >
        <Text style={{ color: '#909090', fontSize: 30, alignSelf: 'center' }} >Wooden Partition</Text>
        <Text style={{ color: '#909090', fontSize: 18, alignSelf: 'center', opacity: 0.5 }} >Cutting & Preparing</Text>
        <View style={{ backgroundColor: '#000000', alignItems: 'center', marginTop: '5%' }} >
          <View style={{ alignItems: 'center', marginBottom: '5%' }} >
            <Text style={{ paddingTop: 15, color: '#ffffff', fontSize: 20 }}> Description</Text>
            <View style={{ marginTop: 10, alignItems: 'center', width: '75%' }} >
              {
                showDescription ?
                  <Text style={{ color: '#ffffff', fontSize: 16, textAlign: 'left', }}>{data.descriptionText}</Text>
                  :
                  <Text style={{ color: '#ffffff', fontSize: 16, textAlign: 'left', }}>{data.descriptionText.substring(0, 100)}</Text>
              }

            </View>
            <View style={{ marginTop: '5%' }} >
              <View style={styles.knowMore} >
                <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }} onPress={handleShowDescription}>
                  <Text style={{ color: '#ffffff' }} >See More</Text>
                  <MaterialIcons name='keyboard-arrow-right' color='#ffffff' size={20} style={{ marginStart: '10%' }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View>
          <MapsView />
        </View>
        <View style={{ flex: 1, marginTop: '10%' }} >
          <View style={styles.SiteEngineerRow}>
            <Text style={{ color: '#353535', fontSize: 18, fontWeight: 'bold' }} >Address </Text>
            <View style={styles.SiteEngineerFiller}></View>
            <Feather name="share-alt" color="black" size={25} style={{ top: 5 }} />
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: '20%', marginTop: 15 }} >
            <Text style={styles.TypeStyle, { fontSize: 20 }} >Type</Text>
            <View style={styles.signInFiller}></View>
            <Text style={styles.Number, { fontSize: 20 }}>Number</Text>
          </View>
          <View style={{
            marginTop: 15,
            marginLeft: '20%', marginRight: '25%', flexDirection: 'row'
          }}>
            <Text style={styles.TypeStyle} >Skills</Text>
            <View style={styles.signInFiller}></View>
            <Text style={styles.Number}>18</Text>
          </View>
          <View style={{
            marginTop: 15,
            marginLeft: '20%',
            marginRight: '25%', flexDirection: 'row'
          }}>
            <Text style={styles.TypeStyle} >Semi Skilled</Text>
            <View style={styles.signInFiller}></View>
            <Text style={styles.Number}>269</Text>
          </View>
          <View style={{
            marginTop: 15,
            marginLeft: '20%',
            marginRight: '25%', flexDirection: 'row'
          }}>
            <Text style={styles.TypeStyle} >Unskilled</Text>
            <View style={styles.signInFiller}></View>
            <Text style={styles.Number}>25</Text>
          </View>
          <View style={{ flex: 1 }} >
            <Text style={styles.TypeStyle, { top: 25, fontSize: 20, marginLeft: '15%', marginBottom: 30 }} >Tools</Text>
            <FlatList
              data={tools}
              renderItem={renderTools}
            />
          </View>
          <View style={{ alignItems: 'center', marginTop: 60, flexDirection: 'row', marginLeft: '10%', marginRight: '10%' }}>
            <Text style={{ fontSize: 20, fontStyle: 'normal', color: '#353535' }}> {dates.dateFrom} </Text>
            <View style={{ marginLeft: '10%' }} >
              <Text style={{ color: '#353535', fontSize: 20 }} >to</Text>
            </View>
            <Text style={{ fontSize: 20, marginLeft: '10%' }} >{dates.dateTo}</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row', marginLeft: '33%', marginRight: '10%' }}>
            <Text style={{ fontSize: 20, fontStyle: 'normal', color: 'grey' }}> {Timing.timingFrom} </Text>
            <View style={{ alignItems: 'center', marginLeft: '5%' }} >
              <Text style={{ color: '#353535', fontSize: 20 }} >-</Text>
            </View>
            <Text style={{ fontSize: 20, marginLeft: '5%', color: 'grey' }} >{Timing.timingTo}</Text>
          </View>
          <View style={{ flex: 1, marginTop: 60 }} >
            <FlatList
              data={Images}
              renderItem={renderImages}
              horizontal={true}
            />
          </View>
          <View style={{ alignItems: 'center', marginTop: '12%' }}  >
            <Text style={{ fontSize: 36 }} >45,286 sqft</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: '12%' }}  >
            <Text style={{ fontSize: 36 }} >₹ 42,000</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 50, marginHorizontal:'10%' }} >
            <TouchableOpacity onPress={()=>navigate('SelectSupervisorScreen')} >
              <Text style={{ fontSize: 24, color: '#93D152', fontWeight:'bold' }}>Confirm</Text>
            </TouchableOpacity >
            <View style={{flex:1, flexDirection:'row'}} />
            <TouchableOpacity onPress={()=>goBack()} >
              <Text style={{ fontSize: 24, color: '#FF0000', fontWeight:'bold' }}>Cancel</Text>
            </TouchableOpacity >
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: '20%',
    marginTop: '10%'
  },
  SiteEngineerFiller: {
    flex: 1,
    flexDirection: "row"
  },
  SiteEngineerRow: {
    flexDirection: "row",
    marginLeft: '10%',
    marginRight: '10%',
  },
  knowMore: {
    width: 120,
    height: 40,
    backgroundColor: "#000000",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: 'center',
    paddingStart: 10,
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
    color: "#000000",
  },
  signInFiller: {
    flex: 1,
    flexDirection: "row"
  },
  Number: {
    color: "#121212",
  },
  ModalRow: {
    flexDirection: "row",
    marginTop: '10%',
    marginLeft: '20%',
    marginRight: '20%'
  }, approvedButton: {
    width: "60%",
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
})

export default SiteRequestScreen;