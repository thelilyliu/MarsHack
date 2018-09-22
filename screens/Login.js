import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import { Container, Header, Content, Button, Text } from 'native-base'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      // <Container>
      //   <Header />
      //   <Content>
      //     <Button>
      //       <Text>User #1</Text>
      //     </Button>
      //     <Button>
      //       <Text>User #2</Text>
      //     </Button>
      //     <Button>
      //       <Text>User #3</Text>
      //     </Button>
      //     <Button>
      //       <Text>User #4</Text>
      //     </Button>
      //   </Content>
      // </Container>
      <Text>Login</Text>
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
