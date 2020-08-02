import React from 'react'
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather'

const SettingsHomeScreen = ({navigation}) => {
    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1 }} >
            <Text style={{ alignSelf: 'center', marginTop: '10%', color: '#353535', fontSize: 24, fontWeight: 'bold', marginBottom: '5%' }} >Settings</Text>
            <TouchableOpacity style={{ flexDirection:'row', marginTop:50, marginStart:'10%' }} onPress={()=>navigation.navigate('PersonalScreen')} >
                <Feather name='user' size={32} />
                <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart:10 }}>Personal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection:'row', marginTop:30, marginStart:'10%' }} onPress={()=>navigation.navigate('SuperVisorsScreen')} >
                <Feather name='users' size={32} />
                <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart:10 }}>Supervisors</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection:'row', marginTop:50, marginStart:'10%' }} onPress={()=>navigation.navigate('AccountDetailsScreen')} >
                <MaterialIcons name='credit-card' size={32} />
                <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart:10 }}>Account Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection:'row', marginTop:50, marginStart:'10%' }} onPress={()=>navigation.navigate('SecuirtyScreen')}>
                <Feather name='lock' size={32} />
                <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart:10 }}>Security</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection:'row', marginTop:50, marginStart:'10%' }} >
                <Feather name='alert-circle' size={32} />
                <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, marginStart:10 }}>About</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingsHomeScreen;