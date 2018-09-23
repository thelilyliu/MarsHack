import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Button, Text, Icon, Card, CardItem, Body, List, ListItem, Left, Right, Switch, View, Thumbnail, CheckBox } from 'native-base'
import Modal from 'react-native-modal'
import data from './Data'

export default class HomeScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      selectedOrder: {},
      showModal: false
    }

    this.showOrderDetails = this.showOrderDetails.bind(this)
    this.completeOrder = this.completeOrder.bind(this)
  }

  showOrderDetails(order) {
    this.setState({
      selectedOrder: order,
      showModal: true
    })
  }

  completeOrder() {
    
  }

  getProductByID(productID) {
    return data.allProducts.filter(product => {
      return product.pk === productID
    })
  }

  toggleModal() {
    this.setState(prevState => {
      return { showModal: !prevState.showModal }
    })
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
            <Text style={{ fontSize: 18 }}>Home</Text>
          </Body>
          <Right />
        </Header>

        <Content style={{ padding: 15 }}>  
          <Button
            iconLeft
            success
            block
            style={{ marginBottom: 15 }}
            onPress={() => this.props.navigation.push('FindItem')}
          >
            <Icon name='add' style={{ fontSize: 32, marginTop: -1 }} />
            <Text style={{ fontSize: 20 }}>New Request</Text>
          </Button>

          {data.allOrders.map(order => {
            let productID = order.fields.product
            let product = this.getProductByID(productID)[0]

            return (
              <Card key={order.pk} style={{ marginBottom: 15 }}>
                <CardItem bordered>
                  <Left>
                    <Thumbnail source={{ uri: 'https://icon2.kisspng.com/20180526/svu/kisspng-costco-gift-card-money-discounts-and-allowances-5b09a473723b03.1047530015273585794679.jpg' }} />
                    <Body style={{ flex: 1 }}>
                      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                        <Text style={{ fontSize: 18 }}>{product.fields.name}</Text>
                        <Text style={{ fontSize: 18 }}>${(product.fields.price * order.fields.percentage * 0.01).toFixed(2)}</Text>
                      </View>
                      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                        <Text style={{ fontSize: 15, color: '#757575' }}>{product.fields.store}</Text>
                        <Button
                          transparent
                          style={{ paddingTop: 0, paddingBottom: 0, height: 25 }}
                          onPress={() => this.showOrderDetails(order)}
                        >
                          <Icon name='alert' style={{ transform: [{ rotate: '180deg'}], marginLeft: 0, marginRight: 0 }} />
                        </Button>
                      </View>
                    </Body>
                  </Left>
                </CardItem>

                <ListItem icon style={{ marginTop: 5 }}>
                  <Left>
                    <Button style={{ backgroundColor: '#2196f3' }}>
                      <Icon active name='pie' />
                    </Button>
                  </Left>
                  <Body>
                    <Text>Percentage Share</Text>
                  </Body>
                  <Right>
                    <Text style={{ color: 'black' }}>{order.fields.percentage}%</Text>
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
                    <Switch value={order.fields.can_deliver} disabled />
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
              </Card>
            )
          })}
          
          <View style={{ height: 20 }} />
        </Content>

        <Modal isVisible={this.state.showModal}>
          <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Order Details: Deliverer</Text>

            <List>
              <ListItem>
                <CheckBox checked={false} />
                <Body style={{ marginLeft: 5 }}>
                  <Text style={{ fontSize: 18, marginBottom: 5 }}>Lily Liu – 30%</Text>
                  <Text style={{ fontSize: 16, color: '#424242' }}>317 Dundas St W, Toronto, ON M5T 1G4</Text>
                </Body>
              </ListItem>

              <ListItem>
                <CheckBox checked={false} />
                <Body style={{ marginLeft: 5 }}>
                  <Text style={{ fontSize: 18, marginBottom: 5 }}>Ben Xiao – 20%</Text>
                  <Text style={{ fontSize: 16, color: '#424242' }}>60 Queen St W, Toronto, ON M5H 2M3</Text>
                </Body>
              </ListItem>

              <ListItem>
                <CheckBox checked={true} color={'#9e9e9e'} />
                <Body style={{ marginLeft: 5 }}>
                  <Text style={{ fontSize: 18, marginBottom: 5 }}>Kevin Trieu – 50%</Text>
                  <Text style={{ fontSize: 16, color: '#424242' }}>1 Richmond St W, Toronto, ON M5H 3W4</Text>
                </Body>
              </ListItem>
            </List>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <Button
                iconLeft
                light
                onPress={() => this.toggleModal()}
              >
                <Icon name='close' />
                <Text>Close</Text>
              </Button>
              <Button
                iconLeft
                success
                onPress={() => this.completeOrder()}
              >
                <Icon name='done-all' />
                <Text>Complete</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
