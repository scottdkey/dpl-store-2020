import React from 'react'
import {Form} from 'form-serialize'

class PurchaseRecordForm extends React.Component {
  state={
    order_total: 0,
    email_address: '', 
    first_name: '',
    last_name: '',
    address_one: '',
    address_two:'',
    city: '',
    state: '',
    zip: 0,
    fulfilled: false
  }

  handleSubmit = () => {
    console.log("");
    console.log(this.state);
    Axios.post(`/api/products`, (this.state)).then( res =>{
      this.props.toggleForm();
      this.props.getProducts()
    }).catch( err => {
      console.log(err)
    })
  }


  handleChange = (e, { name, value }) => {
    this.setState({ ...this.state, [name]: value});
   };

  render(){
    return(
      <div>Form</div>
    )
  }
}

export default PurchaseRecordForm