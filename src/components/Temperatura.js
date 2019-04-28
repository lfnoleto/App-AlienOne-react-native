import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native'; 
import ProgressCircle from 'react-native-progress-circle';
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends React.Component{
  render(){
    return(
      <View style={styles.Cicler}>
        <ProgressCircle
          percent={30}
          radius={140}
          borderWidth={8}
          color="#fff"
          shadowColor="#999"
          bgColor="#303644"
        >
        <Icon name="cloud" size={50} color="#fff"/>
        <Text style={styles.text}>{'18.5°'}</Text>
        </ProgressCircle>
      </View>
    );
  }
} 


const styles = StyleSheet.create({
  conteiner:{

  },
  Cicler: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303644',
    marginTop:40
  },
  text:{
    fontSize: 90,
    color:'#fff',
    fontFamily:'DS-DIGI',
    marginTop:20
  }
});

export default App;