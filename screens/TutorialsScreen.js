import React from 'react'
import {View, Text, Button} from 'react-native'

const TutorialsScreen = ({navigation}) =>{
    return(
        <View>
            <Button  title='Hello' onPress={()=>navigation.navigate('AfterAcceptScreen')} />
        </View>
    )
}
export default TutorialsScreen;