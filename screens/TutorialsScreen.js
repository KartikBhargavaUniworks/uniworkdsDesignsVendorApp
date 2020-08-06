import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const TutorialsScreen = ({ navigation }) => {
    const [showList, setShowList] = useState(false);
    var names = [
        'Kartik',
        'Aman',
        'Arun',
        'Keerthi',
        'Prasad'
    ]
    let PreRequisite = ['White marking make a detailed mark at joints and a simple line for pipes'
    , 'Check the pipes dia and set the chipping depth'
    , 'Check if any damage are there in pipes'
    , 'In case of damage inform site engineer immediately and get it replaced before chipping is done']
    const [chosenName, setChosenName] = useState('SupserVisor Name')
    const [chosenSubacteogry, setChosenSubcategory] = useState('')
    const [preRequisites, setPreRequisites] = useState([]);
    
    let subCategories = ['Pelmet','Wardrobe/Cleaning' ]
    const show = () => {
        setShowList(!showList)
        if (showList == true)
            setChosenName('Supervisor Name')
        console.log(showList)
    }
    const renderNames = ({ item }) => {
        return (
            <View style={{ marginStart: '5%', marginBottom: 20 }} >
                <TouchableOpacity onPress={() => {
                    setChosenName(item)
                    setShowList(!showList)
                }}>
                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }} >{item}</Text>
                </TouchableOpacity>
            </View>
        )

    }
    const renderSubcategory = ({ item }) => {
        return (
            <View style={{ flexDirection:'row',width:60, marginBottom: 20 }} >
                <TouchableOpacity onPress={() => {
                    setChosenSubcategory(item)
                    setPreRequisites(PreRequisite)
                }}>
                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }} >{item}</Text>
                </TouchableOpacity>
            </View>
        )

    }
    const FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: "100%",
                }}
            />
        );
    }
    return (
        <ScrollView>
            <View style={{ flex: 1, marginBottom: 20 }} >
                <View style={{ height: 60, backgroundColor: '#5FE3B9' }} />
                <View style={{ flex: 1, flexDirection: 'row' }} >
                    <View style={{ marginLeft: '10%', marginTop: 10 }} >
                        <Text style={{ color: '#000000', fontSize: 20 }} >Welcome</Text>
                        <Text style={{ color: '#000000', fontSize: 24, fontWeight: 'bold' }} >Aman</Text>
                    </View>
                    <View style={{ marginLeft: '30%', marginTop: 10, flexDirection: 'row' }} >
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 70,
                                height: 70,
                                backgroundColor: '#EAEAEA',
                                borderRadius: 50,
                            }} >
                            <MaterialIcons name='report-problem' size={20} color='#f50c0c' />
                            <Text>Report</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 70,
                                height: 70,
                                backgroundColor: '#EAEAEA',
                                borderRadius: 50,
                                marginLeft: '10%'
                            }} >
                            <MaterialIcons name='assignment' size={20} color='#000000' />
                            <Text>T&C</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1}} >
                    <TouchableOpacity onPress={show} style={{ marginTop:'5%'}} >
                        <View style={styles.rect3} >
                            <Text style={{ alignSelf: 'center', color: '#000000', fontSize: 16 }} >{chosenName}</Text>
                            <View style={{ flex: 1, flexDirection: 'row' }} />
                            <MaterialIcons name='keyboard-arrow-down' size={24} style={{ margin: 20 }} />
                        </View>
                    </TouchableOpacity>
                    {
                        showList ?
                            <View style={{ flex: 1, marginTop: '5%', marginStart: '15%' }} >
                                <FlatList
                                    data={names}
                                    renderItem={renderNames}
                                    ItemSeparatorComponent={FlatListItemSeparator}
                                />
                            </View>
                            : null
                    }
                   <View style={{ flex: 1, marginTop: '5%' }} >
                                <FlatList
                                    data={names}
                                    renderItem={renderSubcategory}
                                    horizontal={true}
                                   
                                />
                            </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        rect3: {
            width: "50%",
            height: 60,
            backgroundColor: "rgba(255,255,255,1)",
            borderWidth: 1,
            borderColor: "rgba(112,112,112,1)",
            borderStyle: "solid",
            borderRadius: 100,
            flexDirection: "row",
            paddingStart: 20,
            marginHorizontal: '8%',
            flexDirection: 'row'
        },
    }
)
export default TutorialsScreen;