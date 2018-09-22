import React, { Component } from 'react'
import { StyleSheet, View, Image, StatusBar } from 'react-native'
import { Container, Header, Content, Button, Text, Icon, Card, CardItem, Body, ListItem, Left, Right, Switch, Title, Form, Item, Label, Input, Thumbnail, CheckBox, DatePicker } from 'native-base'
import data from './Data'

export default class RequestScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      startDate: new Date(),
      endDate: new Date()
    }

    this.setStartDate = this.setStartDate.bind(this)
    this.setEndDate = this.setEndDate.bind(this)
  }

  setStartDate(newDate) {
    this.setState({ startDate: newDate })
  }

  setEndDate(newDate) {
    this.setState({ endDate: newDate })
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

          <Text style={{ fontSize: 18, marginTop: 15, marginBottom: 15 }}>Choose Your Share: 30%</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button bordered>
              <Text style={{ paddingLeft: 10, paddingRight: 10 }}>10%</Text>
            </Button>
            <Button bordered>
              <Text style={{ paddingLeft: 10, paddingRight: 10 }}>20%</Text>
            </Button>
            <Button bordered>
              <Text style={{ paddingLeft: 10, paddingRight: 10 }}>30%</Text>
            </Button>
            <Button bordered>
              <Text style={{ paddingLeft: 10, paddingRight: 10 }}>40%</Text>
            </Button>
            <Button bordered>
              <Text style={{ paddingLeft: 10, paddingRight: 10 }}>50%</Text>
            </Button>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, marginBottom: 15 }}>
            <Text style={{ fontSize: 18 }}>Volunteer as a Deliverer: Yes</Text>
            <Switch style={{ marginRight: 10 }} value={true} />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, marginTop: 10 }}>From Date: {this.state.startDate.toString().substr(4, 12)}</Text>
            <DatePicker
              defaultDate={new Date(2018, 9, 22)}
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
            <Text style={{ fontSize: 18, marginTop: 10 }}>To Date: {this.state.endDate.toString().substr(4, 12)}</Text>
            <DatePicker
              defaultDate={new Date(2018, 9, 22)}
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
            onPress={() => this.props.navigation.push('Home')}
          >
            <Icon name='paper-plane' />
            <Text>Submit Request</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
