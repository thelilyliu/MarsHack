import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import axios from 'axios'
import { Container, Header, Content, Button, Text, Icon, Card, CardItem, Body, ListItem, Left, Right, Switch } from 'native-base'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }
  constructor(props) {
    super(props)

    this.state = {}

    this.getProducts()
  }

  async getProducts() {
    const url = 'http://mars-hack.herokuapp.com/api/get_products'

    let res
    try {
      res = await axios.get(url)
    } catch (error) {
      console.error(error)
    }

    console.log(res.data)
  }

  render() {
    return (
      <Container>
        <Header>
          <Left></Left>
          <Body>
            <Text>Home</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu"></Icon>
            </Button>
          </Right>
        </Header>
        <Content style={{ padding: 15 }}>
          
          <Button
            iconLeft
            success
            style={{ marginBottom: 15 }}
          >
            <Icon name='add' />
            <Text>New Request</Text>
          </Button>

          <Card>
            <CardItem header bordered>
              <Left>
                <Text style={{ fontSize: 18, marginLeft: 0, color: '#0d47a1' }}>Eggs</Text>
              </Left>
              <Right>
                <Text style={{ fontSize: 18, marginLeft: 0, color: '#0d47a1' }}>$4.20</Text>
              </Right>
            </CardItem>

            <ListItem icon style={{ marginTop: 5 }}>
              <Left>
                <Button style={{ backgroundColor: '#3f51b5' }}>
                  <Icon active name='cart' />
                </Button>
              </Left>
              <Body>
                <Text>Store</Text>
              </Body>
              <Right>
                <Text style={{ color: 'black' }}>Costco Wholesale</Text>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: '#2196f3' }}>
                  <Icon active name='pie' />
                </Button>
              </Left>
              <Body>
                <Text>Share</Text>
              </Body>
              <Right>
                <Text style={{ color: 'black' }}>25%</Text>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: '#03a9f4' }}>
                  <Icon active name='hand' />
                </Button>
              </Left>
              <Body>
                <Text>Delivery Volunteer</Text>
              </Body>
              <Right>
                <Switch value={true} />
              </Right>
            </ListItem>

            <ListItem icon style={{ marginBottom: 5 }}>
              <Left>
                <Button style={{ backgroundColor: '#00bcd4' }}>
                  <Icon active name='calendar' />
                </Button>
              </Left>
              <Body style={{ borderColor: 'transparent' }}>
                <Text>Delivery Date</Text>
              </Body>
              <Right style={{ borderColor: 'transparent' }}>
                <Text style={{ color: 'black' }}>Fri. Sep. 21</Text>
              </Right>
            </ListItem>

            <CardItem footer bordered>
              <Left>
                <Text>Edit</Text>
              </Left>
              <Right>
                <Text>Cancel</Text>
              </Right>
            </CardItem>
          </Card>

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
