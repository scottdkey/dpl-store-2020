import React from 'react'
import axios from 'axios'
import PurchaseRecordForm from './Forms/PurchaseRecordForm'
import { Button } from 'semantic-ui-react'
import {getAllCartItems} from '../modules/CartFunctions'

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
    zip_code: 0,
    fufilled: false,
    products: [],
    showForm: false,
    validEmail: false,
  }


  handleSubmit = () => {
    console.log("submit clicked")
    if (this.state.validEmail === true) {
      console.log('submitting')
      // axios.post('/api/purchase_records', (this.state)).then(res => {
      //   this.props.toggleForm();
      //   this.props.getProducts()
      // }).catch(err => {
      //   console.log(err)
      // })
    } 
    else { alert('invalid email') }
  }

  getUserInfo = () => { this.setState({ showForm: true }) }

  emailChange = (email) => {
    //need to work on this part
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) { this.setState({ validEmail: true, }) }
  }

  getAllCartItems = () => {
    let cart = getAllCartItems()
    if(cart === null || cart.length === 0){
      return(
        <div>
        <div>No Items In Your Cart</div>
        <Button disabled onClick={this.getUserInfo}>Continue</Button>
        </div>
      )
    }
    return (
      <div>
        {cart.map((product)=> (
          <div key={`product-${product.id}`}>{product.object.name}</div>
        ))}
        <Button onClick={this.getUserInfo}>Continue</Button>
        
      </div>
    )
  }
  

  handleChange = (e, { name, value }) => {
    this.setState({ ...this.state, [name]: value });
    if (name === 'email_address') {
      this.emailChange(value)
    }
  };

  verifyCart = () => {
    return (
      <div>
        {this.getAllCartItems()}
      </div>
    )
  }


  render() {
    const { email_address, first_name, last_name, address_one, address_two, city, state, zip_code, showForm } = this.state
    return (
      <div>
        {showForm ? <PurchaseRecordForm
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
          : this.verifyCart()}
      </div>
    )
  }
}

export default PurchaseRecord
