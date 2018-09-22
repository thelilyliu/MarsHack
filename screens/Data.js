import axios from 'axios'

class Data {
  allProducts = []
  selectedProduct = {}

  async getAllProducts() {
    const url = 'http://mars-hack.herokuapp.com/api/get_products'

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
}

const data = new Data()
export default data
