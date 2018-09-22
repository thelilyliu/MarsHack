import React, { Component } from 'react'
import { StyleSheet, View, Image, StatusBar, Alert } from 'react-native'
import { Container, Header, Content, Button, Text, Icon, Card, CardItem, Body, ListItem, Left, Right, Switch, Title, Form, Item, Label, Input, Thumbnail, CheckBox, DatePicker } from 'native-base'
import data from './Data'

export default class RequestScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      share: 0,
      canDeliver: false,
      startDate: new Date(),
      endDate: new Date()
    }

    this.setShare = this.setShare.bind(this)
    this.setCanDeliver = this.setCanDeliver.bind(this)
    this.setStartDate = this.setStartDate.bind(this)
    this.setEndDate = this.setEndDate.bind(this)
    this.confirmOrder = this.confirmOrder.bind(this)
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

  confirmOrder() {
    let orderObj = {
      "product_id": data.selectedProduct.pk,
      "user_id": '5bba4139-1ee7-4ac2-8e77-72ed3f6b5a18_66293222-e8a4-478f-b69d-fc5598c67e7e',
      "start_date": this.dateToString(this.state.startDate),
      "end_date": this.dateToString(this.state.endDate),
      "percentage": this.state.share,
      "can_deliver": this.state.canDeliver
    }

    let confirmationDetails = `
Price: $${data.selectedProduct.fields.price}
Product: ${data.selectedProduct.fields.name}
Store: ${data.selectedProduct.fields.store}
Share: ${orderObj.percentage}%
Volunteer as a Deliverer: ${ orderObj.can_deliver ? 'Yes' : 'No' }
From Date: ${orderObj.start_date}
To Date: ${orderObj.end_date}`

    Alert.alert(
      'Please Confirm Your Order',
      confirmationDetails,
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => this.placeOrder(orderObj) },
      ]
    )
  }

  placeOrder(orderObj) {
    data.createOrder(orderObj)
    this.props.navigation.push('Home')
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

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button iconLeft transparent style={{ marginLeft: 5 }}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Text style={{ fontSize: 18 }}>Request</Text>
          </Body>
          <Right />
        </Header>

        <Content style={{ padding: 15 }}>
          <Card>
            <CardItem bordered>
              <Left>
                <Thumbnail source={{ uri: 'https://icon2.kisspng.com/20180526/svu/kisspng-costco-gift-card-money-discounts-and-allowances-5b09a473723b03.1047530015273585794679.jpg' }} />
                <Body style={{ flex: 1 }}>
                  <Text style={{ fontSize: 18, marginBottom: 3 }}>{data.selectedProduct.fields.name}</Text>
                  <Text note style={{ fontSize: 15 }}>{data.selectedProduct.fields.store}</Text>
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

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, marginBottom: 15 }}>
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
              defaultDate={new Date(2018, 8, 22)}
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
              defaultDate={new Date(2018, 8, 22)}
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

          <Button
            iconLeft
            block
            style={{ marginTop: 15 }}
            onPress={this.confirmOrder}
          >
            <Icon name='paper-plane' />
            <Text>Confirm Order</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
