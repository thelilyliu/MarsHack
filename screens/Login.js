import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base'

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container>
        <Header style={{ paddingTop : 35}}>
          <Text>Login</Text>
        </Header>
        <Content style={{ padding: 15 }}>
          <Button
            block
            style={{ marginBottom: 15 }}
            onPress={() => this.props.navigation.push('Home')}
          >
            <Text>Lily Liu</Text>
          </Button>
          <Button
            block
            style={{ marginBottom: 15 }}
            onPress={() => this.props.navigation.push('Home')}
          >
            <Text>Ben Xiao</Text>
          </Button>
          <Button
            block
            style={{ marginBottom: 15 }}
            onPress={() => this.props.navigation.push('Home')}
          >
            <Text>Kevin Trieu</Text>
          </Button>
          <Button
            block
            style={{ marginBottom: 15 }}
            onPress={() => this.props.navigation.push('Home')}
          >
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
