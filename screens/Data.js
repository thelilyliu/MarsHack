import axios from 'axios'

class Data {
  allMatchedOrders = []
  allUnmatchedOrders = []
  
  allProducts = []
  selectedProduct = {}

  myCustomer = {
    id: '',
    firstName: '',
    address: ''
  }

  async getMatchedOrders() {
    const url = 'http://mars-hack.herokuapp.com/api/get_cust_orders_merged/' + this.myCustomer.id + '/'

    let res
    try {
      res = await axios.get(url)
    } catch (error) {
      console.error(error)
    }
    console.log(res.data)

    this.allMatchedOrders = res.data
  }

  async getUnmatchedOrders() {
    const url = 'http://mars-hack.herokuapp.com/api/get_cust_orders/' + this.myCustomer.id + '/'

    let res
    try {
      res = await axios.get(url)
    } catch (error) {
      console.error(error)
    }
    console.log(res.data)

    this.allUnmatchedOrders = res.data
  }

  async markOrderComplete(customerID, orderID) {
    const url = 'http://mars-hack.herokuapp.com/api/complete_order/' + customerID + '/' + orderID + '/'

    let res
    try {
      res = await axios.post(url)
    } catch (error) {
      console.error(error)
    }
    console.log(res.data)
  }

  async getAllProducts() {
    const url = 'http://mars-hack.herokuapp.com/api/get_products/'

    let res
    try {
      res = await axios.get(url)
    } catch (error) {
      console.error(error)
    }
    console.log(res.data)

    this.allProducts = res.data
  }

  getFilteredProducts(item, store) {
    item = item.toLowerCase()
    store = store.toLowerCase()
    let productName = ''
    let productStore = ''

    let myProducts = this.allProducts.filter(product => {
      productName = product.fields.name.toLowerCase()
      productStore = product.fields.store.toLowerCase()

      return productName.includes(item) && productStore.includes(store)
    })

    return myProducts
  }

  setSelectedProduct(item) {
    this.selectedProduct = item
  }

  async createOrder(orderObj) {
    const url = 'http://mars-hack.herokuapp.com/api/create_order/'
    let data = orderObj
    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    let res
    try {
      res = await axios.post(url, data, config)
    } catch (error) {
      console.error(error)
    }

    return res.data
  }
}

const data = new Data()
export default data
