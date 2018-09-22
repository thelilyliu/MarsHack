import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container>
        <Content style={{ padding: 15 }}>
          <Text>Home</Text>
        </Content>
      </Container>
    )
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
