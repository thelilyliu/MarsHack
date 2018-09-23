import axios from 'axios'

const CUSTOMER_ID = '5bba4139-1ee7-4ac2-8e77-72ed3f6b5a18_66293222-e8a4-478f-b69d-fc5598c67e7e'

class Data {
  allProducts = []
  allOrders = []
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

  async getAllOrders() {
    const url = 'http://mars-hack.herokuapp.com/api/get_cust_orders/' + CUSTOMER_ID + '/'

    let res
    try {
      res = await axios.get(url)
    } catch (error) {
      console.error(error)
    }
    console.log(res.data)

    this.allOrders = res.data
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
