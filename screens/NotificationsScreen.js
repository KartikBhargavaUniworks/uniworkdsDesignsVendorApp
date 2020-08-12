import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, _FlatList, FlatList } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Spinner from 'react-native-loading-spinner-overlay'

const NotificationsScreen = ({ navigation }) => {
    const[siteRequests, setSiteRequests] = useState([]);
    const[supervisors, setSupervisors] = useState([]);
    const[upcomingTasks, setUpcomingTasks] = useState([]);
    const[isLoading, setLoading] = useState(true);
    const fetchData = async ()=>{
        let result = await  fetch('https://uniworksvendorapis.herokuapp.com/notifications/1')
        .then(response=>{
            return response.json()
        })
        .then(json=>{
            setSiteRequests(json.siterequests)
            setSupervisors(json.supervisors)
            setUpcomingTasks(json.restallprojects)
            setLoading(false)
        })
    }
    useEffect(()=> {
        console.log('trigger use effect hook');
    fetchData()
  },[] );
  
    const FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }
    const fetchSiteRequest=async () => {
        let result = await fetch('https://uniworksvendorapis.herokuapp.com/siteRequest/1')
          .then(response => {
            return response.json()
          })
          .then(json => {
              
            navigation.navigate('SiteRequestScreen',{
                json:json
            })
          })
    }
    const renderItem = ({ item }) => {
        return (
            <View style={{ backgroundColor: '#ffffff', flex: 1 }} >
                <View style={styles.contentBox} >
                    <Text style={{ fontSize: 16 }} >SuperVisor Request</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }} />
                    <TouchableOpacity>
                        <Entypo style={{ fontSize: 24, top: 4 }} name='cross' color='#E32626' />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: '#353535', fontSize: 22, fontWeight: 'bold' }} >{item.userName} </Text>
                <View style={{
                    flexDirection: 'row',
                    marginEnd: '5%',
                }} >
                    <Text style={{ marginTop: '5%' }} >{item.contact}</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }} />
                    <TouchableOpacity style={{ top: 5 }} >
                        <Text style={{ color: '#518A42', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }} >Approve</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderUpcomingTasks = ({ item }) => {
        return (
            <View style={{ flex: 1 }} >
                <TouchableOpacity onPress={() => navigation.navigate('UpcomingTaskScreen')} >
                    <View style={styles.contentBox} >
                        <Text style={{ fontSize: 18 }} >Booking ID:{item.bookingId}</Text>
                    </View>
                    <View style={styles.contentBox} >
                        <Text style={{ color: '#353535', fontSize: 18, fontWeight: 'bold' }} >Kartik </Text>
                        <View style={{ flex: 1, flexDirection: 'row' }} />
                        <Text style={{ color: '#353535', fontSize: 18 }} >{item.totalarea} Sqft</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginEnd: '5%',
                        marginTop: 15,
                        marginBottom:10
                    }} >
                        <Text  >{item.address.substring(0, 20)}...</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', bottom: 5 }} >₹ {item.budget}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const renderSiteRequest = ({ item }) => {
        return (
            <TouchableOpacity onPress={fetchSiteRequest} >
                <View style={styles.contentBox} >
                    <Text style={{ fontSize: 16 }} >Site Request</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }} />
                    <TouchableOpacity>
                        <Entypo style={{ fontSize: 24, top: 4 }} name='cross' color='#E32626' />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: '#353535', fontSize: 22, fontWeight: 'bold' }} >{item.totalArea} Sqft</Text>
                <View style={{
                    flexDirection: 'row',
                    marginEnd: '5%',
                }} >
                    <Text style={{ marginTop: '5%' }} >{item.startDate}</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }} >₹ {item.budget}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }} showsVerticalScrollIndicator={false}>
            {isLoading? 
            
            <Spinner
            //visibility of Overlay Loading Spinner
            visible={isLoading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
            textStyle={{color: '#FFF',}}
          />
            :
            
            <View style={{ flex: 1 }} >
                <Text style={{ alignSelf: 'center', marginTop: '10%', color: '#353535', fontSize: 24, fontWeight: 'bold', marginBottom: '5%' }} >Notifications</Text>
                <View style={styles.rect3} >
                    <TextInput
                        placeholder='Search'
                        style={styles.textInputPhone}
                    />
                    <View style={{ alignSelf: 'center', marginEnd: '2%' }}  >
                        <TouchableOpacity  >
                            <Feather name='search' size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1 }} >
                    <View style={styles.mainContainer} >
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }} >Approvals</Text>
                        <FlatList
                            data={supervisors}
                            renderItem={renderItem}
                        />
                        <FlatList
                            data={siteRequests}
                            renderItem={renderSiteRequest}
                        />

                    </View>
                </View>
                <View style={{ marginTop: '4%',
        marginHorizontal: '10%',
        flex: 1}} >
                    <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }} >Upcoming Tasks</Text>
                    <FlatList
                        data={upcomingTasks}
                        style={{  marginTop:15}}
                        keyExtractor={item => item.bookingId}
                        renderItem={renderUpcomingTasks}
                        />
                </View>
            </View>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rect3: {
        width: "90%",
        height: 60,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "rgba(112,112,112,1)",
        borderStyle: "solid",
        borderRadius: 100,
        flexDirection: "row",
        paddingStart: 20,
        alignSelf: 'center'
    },
    textInputPhone: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        flexDirection: 'row',
        maxWidth: '88%'
    },
    mainContainer: {
        marginVertical: '4%',
        marginHorizontal: '10%',
        flex: 1
    },
    contentBox: {
        flexDirection: 'row',
        marginTop: 15,
        marginEnd: '5%',
    },
    filler: {
        flex: 1,
        flexDirection: 'row'
    }
})


export default NotificationsScreen;