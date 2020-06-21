import { View, Button, Text, Modal, StyleSheet } from "react-native";
import React from 'react'
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
    const [data, setData] = React.useState({
        visible: false
    })

    const handleVisible = () => {
        setData(
            {
                visible: !data.visible
            }
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#78CCF2', alignItems: 'center', justifyContent: 'center' }} >
            <Button title='show Modal' onPress={() => handleVisible()} />
            <Modal transparent={true} visible={data.visible} 
            >
                <View style={{ backgroundColor: '#ffffff', flex: 1, marginLeft: '15%', marginRight: '15%', marginTop: '25%', marginBottom: '30%' }}  >
                    <View style={{ flex: 1, backgroundColor: '#000000', alignItems: 'center' }} >
                        <View>
                            <Text style={{ paddingTop: 15, color: '#ffffff', }} >
                                Description
                            </Text>
                        </View>
                        <View style={{ paddingTop: 10 }} >
                            <Text style={{ color: '#ffffff' }} >
                                Here will be the description
                                </Text>
                        </View>
                    </View>
                    <View style={{ flex: 3 }} >
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
                        <View style={{ marginTop: '10%', borderColor: '#000000', borderWidth: 0.5 }} />
                        <View style = {{marginTop:'10%',alignItems:'center'}} >
                            <Text style = {{ fontSize:30, color:'#353535' }} >Rs. 42,000</Text>
                        </View>
                        <View style = {{marginTop: '20%',
                            marginLeft: '10%',
                            marginRight: '10%', flexDirection: 'row'}} > 
                            <TouchableOpacity>
                                <Text style = {{fontSize:23, color:'#FF0000', fontFamily:'comfortaa' }} onPress = {() => {handleVisible()}} >Decline</Text>
                            </TouchableOpacity>
                            <View style={styles.signInFiller}/>
                            <TouchableOpacity  >
                                <Text style = {{fontSize:23, color:'#008000', fontFamily:'comfortaa' }} onPress = {() => {handleVisible() , navigation.navigate('AfterAcceptScreen')}}>Accept</Text>
                            </TouchableOpacity>
                       </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    ModalRow: {
        flexDirection: "row",
        marginTop: '18%',
        marginLeft: '20%',
        marginRight: '20%'
    },
    TypeStyle: {
        fontFamily: "comfortaa-regular",
        color: "#000000",
    },
    signInFiller: {
        flex: 1,
        flexDirection: "row"
    },
    Number: {
        fontFamily: "comfortaa-regular",
        color: "#121212",
    }
})
export default HomeScreen;