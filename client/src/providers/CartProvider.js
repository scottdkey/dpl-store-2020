import React from "react";
import { putItemInCart, deleteItemFromCart, getAllCartItems, clearCart } from '../modules/CartFunctions'

const CartContext = React.createContext();
export const CartConsumer = CartContext.Consumer;

export class CartProvider extends React.Component {
  state = { cart: [] };

  addItemToCart = (item, size) => {
    putItemInCart(item, size, 1)
    let cart = getAllCartItems()
    this.setState({ cart: cart })
  }

  deleteItemFromCart = (id) => {
    deleteItemFromCart(id)
    let cart = getAllCartItems()
    this.setState({ cart: cart })
  }

  clearTheCart = () => {
    clearCart()
    this.setState({
      cart: []
    })
  }

  componentDidMount() {
    let cart = getAllCartItems()
    this.setState({ cart: cart })
  }

  getCart = () => {
    let cart = getAllCartItems()
    return cart
  }


  render() {
    return (
      <CartContext.Provider value={{
        addItemToCart: this.addItemToCart,
        deleteItemFromCart: this.deleteItemFromCart,
        clearTheCart: this.clearTheCart,
        getCart: this.getCart,
      }}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
};