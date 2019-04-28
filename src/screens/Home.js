import React from 'react';
import {View,StyleSheet,StatusBar,Text} from 'react-native';
import Temperatura from '../components/Temperatura';
import Unidade from '../components/unidade';


export default class App extends React.Component {
  
  static navigationOptions = ({ navigation}) => {
    return {
      title: "Weather",
      headerTitleStyle: { marginLeft:165,
                          fontFamily:'EvilIcons',
    },  
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#303644" barStyle="light-content"/>
        <View style={styles.content}>
          <Temperatura/>
          <Unidade/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
  searchBar: {
    height: 54,
    backgroundColor: '#3b5998',
  },
  content: {
    flex: 1,
    borderColor:'#0F06E3',
    backgroundColor: '#303644',
  },


});



