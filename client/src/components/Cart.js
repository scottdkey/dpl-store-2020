import React from 'react'
import { getAllCartItems, deleteItemFromCart, putItemInCart } from '../modules/CartFunctions'
import { Button, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// var product1 = { title: 'Hat', price:20 , id:13, main_image:'https://i.pinimg.com/originals/33/cd/6b/33cd6bc701673e86aadc54e47d2d65ea.jpg'}
// var product2 = { title: 'Shirt' , price:10, id:4, main_image:'https://ae01.alicdn.com/kf/HTB1ClpxqkKWBuNjy1zjq6AOypXa5/Liseaven-T-Shirt-Men-Cotton-T-Shirt-Full-Sleeve-tshirt-Men-Solid-Color-T-shirts-tops.jpg_640x640.jpg'}
// var product3 = { title: 'Hoodie' , price:30, id:10, main_image:'https://shopproclub.com/media/catalog/product/cache/9537d43b9bc5b6785a205b28a3ee3fc1/1/4/143.NAVY.PT04.jpg'}
// var product4 = { title: 'Hat2', price:20 , id:13, main_image:'https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/03a55f74c710453a8699a724016dad6c_9366/Saturday_Hat_Black_BH9346_04_standard.jpg'}
// var product5 = { title: 'Sticker' , price:10, id:4, main_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTukPyZC5Wmnjznx0hW_O6NoisZB9aGKH2Ko1U3-uTSoHrxvuJz&usqp=CAU'}
// var product6 = { title: 'Hoodie2' , price:30, id:10, main_image:'https://gloimg.rglcdn.com/rosegal/pdm-product-pic/Clothing/2019/10/11/source-img/20191011215306_93452.jpg'}
// putItemInCart(product1, 'Small', 1)
// putItemInCart(product2, 'Medium', 2)
// putItemInCart(product3, 'Large', 4)
// putItemInCart(product4, 'Small', 1)
// putItemInCart(product5, 'No Size', 2)
// putItemInCart(product6, 'Large', 4)

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
    this.setState({ total: total })
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

                  <div style={style.photoHolder}>
                    <div style={style.crop}>
                      <Image style={style.photo} src={`${item.object.main_image}`} />
                    </div>
                  </div>

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
            <Link to='purchase-record' style={{ color: 'white' }}><Button style={style.button}>Checkout</Button></Link>
          </div>
        </div>
      )
    }
    else {
      return (
        <div style={style.itemsContainer}>
          <Header as='h1' textAlign='center' style={{ margin: '5%' }}>No Items In Cart</Header>
          <div>
            <Button disabled style={style.buttonDisabled}>Checkout</Button>
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
    color: 'rgba(255,255,255, 0.7)'
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
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: '1%'
  },
  photo: {
    borderRadius: '10px',
    display: 'block',
    minWidth: '100%',
    minHeight: '100%',
    margin: ' auto',
    position: 'absolute',
    top: '-100%',
    right: '-100%',
    bottom: '-100%',
    left: '-100%',
  },
  crop: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  photoHolder: {
    background: '#fff',
    display: 'inline-block',
    verticalAlign: 'top',
    width: '100%',
    height:'250px',
    marginRight: '.5em',
    marginBottom: '.3em',
    borderRadius:'20px',
    overflow:'hidden',
    boxShadow: '0px 3px 10px #cccccc',
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
  item: {
    marginBottom: '5%',
    width: '30%',
  }
}

export default Cart