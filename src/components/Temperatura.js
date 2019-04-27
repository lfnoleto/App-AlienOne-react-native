import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native'; 
import ProgressCircle from 'react-native-progress-circle';


class App extends React.Component{
    render(){
        return(
         
            <View style={styles.Cicler}>
              <StatusBar
                backgroundColor="#455a64" barStyle="light-content"
              />
             <ProgressCircle
                percent={30}
                radius={140}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#455a64"
            >
              <Text style={{ fontSize: 75, color:'#fff'}}>{'18.5°'}</Text>
            </ProgressCircle>
          </View>
        );
    }
} 


const styles = StyleSheet.create({
  conteiner:{

  },
  Cicler: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455a64',
    borderBottomLeftRadius: 140,
    borderBottomRightRadius: 140,

   
    

  },
});

export default App;