import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from './screens/Login'
import HomeScreen from './screens/Home'

const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: HomeScreen
    },
  },
  {
    initialRouteName: 'Home',
  }
)

export default class App extends Component {
  render() {
    return <RootStack />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
