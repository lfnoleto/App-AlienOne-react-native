import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import Temperatura from '../components/Temperatura';
import Unidade from '../components/unidade';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.content}>
            <Temperatura/>
        </View>
        <View style={styles.content02}>
            <Unidade/>
        </View>
        <View style={styles.menuBar} />
        
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
  },
  menuBar: {
    height: 54,
    backgroundColor: '#fff',
  }
});



