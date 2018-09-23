import axios from 'axios'

class Data {
  myCustomerID = ''
  myCustomerFirstName = ''
  myCustomerAddress = ''

  allProducts = []
  allMatchedOrders = []
  allUnmatchedOrders = []

  selectedProduct = {}

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

  async getMatchedOrders() {
    const url = 'http://mars-hack.herokuapp.com/api/get_cust_orders_merged/' + this.myCustomerID + '/'

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
    const url = 'http://mars-hack.herokuapp.com/api/get_cust_orders/' + this.myCustomerID + '/'

    let res
    try {
      res = await axios.get(url)
    } catch (error) {
      console.error(error)
    }
    console.log(res.data)

    this.allUnmatchedOrders = res.data
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
    console.log(res.data)

    return res.data
  }
}

const data = new Data()
export default data