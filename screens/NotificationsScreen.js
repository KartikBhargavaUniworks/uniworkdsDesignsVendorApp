import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import NotificationComponent from '../components/NotificationComponent'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'


const NotificationsScreen = () =>{
    let Date = '23/06/2020'
   
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#ffffff', flex: 1 }} >
               <Text style= {{ alignSelf:'center', marginTop:'10%', color:'#353535', fontSize:24, fontWeight:'bold', marginBottom:'5%' }} >Notifications</Text>
                <View style = {styles.rect3} >
                    <TextInput 
                    placeholder='Search'
                    style = {styles.textInputPhone}
                    />
                    <View style = {{alignSelf:'center', marginEnd:'2%'}}  >
                    <TouchableOpacity  >
                        <Feather name ='search' size={24} />
                    </TouchableOpacity>
                    </View>
                </View>
                <View style ={{marginTop:'5%', marginHorizontal:'10%'}}>
                    <Text style = {{ fontSize:18, color:'#353535' }} >{Date}</Text>
                </View>
                <NotificationComponent
                    bookingId='UWHYD00001043'
                    Area='987 Sqft'
                    Address="I live in Gorakhpur"
                    Amount='24,500'
                />
                <NotificationComponent
                    bookingId='UWHYD00001043'
                    Area='624 Sqft'
                    Address="Betia Raj House, Betia Hata"
                    Amount='48,00'
                />
                <NotificationComponent
                    bookingId='UWHYD00001043'
                    Area='652 Sqft'
                    Address="Betia Raj House, Betia Hata"
                    Amount='24,500'
                />
                <View style ={{marginHorizontal:'10%'}}>
                    <Text style = {{ fontSize:18, color:'#353535' }} >26/09/2020</Text>
                </View>
                <NotificationComponent
                    bookingId='UWHYD00001043'
                    Area='987 Sqft'
                    Address="I live in Gorakhpur"
                    Amount='24,500'
                />
                <NotificationComponent
                    bookingId='UWHYD00001043'
                    Area='654 Sqft'
                    Address="I live in Gorakhpur"
                    Amount='24,500'
                />
            </View>
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
       alignSelf:'center'
      },
      textInputPhone: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        flexDirection: 'row',
        maxWidth: '88%'
      },
})


export default NotificationsScreen;