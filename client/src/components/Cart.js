import React from 'react'
import { getAllCartItems, deleteItemFromCart, putItemInCart } from '../modules/CartFunctions'
import { Button, Segment } from 'semantic-ui-react'

// var product1 = { title: 'newProduct1' }
// var product2 = { title: 'newProduct2' }
// var product3 = { title: 'newProduct3' }
// putItemInCart(product1, 's', 1)
// putItemInCart(product2, 's', 1)
// putItemInCart(product3, 's', 1)


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

  renderCartItems = () => {
    const { cart } = this.state
    if (cart.length > 0) {
      return (
        <div>
          {cart.map(item => {
            return (
              <div key={`cartItem-${item.id}`}>
                <div>
                  {item.object.title}
                  <div>
                    <Button onClick={() => this.deleteCartItem(item.id)}>Remove Item</Button>
                  </div>
                </div>
              </div>
            )
          })}
          <div>
            <Button>Checkout</Button>
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