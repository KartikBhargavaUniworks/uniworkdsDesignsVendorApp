import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function PersonalDetailsScreen({navigation}) {
  return (
    <ScrollView   >
      <View style={styles.mainContainer} >
        <View style = {{alignItems:'center', marginTop:72}}>
          <Text style = {{ fontSize:36 }} >Personal Details</Text>
        </View>
        <View style={styles.containerRecatngleName}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="Name"
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >Name</Text>
          </View>
        </View>
        <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="Carpenter"
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >Category</Text>
          </View>
        </View>
        <View style = {{marginLeft:'15%' , marginTop:'5%'}} >
       <Text style= {{ color:'#353535' , fontSize:18, fontStyle:'normal' }} >Address</Text>
       </View>
       <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="Telangana"
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >State</Text>
          </View>
        </View>
        <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="Hyderabad"
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >City</Text>
          </View>
        </View>
        <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="Kavuri Hills"
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >Area</Text>
          </View>
        </View>
        <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="Jon Snow"
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >Street</Text>
          </View>
        </View>
        <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="Lamba Trendz Uniworks"
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >Building</Text>
          </View>
        </View>
        <View style={styles.containerRecatngle}>
          <View style= {styles.rect3} >
          <TextInput style = {styles.textInputPhone}
            placeholder="2nd Floor"
          />
          <Text style={{ color: 'black' , marginTop:15,marginRight:10, fontSize:15 }} >Flat No.</Text>
          </View>
        </View>
        <TouchableOpacity style = {styles.SubmitButtonStyle} onPress={() =>navigation.navigate('Payment Details')} >
            <Text style = {{ fontSize:20 , top:13, color:'#ffffff'}}  >Proceed</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 4
  },
  containerRecatngleName: {
    marginTop: 40,
    alignItems: 'center'
  },
  containerRecatngle: {
    marginTop: 15,
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
  SubmitButtonStyle: {
    marginTop:'15%',
    marginLeft:'10%',
    height:60,
    marginRight:'10%',
    backgroundColor:'#99DD70',
    borderRadius:60,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems:'center',
    marginBottom:'10%'
  },
});

export default PersonalDetailsScreen;
