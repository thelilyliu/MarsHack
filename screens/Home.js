import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Button, Text, Icon, Card, CardItem, Body, ListItem, Left, Right, Switch, Fab, View } from 'native-base'
import axios from 'axios'

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.state = {
      active : false
    }

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
        <Header style={{ paddingTop : 35}}>
          <Text>Home</Text>
        </Header>
        <Content style={{ padding: 15 }}>  
          <Button
            iconLeft
            success
            block
            style={{ marginBottom: 15 }}
            onPress={() => this.props.navigation.push('FindItem')}
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

            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: '#00bcd4' }}>
                  <Icon active name='calendar' />
                </Button>
              </Left>
              <Body>
                <Text>Delivery Date</Text>
              </Body>
              <Right>
                <Text style={{ color: 'black' }}>Fri. Sep. 21</Text>
              </Right>
            </ListItem>

            <ListItem icon style={{ marginBottom: 5 }}>
              <Left>
                <Button style={{ backgroundColor: '#009688' }}>
                  <Icon active name='construct' />
                </Button>
              </Left>
              <Body style={{ borderColor: 'transparent' }}>
                <Text>More Actions</Text>
              </Body>
              <Right style={{ borderColor: 'transparent' }}>
                <Button iconLeft transparent>
                  <Icon name='arrow-forward' style={{ fontSize: 30 }} />
                </Button>
              </Right>
            </ListItem>
          </Card>
        </Content>

        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="menu" />
            <Button style={{ backgroundColor: '#34A34F' }} >
              <Icon name="home"/>
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="pulse"/>
            </Button>
            <Button style={{ backgroundColor: '#DD5144' }} 
                    onPress={() => this.props.navigation.push('ItemSearch')}>
              <Icon name="add"/>
            </Button>
          </Fab>
        </View>
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
