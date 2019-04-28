import  HomeScreen from '../src/screens/Home';
import LoginScreen from '../src/screens/Login/';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home  :HomeScreen,
    Login :LoginScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#303644',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        //fontWeight: 'bold',
        fontFamily:'EvilIcons'
      },
    },
  }
);


export default createAppContainer(AppNavigator);



