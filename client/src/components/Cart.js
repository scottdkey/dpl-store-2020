import React from 'react'
import { getAllCartItems, deleteItemFromCart, } from '../modules/CartFunctions'
import { Button, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { CartConsumer, } from "../providers/CartProvider";
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
    total: 0,
    pictureHeight: ((window.innerWidth)/5.5)
  }

  deleteCartItem = (id) => {
    const {auth:{deleteItemFromCart,}} = this.props
    deleteItemFromCart(id)
    this.putItemsInCart()
  }

  componentDidMount() {
    this.putItemsInCart()
    window.addEventListener('resize', this.handleResize)
  }
  handleResize=() =>{
    this.setState({
      pictureHeight: ((window.innerWidth)/5.5)
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
    const { cart, total ,pictureHeight} = this.state
    if (cart.length > 0) {
      return (
        <div style={style.itemsContainer}>
          <div style={style.cartContainer}>
            {cart.map(item => {
              let sizeColor = ''
              if (item.size === 'No Size') { sizeColor = 'white' } else { sizeColor = '#777'}
              return (
                <div style={style.item} key={`cartItem-${item.id}`}>

                  <div style={{...style.photoHolder, height:pictureHeight}} >
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

const style = {
  button: {
    color: 'white',
    backgroundColor: '#4901DB',
    borderRadius: '30px',
    width: '100%',
    padding:'2%'
  },
  buttonDisabled: {
    color: 'grey',
    backgroundColor: 'lightgrey',
    borderRadius: '30px',
    width: '100%',
    padding:'2%'
  },
  headerContainer: {
    backgroundColor: '#4901DB',
    color: 'white',
    padding: '2% 2%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  headerButton: {
    backgroundColor: 'rgba(0,0,0, 0.13)',
    color: 'rgba(255,255,255, 0.7)',
    fontSize: '1em'
  },
  header: {
    margin: '0px',
    fontSize: '2em'
  },
  itemsContainer: {
    margin: '3% 20%',
    marginBottom:'10%',
  },
  cartContainer: {
    display: 'flex',
    margin: '0px',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '1%'
  },
  photo: {
    // borderRadius: '10px',
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
    marginRight: '.5em',
    marginBottom: '.3em',
    borderRadius: '5px',
    overflow: 'hidden',
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
    color: '#990000',
    marginTop: '2%',
    padding:'2%',
    textAlign:'center',
    borderRadius:'5px ',
    cursor:'pointer'
  },
  item: {
    width: '30%',
    margin:'1%'
  }
}


export default ConnectedCart
