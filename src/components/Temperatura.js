import React from 'react';
import {View,Text,StyleSheet} from 'react-native'; 
import ProgressCircle from 'react-native-progress-circle';

class App extends React.Component{
    render(){
        return(
            <View>
             <ProgressCircle
                percent={30}
                radius={70}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"
            >
              <Text style={{ fontSize: 18}}>{'18.5°C'}</Text>
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