import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from './screens/Login'
import HomeScreen from './screens/Home'
import FindItemScreen from './screens/FindItem'
import RequestScreen from './screens/Request'

const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: HomeScreen
    },
    FindItem: {
      screen: FindItemScreen
    },
    Request: {
      screen: RequestScreen
    }
  },
  {
    initialRouteName: 'Login',
  }
)

export default class App extends Component {
  render() {
    return <RootStack />
  }
}

const styles = StyleSheet.create({})
