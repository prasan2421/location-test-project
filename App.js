import React from 'react';
import {  View,
    ScrollView,
    Text,
    AsyncStorage,
    Button,
    TextInput,
    Alert,
    Picker,
    StyleSheet,
    Modal,
    FlatList,
    TouchableOpacity,
    RefreshControl,
    TouchableHighlight,
    Dimensions,
    Image,
    ActivityIndicator, Keyboard, StatusBar, PermissionsAndroid} from 'react-native';


import Geolocation from 'react-native-geolocation-service';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,

            gps:'',

        }
    }
    state ={
        isReady: false
    };

    componentDidMount(){

    }
    requestLocationPermission= async () =>  {

            Geolocation.getCurrentPosition(
                (position) => {
                    this.setState({
                        gps:position.coords.latitude+','+position.coords.longitude,
                    })
                },
                (error) => {
                    // See error code charts below.
                    alert(JSON.stringify(error))
                    // console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );




    }


    render() {

            return(


                    <ScrollView style={{backgroundColor:'#ebeef3'}}>
                        <StatusBar
                            barStyle="dark-content"
                            backgroundColor='#1B7ED5'
                        />


                        <View style={{width:'100%',marginBottom:10,alignItems: 'center',marginTop:10}}>
                            <View style={{justifyContent:'space-between',width:'95%',backgroundColor:'#fff',alignItems:'center',borderRadius:5,elevation: 1}}>
                                <TextInput style={{paddingLeft:10}}
                                           value={this.state.gps}
                                           placeholder="GPS Location"
                                           returnKeyType='done'
                                           onSubmitEditing={Keyboard.dismiss}
                                           onChangeText={(gps) => this.setState({gps})}
                                />
                                <TouchableOpacity onPress={() => this.requestLocationPermission()}>
                                    <Text style={{color:'#fff',backgroundColor:'#ff1500'}}>Press</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>


            );

    }
}

