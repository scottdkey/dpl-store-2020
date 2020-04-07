import React from 'react'
import { getAllCartItems, deleteItemFromCart, putItemInCart } from '../modules/CartFunctions'
import { Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// var product1 = { title: 'hat', price:10 }
// var product2 = { title: 'shirt' , price:10}
// var product3 = { title: 'hoodie' , price:10}
// putItemInCart(product1, 'small', 1)
// putItemInCart(product2, 'medium', 2)
// putItemInCart(product3, 'large', 4)


class Cart extends React.Component {
  state = {
    cart: []
  }

  deleteCartItem = (id) => {
    deleteItemFromCart(id)
    this.putItemsInCart()
  }
  componentDidMount() {
    this.putItemsInCart()
  }

  putItemsInCart() {
    let cart = getAllCartItems()
    this.setState({ cart: cart })
  }

  addTotalOfProductWithQuantity = (quantity, price) => {
    let total = quantity * price
    return (
      <h3>${total}</h3>
    )
  }

  renderCartItems = () => {
    const { cart } = this.state
    if (cart.length > 0) {
      return (
        <div>
          {cart.map(item => {
            return (
              <div key={`cartItem-${item.id}`}>
                <div>
                  <h1>{item.object.title}</h1>
                  {this.addTotalOfProductWithQuantity(item.quantity, item.object.price)}
                  <h5>{item.size}</h5>
                  <div>
                    <Button onClick={() => this.deleteCartItem(item.id)}>Remove Item</Button>
                  </div>
                </div>
              </div>
            )
          })}
          <div>
            <Button><Link to='purchase-record'>Checkout</Link></Button>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          No items in cart
          <div>
            <Button disabled>Checkout</Button>
          </div>
        </div>)
    }
  }

  render() {
    const { cart } = this.state
    return (
      <>
        <div style={{ border: '1px solid black' }}>
          <Button >Continue Shopping</Button>
          <h1 >My Cart</h1>
        </div>
        {this.renderCartItems()}
      </>
    )
  }
}

export default Cart