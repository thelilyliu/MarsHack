import React, { Component } from 'react'
import { StyleSheet, View, Image, StatusBar } from 'react-native'
import { Container, Header, Content, Button, Text, Icon, Card, CardItem, Body, ListItem, Left, Right, Switch, Title, Form, Item, Label, Input, Thumbnail, CheckBox } from 'native-base'

export default class RequestScreen extends Component {
  static navigationOptions = {
    title: 'Request',
    header: null
  }

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
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Text style={{ fontSize: 20 }}>Request</Text>
          </Body>
          <Right />
        </Header>

        <Content style={{ padding: 15 }}>
          <Card>
            <CardItem bordered>
              <Left>
                <Thumbnail source={{ uri: 'https://icon2.kisspng.com/20180526/svu/kisspng-costco-gift-card-money-discounts-and-allowances-5b09a473723b03.1047530015273585794679.jpg' }} />
                <Body style={{ flex: 1 }}>
                  <Text style={{ marginBottom: 3 }}>Eggs</Text>
                  <Text note style={{ fontSize: 15 }}>Costco Wholesale</Text>
                </Body>
              </Left>
              <Text style={{ fontSize: 18 }}>$16.80</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={{ padding: 5 }}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
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
            <Switch value={true} />
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
