import React, { Component } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Container, Header, Content, Button, Text, Icon, Card, CardItem, Body, Left, Right, Form, Item, Label, Input, Thumbnail, Picker } from 'native-base'
import data from './Data'

export default class FindItemScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      searched: false,
      item: '',
      store: 'Costco Wholesale',
      filteredProducts: []
    }

    this.setItem = this.setItem.bind(this)
    this.setStore = this.setStore.bind(this)
    this.filterProducts = this.filterProducts.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
  }

  setItem(newItem) {
    this.setState({ item: newItem })
  }

  setStore(newStore) {
    this.setState({ store: newStore })
  }

  filterProducts() {
    this.setState({
      searched: true,
      filteredProducts: data.getFilteredProducts(this.state.item, this.state.store)
    })
  }

  selectProduct(product) {
    data.setSelectedProduct(product)
    this.props.navigation.push('Request')
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
            <Text style={{ fontSize: 18 }}>Find Item</Text>
          </Body>
          <Right />
        </Header>

        <Content style={{ padding: 15 }}>
          <Form>
            <Item inlineLabel style={{ marginLeft: 10, marginRight: 10 }}>
              <Label>Item</Label>
              <Input onChangeText={this.setItem} style={{ paddingLeft: 22 }} />
            </Item>
            <Item inlineLabel style={{ marginLeft: 10, marginRight: 10 }}>
              <Label>Store</Label>
              <Picker
                note
                mode='dropdown'
                style={{ width: 300 }}
                selectedValue={this.state.store}
                onValueChange={this.setStore}
              >
                <Picker.Item label='Costco Wholesale' value='Costco Wholesale' />
                <Picker.Item label='Walmart' value='Walmart' />
                <Picker.Item label='Loblaws' value='Loblaws' />
                <Picker.Item label='Fortinos' value='Fortinos' />
                <Picker.Item label='Sobeys' value='Sobeys' />
              </Picker>
            </Item>
          </Form>

          <Button
            iconLeft
            block
            info
            style={{ marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 20 }}
            onPress={this.filterProducts}
          >
            <Icon name='search' />
            <Text>Search</Text>
          </Button>

          {this.state.searched && this.state.filteredProducts.map(product => {
            return (
              <Card key={product.pk} style={{ marginBottom: 15 }}>
                <CardItem bordered>
                  <Left>
                    <Thumbnail source={{ uri: 'https://icon2.kisspng.com/20180526/svu/kisspng-costco-gift-card-money-discounts-and-allowances-5b09a473723b03.1047530015273585794679.jpg' }} />
                    <Body style={{ flex: 1 }}>
                      <Text style={{ fontSize: 18, marginBottom: 3 }}>{product.fields.name}</Text>
                      <Text style={{ fontSize: 15, color: '#757575' }}>{product.fields.store}</Text>
                    </Body>
                  </Left>
                  <Text style={{ fontSize: 18 }}>${product.fields.price}</Text>
                </CardItem>
                <CardItem cardBody bordered>
                  <Image
                    source={{ uri: product.fields.image_url }}
                    style={{ height: 200, width: null, flex: 1 }}
                  />
                </CardItem>
                <CardItem bordered>
                  <Body style={{ padding: 5 }}>
                    <Text>{product.fields.description}</Text>
                    <Button
                      iconLeft
                      bordered
                      style={{ marginTop: 15, marginBottom: 5 }}
                      onPress={() => this.selectProduct(product)}
                    >
                      <Icon name='basket' />
                      <Text>Select Item</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            )
          })}

          <View style={{ height: 20 }} />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
