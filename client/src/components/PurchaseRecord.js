import React from 'react';
import PurchaseRecordForm from './Forms/PurchaseRecordForm';
import { Button, Header } from 'semantic-ui-react';
import { getAllCartItems , clearCart} from '../modules/CartFunctions';
import { Link } from 'react-router-dom';
import axios from 'axios'

class PurchaseRecord extends React.Component {
  state = {
    order_total: 0,
    email_address: '',
    first_name: '',
    last_name: '',
    address_one: '',
    address_two: '',
    city: '',
    state: '',
    zip_code: '',
    fufilled: false,
    products: [],
    validEmail: false,
    total: 0,
    showForm: true,
  }
  // t.integer "quantity"
  // t.string "size_choice"
  // t.bigint "purchase_records_id", null: false
  // t.bigint "product_id", null: false

  // /api/products/:product_id/purchase_records/:purchase_record_id/purchase_products(.:format)

  handleSubmit = () => {
    if (this.state.validEmail === true) {
      axios.post('/api/purchase_records', (this.state)).then(res => {
        this.createPurchaseProducts(res.data.id)
      }).catch(err => {
        console.log(err)
      })
    }
    else { alert('invalid email') }
  }

  createPurchaseProducts = (id) => {
    let cart = getAllCartItems()
    cart.forEach(item => {
      axios.post(`/api/purchase_records/${id}/purchase_products`,{quantity:item.quantity, size_choice:item.size, product_id:item.object.id})
      .then(res=> {
        this.setState({showForm:false})
      }
        ).catch(e=> console.log(e))
    })
  }

  emailChange = (email) => {
    //need to work on this part
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) { this.setState({ validEmail: true, }) }
  }
  addTotal = () => {
    let cart = getAllCartItems()
    let total = 0
    cart.forEach(item => {
      total += item.object.price
    })
  
    this.setState({total: total})
  }


  getAllCartItems = () => {
    let cart = getAllCartItems()
    return (
      <div style={style.itemsContainer}>
        <div style={style.itemsHeader}><h3>Your Items </h3></div>
        <div style={style.itemsContent}>
          {cart.map((product) => (
            <div key={`product-${product.id}`} style={style.item}>
              <div style={{ margin: '5px' }}>
                <h4 style={{ margin: '0px' }}>{product.object.title}</h4>
                <h6 style={{ margin: '0px', color:'#777' }}>{product.size}</h6>
              </div>
              <div style={{ marginTop: '15px' }}>
                <h3>{`$${product.object.price}`}</h3>
              </div>
            </div>
          ))}
          <div style={style.total}>
            <h2>Total: ${this.state.total}</h2>
          </div>
        </div>
      </div>
    )
  }


  handleChange = (e, { name, value }) => {
    this.setState({ ...this.state, [name]: value });
    if (name === 'email_address') {
      this.emailChange(value)
    }
  };

  renderCompleted = () => {
    return(
      <div style={{...style.itemsContainer, padding:'3%'}}>
        <Header as='h3' textAlign='center'>Thank You For Your Purchase</Header>
        <Link to='/'><Button onClick={()=>clearCart()} style={style.doneBtn}>Done</Button></Link>
      </div>
    )
  }


  render() {
    const { email_address, first_name, last_name, address_one, address_two, city, state, zip_code, showForm } = this.state
    if(this.state.total === 0){
      this.addTotal()
    }
    
    return (
      <>
        <div style={style.headerContainer}>
          <Link to='/'><Button style={style.headerButton}>Continue Shopping</Button></Link>
          <h1 style={style.header}>Checkout</h1>
        </div>
        <div style={style.purchaseContainer}>
          {this.getAllCartItems()}
          {showForm ? 
            <PurchaseRecordForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              email_address={email_address}
              first_name={first_name}
              last_name={last_name}
              address_one={address_one}
              address_two={address_two}
              city={city}
              state={state}
              zip_code={zip_code}
            />
            : this.renderCompleted()}
          <div>
          </div>
        </div>
      </>
    )
  }
}

const style = {
  purchaseContainer: {
    margin: '0 15%'
  },
  itemsContainer: {
    borderRadius: '10px',
    boxShadow: '5px 5px 20px #d1d1d1',
    marginTop: '3%',
  },
  itemsHeader: {
    padding: '0',
    textAlign: 'center',
    padding: '1%',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    backgroundColor: '#e3e3e3',
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
  itemsContent: {
    padding: '3%'
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid grey'
  },
  total: {
    textAlign: 'right',
  },
  doneBtn:{
    color: 'white',
    backgroundColor: '#4901DB',
    borderRadius: '30px',
    width:'100%',
    marginTop:'3%'
  }
}

export default PurchaseRecord
