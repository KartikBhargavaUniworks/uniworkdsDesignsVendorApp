<View
            style={[
              styles.buttons,
            ] , { flex:1, justifyContent:'center', flexDirection:'row' }}
          >
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: this.state.Contractor? "#ffffff": "#EBEBEB" ,
                elevation:this.state.Contractor? 2:0},
              ]}
            >
              <Text style={{color:this.state.Contractor?'#76C662':"#000000"}}>Contractor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: this.state.SuperVisor? "#ffffff": "#EBEBEB" , elevation:this.state.SuperVisor? 2:0},
              ]}
             
            >
              <Text style={{color:this.state.SuperVisor?'#76C662':"#000000"}}>Supervisor</Text>
            </TouchableOpacity>
          </View>
