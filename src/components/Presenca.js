import React from 'react';
import {View,Text,StyleSheet} from 'react-native'; 
import ProgressCircle from 'react-native-progress-circle';

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
              bgColor="#fff"
            
            >
              <Text style={{ fontSize: 20}}>{'18.0°C'}</Text>
            </ProgressCircle>
          </View>
        );
    }
} 

const styles = StyleSheet.create({
    conteiner:{
      flex: 1,
      marginTop:40,
      flexDirection:'row'
      
     
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