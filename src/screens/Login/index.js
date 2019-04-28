import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput,Image} from 'react-native';
import LoginForm from '../Login/LoginForm';

export default class App extends React.Component{

    
    render(){
        return(
            <View style={styles.conteiner}>

                <View style={styles.conteinerLogo}>
                    <Image
                        style={styles.logo}
                        source={require('../../image/icon.png')}
                    />
                    <Text style={styles.text}>AlienOne app de monitoramento de Data center</Text>
                </View>

                <View style={styles.conteinerForm}>
                    <LoginForm/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:'#b2bec3',
    },
    conteinerLogo:{
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1,
    },
    logo:{
        width:100,
        height:100
    },
    text:{
        color:'#8793A4',
        marginTop:10,
        width:160,
        textAlign:'center',
        opacity:0.9
    },
    conteinerForm:{

    }
});