import React from 'react';
import {View,Text,StyleSheet} from 'react-native'; 
import ProgressCircle from 'react-native-progress-circle';
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends React.Component{
    render(){
        return(
            <View style={styles.conteiner}>

            <ProgressCircle
              percent={30}
              radius={70}
              borderWidth={8}
              color="#3399FF"
              shadowColor="#999"
              bgColor="#ececec"
            
            >
               <Icon name="cloud" size={50} color="#ffd100"/>
             
            </ProgressCircle>
          </View>
        );
    }
} 

const styles = StyleSheet.create({
    conteiner:{
      marginTop:40,
      marginLeft:40,
      flex:1
    },
    Cicler: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      marginTop:40
      

    },
});

export default App;