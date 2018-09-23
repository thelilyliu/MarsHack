import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Button, Text, Icon, Body, List, ListItem, Left, Right, View, Thumbnail, CheckBox } from 'native-base'
import Modal from 'react-native-modal'
import data from './Data'

export default class HomeScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      clickedOrder: false,
      selectedOrder: {},
      selectedOrderMatched: false,
      showModal: false
    }

    this.showOrderDetails = this.showOrderDetails.bind(this)
    this.completeOrder = this.completeOrder.bind(this)
    this.receiveOrder = this.receiveOrder.bind(this)
    this.cancelOrder = this.cancelOrder.bind(this)
  }

  showOrderDetails(order, matched) {
    this.setState({
      clickedOrder: true,
      selectedOrder: order,
      selectedOrderMatched: matched,
      showModal: true
    })
  }

  completeOrder() {
    let counter = 0
    let total = this.state.selectedOrder.users.length - 1

    this.state.selectedOrder.users.forEach(user => {
      if (user.is_complete) {
        counter++
      }
    })

    if (counter === total) {
      this.receiveOrder()
    }
  }

  receiveOrder() {
    let customerID = data.myCustomer.id
    let orderID = this.state.selectedOrder.id

    data.markOrderComplete(customerID, orderID)

    this.toggleModal()
  }

  cancelOrder() {
    this.toggleModal()
  }

  getProductByID(productID) {
    return data.allProducts.find(product => {
      return product.pk === productID
    })
  }

  findMyUser(order) {
    return order.users.find(user => {
      return user.user.customer_id === data.myCustomer.id
    })
  }

  toggleModal() {
    this.setState(prevState => {
      return { showModal: !prevState.showModal }
    })
  }

  toggleCheck(index) {
    this.setState(prevState => {
      let newSelectedOrder = prevState.selectedOrder
      newSelectedOrder.users[index].is_complete = !prevState.selectedOrder.users[index].is_complete

      return { selectedOrder: newSelectedOrder }
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
          <Right>
            <Text style={{ fontSize: 18, marginRight: 5 }}>{data.myCustomer.firstName}</Text>
          </Right>
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

          <List>
            {data.allMatchedOrders.map(order => {
              return (
                <ListItem
                  key={order.users[0].order}
                  bordered
                  style={{ backgroundColor: '#c8e6c9', marginLeft: 0, paddingLeft: 16 }}
                >
                  <Left>
                    <Thumbnail source={{ uri: 'https://icon2.kisspng.com/20180526/svu/kisspng-costco-gift-card-money-discounts-and-allowances-5b09a473723b03.1047530015273585794679.jpg' }} />
                    <Body style={{ flex: 1 }}>
                      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                        <Text style={{ fontSize: 18 }}>{order.product.name}</Text>
                        <Text style={{ fontSize: 18 }}>${this.findMyUser(order).payment}</Text>
                      </View>
                      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                        <Text style={{ fontSize: 15, color: '#757575' }}>{order.product.store}</Text>
                        <Button
                          transparent
                          style={{ paddingTop: 0, paddingBottom: 0, height: 25 }}
                          onPress={() => this.showOrderDetails(order, true)}
                        >
                          <Icon name='alert' style={{ transform: [{ rotate: '180deg'}], marginLeft: 0, marginRight: 0 }} />
                        </Button>
                      </View>
                    </Body>
                  </Left>
                </ListItem>
              )
            })}
          </List>

          <List>
            {data.allUnmatchedOrders.map(order => {
              let product = this.getProductByID(order.fields.product)

              return (
                <ListItem
                  key={order.pk}
                  bordered
                  style={{ backgroundColor: '#fff9c4', marginLeft: 0, paddingLeft: 16 }}
                >
                  <Left>
                    <Thumbnail source={{ uri: 'https://icon2.kisspng.com/20180526/svu/kisspng-costco-gift-card-money-discounts-and-allowances-5b09a473723b03.1047530015273585794679.jpg' }} />
                    <Body style={{ flex: 1 }}>
                      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                        <Text style={{ fontSize: 18 }}>
                          {product.fields.name}
                        </Text>
                        <Text style={{ fontSize: 18 }}>
                          ${(product.fields.price * order.fields.percentage * 0.01).toFixed(2)}
                        </Text>
                      </View>

                      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                        <Text style={{ fontSize: 15, color: '#757575' }}>{product.fields.store}</Text>
                        <Button
                          transparent
                          style={{ paddingTop: 0, paddingBottom: 0, height: 25 }}
                          onPress={() => this.showOrderDetails(order, false)}
                        >
                          <Icon name='alert' style={{ transform: [{ rotate: '180deg'}], marginLeft: 0, marginRight: 0 }} />
                        </Button>
                      </View>
                    </Body>
                  </Left>
                </ListItem>
              )
            })}
          </List>
          
          <View style={{ height: 20 }} />
        </Content>

        {this.state.clickedOrder && 
          <Modal isVisible={this.state.showModal}>
            <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
              {this.state.selectedOrderMatched &&
                <View>
                  <Text style={{ fontSize: 20, marginBottom: 10 }}>
                    Role: {this.findMyUser(this.state.selectedOrder).is_deliverer ? 'Deliverer' : 'Receiver'}
                  </Text>

                  {this.findMyUser(this.state.selectedOrder).is_deliverer ?
                    <Text style={{ fontSize: 16, marginTop: 0, marginBottom: 0, color: '#3f51b5' }}>
                      Delivery Date: {this.state.selectedOrder.date}
                    </Text>
                    :
                    <View />
                  }

                  <List>
                    {this.findMyUser(this.state.selectedOrder).is_deliverer && this.state.selectedOrder.users.map((user, index) => {
                      return (
                        <ListItem key={user.user.id}>
                          <CheckBox
                            checked={user.is_complete || user.user.customer_id === data.myCustomer.id}
                            onPress={() => this.toggleCheck(index)}
                            color={user.user.customer_id === data.myCustomer.id ? '#9e9e9e' : '' }
                          />
                          <Body style={{ marginLeft: 5 }}>
                            <Text style={{ fontSize: 18, marginBottom: 5 }}>
                              {user.user.first_name} {user.user.last_name} – {user.percentage}%
                            </Text>
                            <Text style={{ fontSize: 16, color: '#424242' }}>
                              {user.user.address}
                            </Text>
                          </Body>
                        </ListItem>
                      )
                    })}

                    {!this.findMyUser(this.state.selectedOrder).is_deliverer && 
                      <List>
                        <ListItem icon style={{ marginTop: 5 }}>
                          <Left>
                            <Button style={{ backgroundColor: '#2196f3' }}>
                              <Icon active name='cash' />
                            </Button>
                          </Left>
                          <Body>
                            <Text>Amount Paid</Text>
                          </Body>
                          <Right>
                            <Text style={{ color: 'black' }}>${this.findMyUser(this.state.selectedOrder).payment}</Text>
                          </Right>
                        </ListItem>

                        <ListItem icon>
                          <Left>
                            <Button style={{ backgroundColor: '#03a9f4' }}>
                              <Icon active name='pie' />
                            </Button>
                          </Left>
                          <Body>
                            <Text>Percentage Share</Text>
                          </Body>
                          <Right>
                            <Text style={{ color: 'black' }}>{this.findMyUser(this.state.selectedOrder).percentage}%</Text>
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
                            <Text style={{ color: 'black' }}>{this.state.selectedOrder.date}</Text>
                          </Right>
                        </ListItem>
                      </List>
                    }
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

                    {this.findMyUser(this.state.selectedOrder).is_deliverer ?
                      <Button
                        iconLeft
                        success
                        bordered
                        onPress={() => this.completeOrder()}
                      >
                        <Icon name='done-all' />
                        <Text>Completed</Text>
                      </Button>
                      :
                      <Button
                        iconLeft
                        success
                        bordered
                        onPress={() => this.receiveOrder()}
                      >
                        <Icon name='done-all' />
                        <Text>Received</Text>
                      </Button>
                    }
                  </View>
                </View>
              }

              {!this.state.selectedOrderMatched &&
                <View>
                  <Text style={{ fontSize: 20, marginBottom: 10 }}>
                    Status: Unmatched
                  </Text>

                  <List>
                    <ListItem icon style={{ marginTop: 5 }}>
                      <Left>
                        <Button style={{ backgroundColor: '#2196f3' }}>
                          <Icon active name='cash' />
                        </Button>
                      </Left>
                      <Body>
                        <Text>Estimated Cost</Text>
                      </Body>
                      <Right>
                        <Text style={{ color: 'black' }}>
                          ${(this.getProductByID(this.state.selectedOrder.fields.product).fields.price * this.state.selectedOrder.fields.percentage * 0.01).toFixed(2)}
                        </Text>
                      </Right>
                    </ListItem>

                    <ListItem icon>
                      <Left>
                        <Button style={{ backgroundColor: '#03a9f4' }}>
                          <Icon active name='pie' />
                        </Button>
                      </Left>
                      <Body>
                        <Text>Percentage Share</Text>
                      </Body>
                      <Right>
                        <Text style={{ color: 'black' }}>
                          {this.state.selectedOrder.fields.percentage}%
                        </Text>
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
                        <Text style={{ color: 'black' }}>TBD</Text>
                      </Right>
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
                      danger
                      bordered
                      onPress={() => this.cancelOrder()}
                    >
                      <Icon name='trash' />
                      <Text>Cancel</Text>
                    </Button>
                  </View>
                </View>
              }
            </View>
          </Modal>
        }
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
