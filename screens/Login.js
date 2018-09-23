import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Button, Text, Left, Icon, Right, Body } from 'native-base'
import data from './Data'

export default class LoginScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {}

    data.getAllProducts()
    data.getAllOrders()
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              iconLeft
              transparent
              style={{ marginLeft: 5 }}
            >
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
            style={{ marginBottom: 15, height: 50, backgroundColor: '#2196f3' }}
            onPress={() => this.props.navigation.push('Home')}
          >
            <Text style={{ fontSize: 20 }}>Lily Liu</Text>
          </Button>
          <Button
            block
            style={{ marginBottom: 15, height: 50, backgroundColor: '#03a9f4' }}
            onPress={() => this.props.navigation.push('Home')}
          >
            <Text style={{ fontSize: 20 }}>Ben Xiao</Text>
          </Button>
          <Button
            block
            style={{ marginBottom: 15, height: 50, backgroundColor: '#00bcd4' }}
            onPress={() => this.props.navigation.push('Home')}
          >
            <Text style={{ fontSize: 20 }}>Kevin Trieu</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
