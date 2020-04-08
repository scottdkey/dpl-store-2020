import React from 'react'
import { getAllCartItems, deleteItemFromCart, putItemInCart } from '../modules/CartFunctions'
import { Button, Segment, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// var product1 = { title: 'Hat', price:20 }
// var product2 = { title: 'Shirt' , price:10}
// var product3 = { title: 'Hoodie' , price:30}
// putItemInCart(product1, 'small', 1)
// putItemInCart(product2, 'medium', 2)
// putItemInCart(product3, 'large', 4)


class Cart extends React.Component {
  state = {
    cart: [],
    total: 0
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
    if (cart.length > 0) {
      this.addTotal(cart)
    }
  }

  addTotal = (cart) => {
    let total = 0
    cart.forEach(item => {
      total += item.object.price
    })
    this.setState({total: total})
  }


  renderCartItems = () => {
    const { cart, total } = this.state
    if (cart.length > 0) {
      return (
        <div style={style.itemsContainer}>
          <div style={style.cartContainer}>
            {cart.map(item => {
              return (
                <div style={style.item} key={`cartItem-${item.id}`}>
                  <div style={style.photo}></div>

                  <div style={style.informationContainer}>
                    <div>
                      <h3 style={{ margin: '0px' }}>{item.object.title}</h3>
                      <h6 style={{ margin: '0px', color: '#444' }}>{item.size}</h6>
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
            <Header as='h1' textAlign='center'>Total: ${total}</Header>
            <Button style={style.button}><Link to='purchase-record' style={{ color: 'white' }}>Checkout</Link></Button>
          </div>
        </div>
      )
    }
    else {
      return (
        <div style={style.itemsContainer}>
          <Header as='h1' textAlign='center' style={{margin:'5%'}}>No items in cart</Header>
          <div>
            <Button disabled style={style.buttonDisabled}>Checkout</Button>
          </div>
        </div>)
    }
  }

  render() {
    const { cart } = this.state
    return (
      <div>
        <div style={style.headerContainer}>
          <Button style={style.headerButton}><Link style={{color: 'rgba(255,255,255, 0.7)'}}to='/'>Continue Shopping</Link></Button>
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
  buttonDisabled: {
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
    fontSize: '12px',
  },
  header: {
    margin: '0px'
  },
  itemsContainer: {
    margin: '2% 15%',
  },
  cartContainer: {
    display: 'flex',
    margin: '0px',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '5%'
  },
  photo: {
    width: '200px',
    height: '200px',
    backgroundColor: 'whitesmoke',
    borderRadius: '20px',
    boxShadow: '0px 3px 10px #cccccc'
  },
  informationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5%'
  },
  removeButton: {
    width: '100%',
    backgroundColor: 'whitesmoke',
    color: 'red',
    marginTop: '2%'
  },
  item:{
    marginBottom:'5%'
  }
}

export default Cart