import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import Temperatura from '../components/Temperatura';
import Unidade from '../components/unidade';

class App extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#f4511e'
                />
                <Temperatura/>
                <Unidade/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    Cicler: {
      marginTop:40,  
      marginBottom: 5,
    },
  });



export default App;