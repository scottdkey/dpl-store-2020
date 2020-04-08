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


  renderCartItems = () => {
    const { cart } = this.state
    if (cart.length > 0) {
      return (
        <div style={style.itemsContainer}>
          <div style={style.cartContainer}>
          {cart.map(item => {
            return (
              <div key={`cartItem-${item.id}`}>
                <div style={style.photo}></div>

                <div  style={style.informationContainer}>
                  <div>
                    <h3 style={{margin:'0px'}}>{item.object.title}</h3>
                    <h6 style={{margin:'0px', color:'#444'}}>{item.size}</h6>
                  </div>

                  <div>
                    <h1>${item.object.price}</h1>
                  </div>
                </div>

                <div>
                  <Button style={style.removeButton} onClick={() => this.deleteCartItem(item.id)}>Remove Item</Button>
                </div>
              </div>
            )
          })}
          </div>
          <div>
            <Button style={style.button}><Link to='purchase-record' style={{ color: 'white' }}>Checkout</Link></Button>
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
      <div>
        <div style={style.headerContainer}>
          <Button style={style.headerButton}>Continue Shopping</Button>
          <h1 style={style.header}>My Cart</h1>
        </div>
        {this.renderCartItems()}
      </div>
    )
  }
}

const style = {
  button: {
    color: 'white',
    backgroundColor: '#4901DB',
    borderRadius: '30px',
    width: '100%',
  },
  headerContainer: {
    backgroundColor: '#4901DB',
    color: 'white',
    padding: '20px 50px',
    display: 'flex',
    justifyContent: 'space-between'

  },
  headerButton: {
    backgroundColor: 'rgba(0,0,0, 0.13)',
    color: 'rgba(255,255,255, 0.7)',
    fontSize: '12px',
  },
  header: {
    margin: '0px'
  },
  itemsContainer:{
    margin:'2% 15%',
  },
  cartContainer:{
    display:'flex',
    margin:'0px',
    alignItems:'stretch',
    justifyContent:'space-between',
    flexWrap:'wrap',
    marginBottom: '5%'
  },
  photo:{
    width: '200px',
    height: '200px',
    backgroundColor: 'whitesmoke',
    borderRadius: '20px',
    boxShadow:'0px 3px 10px #cccccc'
  },
  informationContainer:{
    display:'flex',
    justifyContent:'space-between',
    marginTop:'5%'
  },
  removeButton:{
    width:'100%',
    backgroundColor:'whitesmoke',
    color:'red',
    marginTop:'2%'
  }
}

export default Cart