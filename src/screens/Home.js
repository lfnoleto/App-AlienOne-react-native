import React from 'react';
import {View,Text,StyleSheet,StatusBar,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Temperatura from '../components/Temperatura';
import Unidade from '../components/unidade';
import Presenca from '../components/Presenca';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (

      <View style={styles.container}>
        <LinearGradient>
          <View style={styles.content}>
            <Temperatura/>
          </View>
        </LinearGradient>
        <View style={styles.content02}>
            <Unidade/>
            <Presenca/>
        </View>
        <View style={styles.menuBar} >
            <TouchableOpacity style={styles.Button01}
              onPress={() => this.props.navigation.push()}
            >
              <Text style={styles.butonText}>{'Button 01'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Button01}
              onPress={()=> this.props.navigation.push('Sobre')}
            >
              <Text style={styles.butonText}>{'Button 02'}</Text>
            </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  searchBar: {
    height: 54,
    backgroundColor: '#3b5998',
  },
  content: {
    flex: 1,
    borderRadius:400,
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
    backgroundColor: '#fff',
  }, 
  Button01:{
    flex:1,
    backgroundColor:'#48bbec',
    padding:10,
    borderColor:'#1d8eb8',
    borderWidth:1,
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.4
  },
  butonText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
    alignSelf:'center'
}
});



