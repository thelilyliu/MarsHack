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

const styles = StyleSheet.create({})
