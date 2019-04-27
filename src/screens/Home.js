import React from 'react';
import {View,Text,StyleSheet,StatusBar,TouchableOpacity,Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Temperatura from '../components/Temperatura';
import Unidade from '../components/unidade';
import Presenca from '../components/Presenca';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'AlienOne',
  };

  render() {
    return (

      <View style={styles.container}>
        
          <View style={styles.content}>
            <Temperatura/>
          </View>
       
        <View style={styles.content02}>
            <Unidade/>
            <Presenca/>
        </View>

        <View style={styles.menuBar} >

          <TouchableOpacity style={styles.Button01}onPress={() => this.props.navigation.push()}>      
            <Icon name="refresh" size={40} color="#fff"/>
            <Text style={styles.butonText}>{'Refresh'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Button01} onPress={() => this.props.navigation.push('Sobre')}> 
            <Text style={styles.butonText}>{'Sobre'}</Text>     
            <Icon name="navicon" size={40} color="#fff"/>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomLeftRadius: 400,
  },
  searchBar: {
    height: 54,
    backgroundColor: '#3b5998',
  },
  content: {
    flex: 1,
    borderColor:'#0F06E3',
    backgroundColor: '#ececec',
  },
  content02: {
    flex: 0.60,
    height: 54,
    backgroundColor: '#edeef1',
    flexDirection:'row',
  },
  menuBar: {
    flexDirection:'row',
    height: 54,
    backgroundColor: '#666',
  }, 
  Button01:{
    flex:1,
    backgroundColor:'#00c6ae',
    padding:10,
    borderColor:'#1d8eb8',
    borderWidth:1,
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.4,
    flexDirection:'row',
    alignItems:'center'
  },
  butonText:{
    flex:1,
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'center',
    marginLeft:40,
},
icon:{
  flex:1,
  marginLeft:60,
 
}
});



