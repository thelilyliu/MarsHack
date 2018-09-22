import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Button, Text, Left, Icon, Right, Body } from 'native-base'

export default class LoginScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button iconLeft transparent style={{ marginLeft: 5 }}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Text style={{ fontSize: 18 }}>Login</Text>
          </Body>
          <Right />
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

const styles = StyleSheet.create({})
