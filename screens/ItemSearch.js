import React, { Component } from 'react'
import { StyleSheet, View, Image, StatusBar } from 'react-native'
import { Container, Header, Content, Button, Text, Icon, Card, CardItem, Body, ListItem, Left, Right, Switch, Title, Form, Item, Label, Input, Thumbnail, Fab } from 'native-base'

export default class ItemSearchScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container>
        <Header style={{ paddingTop : 35}}>
          <Text>Add Item</Text>
        </Header>
        <Content style={{ padding: 15 }}>
          <Form>
            <Item inlineLabel style={{ marginLeft: 10, marginRight: 10 }}>
              <Label>Item</Label>
              <Input />
            </Item>
            <Item inlineLabel style={{ marginLeft: 10, marginRight: 10 }}>
              <Label>Store</Label>
              <Input />
            </Item>
          </Form>

          <Button iconLeft block info style={{ marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 20 }}>
            <Icon name='search' />
            <Text>Search</Text>
          </Button>

          <Card style={{ marginLeft: 10, marginRight: 10 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://icon2.kisspng.com/20180526/svu/kisspng-costco-gift-card-money-discounts-and-allowances-5b09a473723b03.1047530015273585794679.jpg' }} />
                <Body style={{ flex: 1 }}>
                  <Text style={{ marginBottom: 3 }}>Eggs</Text>
                  <Text note style={{ fontSize: 15 }}>Costco Wholesale</Text>
                </Body>
              </Left>
              <Text style={{ fontSize: 18 }}>$16.80</Text>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: 'https://cdn.modernfarmer.com/wp-content/uploads/2018/04/eggcarton.jpg' }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Body style={{ padding: 5 }}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>

         <View>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="menu" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="home" onPress={() => this.props.navigation.push('Home')}/>
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="pulse" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="add" />
            </Button>
          </Fab>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
