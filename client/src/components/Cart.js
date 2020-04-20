import React from 'react'
import { getAllCartItems, deleteItemFromCart, } from '../modules/CartFunctions'
import { Button, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { CartConsumer, } from "../providers/CartProvider";
import {style, mobile} from './SharedComponents/CartStyle'

class Cart extends React.Component {
  state = {
    cart: [],
    total: 0,
    pictureHeight: ((window.innerWidth)/5.5),
    isMobile: false,
    mobileHeight: ((window.innerWidth)/2.2)
  }

  deleteCartItem = (id) => {
    const {auth:{deleteItemFromCart,}} = this.props
    deleteItemFromCart(id)
    this.putItemsInCart()
  }

  componentDidMount() {
    this.putItemsInCart()
    this.setState({isMobile: window.innerWidth < 950})
    window.addEventListener('resize', this.handleResize)
  }
  handleResize=() =>{
    this.setState({
      pictureHeight: ((window.innerWidth)/5.5),
      isMobile: window.innerWidth < 950,
      mobileHeight: ((window.innerWidth)/2.2)

    })
  }

  putItemsInCart() {
    const {auth:{getCart}} = this.props
    let cart = getCart()
    this.setState({ cart: cart })
    if (cart.length > 0) {
      this.addTotal(cart)
    }
  }

  addTotal = (cart) => {
    let total = 0
    cart.forEach(item => {
      total += item.object.price
    })
    this.setState({ total: total.toFixed(2) })
  }

  renderCartItems = () => {
    const { cart, total ,pictureHeight, isMobile, mobileHeight} = this.state
    if (cart.length > 0) {
      return (
        <div style={style.itemsContainer}>
          <div style={style.cartContainer}>
            {cart.map(item => {
              let sizeColor = ''
              if (item.size === 'No Size') { sizeColor = 'white' } else { sizeColor = '#777'}
              return (
                <>
                <div style={isMobile ? mobile.item : style.item} key={`cartItem-${item.id}`}>
                  

                  <div style={isMobile ? {...style.photoHolder, height: mobileHeight}: {...style.photoHolder, height: pictureHeight}} >
                    <div style={style.crop}>
                      <Image style={style.photo} src={`${item.object.main_image}`} />
                    </div>
                  </div>

                  <div style={style.informationContainer}>
                    <div>
                      <h3 style={{ margin: '0px',}}>{item.object.title}</h3>
                      <h6 style={{ margin: '0px', color: sizeColor }}>{item.size}</h6>
                    </div>
                    <div>
                      <h1>${item.object.price}</h1>
                    </div>
                  </div>
                  <div>
                    <div style={style.removeButton} onClick={() => this.deleteCartItem(item.id)}>Remove</div>
                  </div>
                </div>
                </>
              )
            })}
          </div>

          <div style={{textAlign:'center'}}>
            <Header as='h1' textAlign='center'>Total: ${total}</Header>
              <Link to='purchase-record' style={{color: 'white' }}><div style={style.button}>Checkout</div></Link>
          </div>
        </div>
      )
    }
    else {
      return (
        <div style={style.itemsContainer}>
          <Header as='h1' textAlign='center' style={{ margin: '5%' }}>No Items In Cart</Header>
          <div style={{textAlign:'center'}}>
            <div style={style.buttonDisabled}>Checkout</div>
          </div>
        </div>)
    }
  }

  render() {
    return (
      <div>
        <div style={style.headerContainer}>

          <Link to='/'><Button style={style.headerButton}>Continue Shopping</Button></Link>
          <h1 style={style.header}>My Cart</h1>
        </div>
        {this.renderCartItems()}
      </div>
    )
  }
}

export class ConnectedCart extends React.Component {
  render() {
    return (
      <CartConsumer> 
        { auth => 
          <Cart { ...this.props } auth={auth} />
        }
      </CartConsumer>
    )
  }
}



export default ConnectedCart
