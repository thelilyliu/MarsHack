import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Content, Button, Text, Icon, Card, CardItem, Body, Left, Right, Switch, Thumbnail, DatePicker } from 'native-base'
import Modal from 'react-native-modal'
import data from './Data'

export default class RequestScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      share: 0,
      canDeliver: false,
      startDate: new Date(),
      endDate: new Date(),
      orderObj: {},
      showModal: false
    }

    this.setShare = this.setShare.bind(this)
    this.setCanDeliver = this.setCanDeliver.bind(this)
    this.setStartDate = this.setStartDate.bind(this)
    this.setEndDate = this.setEndDate.bind(this)
    this.reviewOrder = this.reviewOrder.bind(this)
    this.dateToString = this.dateToString.bind(this)
  }

  setShare(newShare) {
    this.setState({ share: newShare })
  }

  setCanDeliver(newDeliverValue) {
    this.setState({ canDeliver: newDeliverValue })
  }

  setStartDate(newDate) {
    this.setState({ startDate: newDate })
  }

  setEndDate(newDate) {
    this.setState({ endDate: newDate })
  }

  reviewOrder() {
    this.setState({
      orderObj: {
        "product_id": data.selectedProduct.pk,
        "user_id": data.myCustomer.id,
        "start_date": this.dateToString(this.state.startDate),
        "end_date": this.dateToString(this.state.endDate),
        "percentage": this.state.share,
        "can_deliver": this.state.canDeliver
      },
      showModal: true
    })
  }

  async placeOrder() {
    await data.createOrder(this.state.orderObj)
    
    setTimeout(() => {
      data.getUnmatchedOrders()
    }, 1000)
    
    setTimeout(() => {
      this.toggleModal()
      this.props.navigation.navigate('Home')
    }, 1000)
  }

  dateToString(date) {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    if (month < 10) {
      month = '0' + month
    }

    return year + '-' + month + '-' + day
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
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Text style={{ fontSize: 18 }}>Request</Text>
          </Body>
          <Right>
            <Text style={{ fontSize: 18, marginRight: 5 }}>{data.myCustomer.firstName}</Text>
          </Right>
        </Header>

        <Content style={{ padding: 15 }}>
          <Card>
            <CardItem bordered>
              <Left>
                <Thumbnail source={{ uri: 'https://icon2.kisspng.com/20180526/svu/kisspng-costco-gift-card-money-discounts-and-allowances-5b09a473723b03.1047530015273585794679.jpg' }} />
                <Body style={{ flex: 1 }}>
                  <Text style={{ fontSize: 18, marginBottom: 3 }}>{data.selectedProduct.fields.name}</Text>
                  <Text style={{ fontSize: 15, color: '#757575' }}>{data.selectedProduct.fields.store}</Text>
                </Body>
              </Left>
              <Text style={{ fontSize: 18 }}>${data.selectedProduct.fields.price}</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={{ padding: 5 }}>
                <Text>{data.selectedProduct.fields.description}</Text>
              </Body>
            </CardItem>
          </Card>

          <Text style={{ fontSize: 18, marginTop: 15, marginBottom: 15 }}>Choose Your Share:
            <Text style={{ fontSize: 18, color: '#0d47a1' }}> {this.state.share}%</Text>
          </Text>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button
              bordered={this.state.share !== 10}
              onPress={() => this.setShare(10)}  
            >
              <Text style={{ paddingLeft: 10, paddingRight: 10 }}>10%</Text>
            </Button>
            <Button
              bordered={this.state.share !== 20}
              onPress={() => this.setShare(20)} 
            >
              <Text style={{ paddingLeft: 10, paddingRight: 10 }}>20%</Text>
            </Button>
            <Button
              bordered={this.state.share !== 30}
              onPress={() => this.setShare(30)}
            >
              <Text style={{ paddingLeft: 10, paddingRight: 10 }}>30%</Text>
            </Button>
            <Button
              bordered={this.state.share !== 40}
              onPress={() => this.setShare(40)}
            >
              <Text style={{ paddingLeft: 10, paddingRight: 10 }}>40%</Text>
            </Button>
            <Button
              bordered={this.state.share !== 50}
              onPress={() => this.setShare(50)}
            >
              <Text style={{ paddingLeft: 10, paddingRight: 10 }}>50%</Text>
            </Button>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 10 }}>
            <Text style={{ fontSize: 18 }}>Volunteer as a Deliverer:
              <Text style={{ fontSize: 18, color: '#0d47a1' }}> {this.state.canDeliver ? 'Yes' : 'No'}</Text>
            </Text>

            <Switch
              style={{ marginRight: 10 }}
              value={this.state.canDeliver}
              onValueChange={value => this.setCanDeliver(value)} />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, marginTop: 10 }}>From Date:
              <Text style={{ fontSize: 18, color: '#0d47a1' }}> {this.state.startDate.toString().substr(4, 12)}</Text>
            </Text>

            <DatePicker
              defaultDate={new Date(2018, 8, 23)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2019, 12, 31)}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText='Select Date'
              textStyle={{ color: 'green' }}
              placeHolderTextStyle={{ color: '#d3d3d3' }}
              onDateChange={this.setStartDate}
            />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, marginTop: 10 }}>To Date:
              <Text style={{ fontSize: 18, color: '#0d47a1' }}> {this.state.endDate.toString().substr(4, 12)}</Text>
            </Text>

            <DatePicker
              defaultDate={new Date(2018, 8, 23)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2019, 12, 31)}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText='Select Date'
              textStyle={{ color: 'green' }}
              placeHolderTextStyle={{ color: '#d3d3d3' }}
              onDateChange={this.setEndDate}
            />
          </View>

          <Text style={{ fontSize: 18, marginTop: 10 }}>Address:
            <Text style={{ fontSize: 18, color: '#0d47a1' }}> {data.myCustomer.address}</Text>
          </Text>

          <Button
            iconLeft
            block
            style={{ marginTop: 30 }}
            onPress={this.reviewOrder}
          >
            <Icon name='paper-plane' />
            <Text>Review Order</Text>
          </Button>

          <View style={{ height: 20 }} />
        </Content>
      
        <Modal isVisible={this.state.showModal}>
          <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <View style={{ borderBottomColor: '#616161', borderBottomWidth: 0.5, marginBottom: 10 }}>
              <Text style={{ fontSize: 20, marginBottom: 10 }}>Confirm Your Order Details</Text>
            </View>
            
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Product:
              <Text style={{ fontSize: 18, color: '#0d47a1' }}> {data.selectedProduct.fields.name}</Text>
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Store:
              <Text style={{ fontSize: 18, color: '#0d47a1' }}> {data.selectedProduct.fields.store}</Text>
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Share:
              <Text style={{ fontSize: 18, color: '#0d47a1' }}> {this.state.orderObj.percentage}%</Text>
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Volunteer as a Deliverer:
              <Text style={{ fontSize: 18, color: '#0d47a1' }}> { this.state.orderObj.can_deliver ? 'Yes' : 'No' }</Text>
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>From Date:
              <Text style={{ fontSize: 18, color: '#0d47a1' }}> {this.state.orderObj.start_date}</Text>
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>To Date:
              <Text style={{ fontSize: 18, color: '#0d47a1' }}> {this.state.orderObj.end_date}</Text>
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>Address:
              <Text style={{ fontSize: 18, color: '#0d47a1' }}> {data.myCustomer.address}</Text>
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 5, marginTop: 5, fontWeight: 'bold' }}>Your Estimated Cost:
              <Text style={{ fontSize: 18, color: '#0d47a1' }}> ${ (data.selectedProduct.fields.price * this.state.orderObj.percentage * 0.01).toFixed(2) }</Text>
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <Button
                iconLeft
                light
                onPress={() => this.toggleModal()}
              >
                <Icon name='close' />
                <Text>Cancel</Text>
              </Button>
              <Button
                iconLeft
                success
                onPress={() => this.placeOrder()}
              >
                <Icon name='done-all' />
                <Text>Confirm</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
