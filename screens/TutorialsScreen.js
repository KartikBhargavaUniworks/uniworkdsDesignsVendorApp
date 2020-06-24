import React from 'react'
import {View, Text, Button} from 'react-native'

const TutorialsScreen = ({navigation}) =>{
    return(
        <View style = {{ flex:1, justifyContent:'center',alignItems:'center' }} >
           
           <Button  title='Receive Notification' onPress={()=>navigation.navigate('Show Modal Screen')} />
          
        </View>
    )
}
export default TutorialsScreen;