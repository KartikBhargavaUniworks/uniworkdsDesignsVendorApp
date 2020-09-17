import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, AsyncStorage, Image } from 'react-native'
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Spinner from 'react-native-loading-spinner-overlay'
import images from '../../assets/images'

const TutorialsScreen = ({ navigation }) => {
    const [showList, setShowList] = useState(false);
    const [chosenName, setChosenName] = useState('Select Category')
    const [chosenSubCategory, setChosenSubCategory] = useState([])
    const [vendorPersonal, setVendorPersonal] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [categoryDetails, setCategoryDetails] = useState([]);
    const [showSubCategory, setShowSubCategory] = useState(false)
    const [prerequisite, setPreRequisite] = useState([])
    const [tutorials, setTutorials] = useState([])
    const show = () => {
        setShowList(!showList)
        if (showList == true)
            setChosenName('Select Category')
    }

    const fetchData = async ()=>{
        let contact = await AsyncStorage.getItem('contact')
        
    }
    const saveDetails=async(val)=>{
       await AsyncStorage.setItem('userName', val.userName)
       await AsyncStorage.setItem('vendorId', JSON.stringify(val.id))
    }
    useEffect(()=> {
    fetchData()
  },[] );
  const showSubcategories=(id)=>{
      categoryDetails.forEach(element=>{
          if(id==element.id){
              setChosenSubCategory(element.subcategories)
              setShowSubCategory(true)
          }
      })
      
  }
    const renderNames = ({ item }) => {
        return (
            <View style={{backgroundColor: "rgba(255,255,255,1)",
            borderWidth: 1,
            borderColor: "rgba(112,112,112,1)",
            borderStyle: "solid",
            borderRadius: 30,
            paddingStart:18,
            paddingEnd:18,
            width:120,
            marginStart:'14%'
        }} >
                <TouchableOpacity onPress={() => {
                    setChosenName(item.categoryName)
                    showSubcategories(item.id)
                    setShowList(!showList)
                    setShowSubCategory(!showSubCategory)
                }}>
                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }} >{item.categoryName}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const showPrequisiteAndTutorials=(id)=>{
        chosenSubCategory.forEach(element=>{
            if(id==element.id){
                setPreRequisite(element.prerequisites)
                setTutorials(element.tutorials)
            }
        })
    }
    
    const renderPrerequisite=({item})=>{
        return(
            <View style={{ marginStart:'12%' }} >
                <Text>- {item.description}</Text>
            </View>
        )
    }

    const renderSubcategory = ({ item }) => {
        return (
            <View  style={{height: 60,
               }} >
                <TouchableOpacity  style={{backgroundColor: "rgba(255,255,255,1)",
                borderWidth: 1,
                borderColor: "rgba(112,112,112,1)",
                borderStyle: "solid",
                borderRadius: 30,
                paddingStart:18,
                paddingEnd:18,
                width:'100%'
            }}  onPress={()=>showPrequisiteAndTutorials(item.id)} >
                    <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }} >{item.subcategoryName}</Text>
                </TouchableOpacity>
            </View>
        )

    }

    const renderTutorials=({item})=>{
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('VideoScreen')} >
                <View style={{ flexDirection:'row',marginHorizontal:'10%',backgroundColor:'#ffffff' }}>
                <Image
                 source={images.welcom1Image}
                 style={{width:120,height:120,borderWidth:2, borderBottomLeftRadius:20}}
                />
                <View style={{flex:1,alignSelf:'flex-start',backgroundColor:'#ffffff' }} >
        <Text style={{ color:'#000000',alignSelf:'center', fontSize:16,fontWeight:'bold'}} >{item.topicName}</Text>
        <Text style={{ color:'#000000',alignSelf:'center', fontSize:12}} >{item.description}</Text>
                </View> 
                </View>
           
            </TouchableOpacity>
        )
    }

    const FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 20,
                    width: "100%",
                    color:'#ffffff'
                }}
            />
        );
    }
    return (
        <ScrollView>
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
                <View style={{ height: 60, backgroundColor: '#5FE3B9' }} />
                <View style={{ flex: 1, flexDirection: 'row' }} >
                    <View style={{ marginLeft: '10%', marginTop: 10 }} >
                        <Text style={{ color: '#000000', fontSize: 20 }} >Welcome</Text>
    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', maxWidth:90 }} >{vendorPersonal.name}</Text>
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
                            <View style={{ flex: 1, marginTop:10}} >
                                <FlatList
                                    data={categoryDetails}
                                    renderItem={renderNames}
                                    ItemSeparatorComponent={FlatListItemSeparator}
                                />
                            </View>
                            : null
                    }
                   {
                       showSubCategory?
                       <View style={{flex:1,marginStart:'10%', marginTop:20}} >
                                <FlatList
                                    data={chosenSubCategory}
                                    renderItem={renderSubcategory}
                                    horizontal={true}
                                />
                            </View>:
                            null
                   }
                   <Text style={{ color:'#000000', fontSize:16, fontWeight:'bold', marginStart:'10%', marginTop:20 }} >Prequisites & Checklist</Text>
                   <View  >
                       <FlatList
                          data={prerequisite}
                          renderItem={renderPrerequisite}
                       />
                   </View>
                   <View style={{marginTop:30}} >
                       <FlatList
                       data={tutorials}
                       renderItem={renderTutorials}
                       />
                   </View>
                </View>
            </View>
}
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
        },
        subcategory: {
            height: 30,
            width:100,
            backgroundColor: "rgba(255,255,255,1)",
            borderWidth: 1,
            borderColor: "rgba(112,112,112,1)",
            borderStyle: "solid",
            borderRadius: 100,
            paddingStart: 20,
            marginHorizontal: '8%',
        },
    }
)
export default TutorialsScreen;