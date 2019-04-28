import React, { Component } from 'react';

import { View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';

// import { Container } from './styles';

export default class Login extends Component {
  render() {
    return (
        <View style={styles.conteiner}>
            <TextInput
                placeholder='UserName'
                style={styles.input}
            />
            <TextInput
                placeholder='passaword'
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity style={styles.conteinerBottom}>
                <Text style={styles.TextBottom}>Login</Text>    
            </TouchableOpacity>            
        </View>
    )
  }
}

const styles = StyleSheet.create({
    conteiner:{
        padding:20

    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.7)',
        marginBottom:20,
        color:'#fff',
        paddingHorizontal:10
    },
    conteinerBottom:{
        backgroundColor:'#3498db',
        paddingVertical:10
    },
    TextBottom:{
        textAlign:'center'
    }

});
