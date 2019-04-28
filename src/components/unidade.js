import React from 'react';
import {View,Text,StyleSheet} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends React.Component{
    render(){
      return(
        <View style={styles.conteiner}>

          <Text style={styles.umidade}>Umidade Do Ar</Text>
          <View style={styles.Cicler}>
            <Icon name="cloud" size={35} color="#ffd100" style={styles.icon}/>
            <Text style={styles.text} >{'-6°'}</Text>
          </View>
        </View>
      );
    }
} 

const styles = StyleSheet.create({
  conteiner:{
    marginTop:20,
  },
  Cicler: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
    flexDirection:'row'
  },
  text:{
    fontSize:40,
    fontFamily:'DS-DIGIT',
    color:'#fff',
    marginTop:10,
    marginLeft:10,
    justifyContent: 'center',
    
  },
  icon:{
    paddingTop:15
  },
  umidade:{
    fontSize:30,
    color:'#fff',
    marginTop:80,
    marginLeft:10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:100
  },
});

export default App;