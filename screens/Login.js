import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container>
        <Content style={{ padding: 15 }}>
          <Button block style={{ marginBottom: 15 }}>
            <Text>Lily Liu</Text>
          </Button>
          <Button block style={{ marginBottom: 15 }}>
            <Text>Ben Xiao</Text>
          </Button>
          <Button block style={{ marginBottom: 15 }}>
            <Text>Kevin Trieu</Text>
          </Button>
          <Button block style={{ marginBottom: 15 }}>
            <Text>Haibo Wang</Text>
          </Button>
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
