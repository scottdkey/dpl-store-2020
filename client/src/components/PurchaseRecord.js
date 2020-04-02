import React from 'react'
import Axios from 'axios'
import PurchaseRecordForm from './Forms/PurchaseRecordForm'
import { Button } from 'semantic-ui-react'

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
    showForm: false
  }


  handleSubmit = () => {
    console.log("submit clicked")
    // Axios.post('/api/purchase_records', (this.state)).then(res => {
    //   this.props.toggleForm();
    //   this.props.getProducts()
    // }).catch(err => {
    //   console.log(err)
    // })
  }

  getUserInfo = () => {this.setState({showForm: true})}


  handleChange = (e, { name, value }) => {
    this.setState({ ...this.state, [name]: value });
  };

  verifyCart =() => {
    return(
      <div>
        <h1>Your Items</h1>
        <Button onClick={this.getUserInfo}>Looks Good</Button>
      </div>
    )
  }


  render() {
    const {email_address, first_name, last_name, address_one, address_two, city, state, zip_code, showForm} = this.state
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