import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import  HomeScreen from '../src/screens/Home';
import  SobreScreen from '../src/screens/Sobre';
import { createStackNavigator, createAppContainer } from "react-navigation";


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Sobre:SobreScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);


export default createAppContainer(AppNavigator);



