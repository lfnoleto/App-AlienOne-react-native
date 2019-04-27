import React from 'react';
import {View,Text,StyleSheet} from 'react-native'; 
import ProgressCircle from 'react-native-progress-circle';

class App extends React.Component{
    render(){
        return(
          
            <View style={styles.Cicler}>
             <ProgressCircle
                percent={30}
                radius={100}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="red"
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
    backgroundColor: 'red',
    

  },
});

export default App;