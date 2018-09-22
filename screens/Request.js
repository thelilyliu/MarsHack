import React, { Component } from 'react'
import { StyleSheet, View, Image, StatusBar } from 'react-native'
import { Container, Header, Content, Button, Text, Icon, Card, CardItem, Body, ListItem, Left, Right, Switch, Title, Form, Item, Label, Input } from 'native-base'

export default class RequestScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container>
        <Content style={{ padding: 15 }}>
          <Form style={{ marginBottom: 15 }}>
            <Item inlineLabel>
              <Label>Item</Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>Store</Label>
              <Input />
            </Item>
          </Form>

          <Button iconLeft block info style={{ marginLeft: 15 }}>
            <Icon name='search' />
            <Text>Search</Text>
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
      </Container>
    )
  }
}

const styles = StyleSheet.create({})