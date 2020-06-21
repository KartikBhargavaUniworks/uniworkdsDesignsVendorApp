import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FeatherIcon from "react-native-vector-icons/Feather";

const RecoverAccountScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center', marginTop: 72 }}>
                <Text style={{ fontSize: 36 }} >Recover Account</Text>
            </View>
            <View style={styles.containerRecatngleName}>
                <View style={styles.rect3} >
                    <TextInput style={styles.textInputPhone}
                        placeholder="983939xxxx"
                    />
                    <Text style={{ color: 'black', marginTop: 15, marginRight: 10, fontSize: 15 }} >Phone</Text>
                </View>
            </View>
            <Text style={{ marginTop: '20%', marginLeft: '15%', fontSize: 18 }} >Security Questions?</Text>
            <View style={{ borderBottomWidth: 1, marginLeft: '15%', maxWidth: '70%', flexDirection: 'row', marginTop: 5 }} >
                <TextInput placeholder='Type Here' style={styles.textInputAnswer} />
                <MaterialIcons name='edit' style={{ color: 'grey', marginTop: 15, fontSize: 15 }} />
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('New Password')} >
                    <View >
                        <View style={styles.icon1Stack}>
                            <View style={styles.rect4}>
                                <FeatherIcon name="arrow-right" style={styles.icon2}></FeatherIcon>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    containerRecatngleName: {
        marginTop: 40,
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
    textInputAnswer: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        flexDirection: 'row',
        maxWidth: '90%'
    },
    bottomContainer: {
        top: '10%',
        alignItems: 'center',
        justifyContent: 'flex-end',
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
    icon2: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
        height: 41,
        width: 40,
        marginTop: 8,
        marginLeft: 9
    },
})

export default RecoverAccountScreen;