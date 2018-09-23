import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Button, Text, Left, Icon, Right, Body } from 'native-base'
import data from './Data'

const CUSTOMER_ID0 = '916a5844-f039-4899-9068-f5f379960d48_efc189f4-47b2-4197-a8a1-a12a0ec96da6' // Peregrine Aaby
const CUSTOMER_ID1 = '916a5844-f039-4899-9068-f5f379960d48_a9ea9582-f708-40f6-92b2-36e945de04c7' // Kaine Aadland
const CUSTOMER_ID2 = '916a5844-f039-4899-9068-f5f379960d48_96bdaf4b-2075-4902-af56-4c4aa2367ee9' // Noelle Aaby
const CUSTOMER_ID3 = '916a5844-f039-4899-9068-f5f379960d48_93a8cf46-185c-4f9b-8cec-5b66c776a1f1' // Lashanda Aaberg

export default class LoginScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {}

    this.setCustomer = this.setCustomer.bind(this)
  }

  async setCustomer(num) {
    if (num === 0) {
      data.myCustomerID = CUSTOMER_ID0
      data.myCustomerFirstName = 'Peregrine'
      data.myCustomerAddress = '2132 Gerrard St E, Toronto'
    } else if (num === 1) {
      data.myCustomerID = CUSTOMER_ID1
      data.myCustomerFirstName = 'Kaine'
      data.myCustomerAddress = '2083 Gerrard St E, Toronto'
    } else if (num === 2) {
      data.myCustomerID = CUSTOMER_ID2
      data.myCustomerFirstName = 'Noelle'
      data.myCustomerAddress = '38 Kildonan Road, Toronto'
    } else if (num === 3) {
      data.myCustomerID = CUSTOMER_ID3
      data.myCustomerFirstName = 'Lashanda'
      data.myCustomerAddress = '2142 Gerrard St. E, Toronto'
    }

    await data.getAllProducts()
    await data.getMatchedOrders()
    await data.getUnmatchedOrders()

    this.props.navigation.push('Home')
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
            onPress={() => this.setCustomer(0)}
          >
            <Text style={{ fontSize: 20 }}>Peregrine Aaby</Text>
          </Button>
          <Button
            block
            style={{ marginBottom: 15, height: 50, backgroundColor: '#03a9f4' }}
            onPress={() => this.setCustomer(1)}
          >
            <Text style={{ fontSize: 20 }}>Kaine Aadland</Text>
          </Button>
          <Button
            block
            style={{ marginBottom: 15, height: 50, backgroundColor: '#00bcd4' }}
            onPress={() => this.setCustomer(2)}
          >
            <Text style={{ fontSize: 20 }}>Noelle Aaby</Text>
          </Button>
          <Button
            block
            style={{ marginBottom: 15, height: 50, backgroundColor: '#009688' }}
            onPress={() => this.setCustomer(3)}
          >
            <Text style={{ fontSize: 20 }}>Lashanda Aaberg</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
