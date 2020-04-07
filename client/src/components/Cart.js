import React from 'react'
import { getAllCartItems, deleteItemFromCart } from '../modules/CartFunctions'


class Cart extends React.Component {



  renderCartItems = () => {
    let cart = getAllCartItems()
    if (cart.length !== 0) {
      cart.map(item => {
        return (<div>
          {item.object.title}
        </div>)
      })
    }
    else{return(<div>No items in cart</div>)}
  }

  render() {
    return (
      <div>
        <h1>Cart</h1>
        {this.renderCartItems()}
      </div>
    )
  }
}

export default Cart