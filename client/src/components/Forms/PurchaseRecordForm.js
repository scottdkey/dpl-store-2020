import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class PurchaseRecordForm extends React.Component {

  render() {
    const { email_address, first_name, last_name, address_one, address_two, city, state, zip_code } = this.props
    return (
      <div style={style.formHolder}>
        <div style={style.formHeader}>
          <h3 >Please Fill Out The Form With Your Information</h3>
        </div>
        <div style={style.form}>
          <Form onSubmit={this.props.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input
                label="First Name"
                name="first_name"
                autoFocus
                fluid
                placeholder="First Name"
                value={first_name}
                onChange={this.props.handleChange}
              />
              <Form.Input
                label="Last Name"
                name="last_name"
                fluid
                placeholder="Last Name"
                value={last_name}
                onChange={this.props.handleChange}
              />
            </Form.Group>
            <Form.Input
              label="Email"
              type='email'
              name="email_address"
              placeholder="Email"
              value={email_address}
              onChange={this.props.handleChange}
            />
            <Form.Group widths='equal'>
            <Form.Input
              label="Address Line 1"
              name="address_one"
              placeholder="Address Line 1"
              value={address_one}
              fluid
              onChange={this.props.handleChange}
            />
            <Form.Input
              label="Address Line 2"
              name="address_two"
              placeholder="Address Line 2"
              fluid
              value={address_two}
              onChange={this.props.handleChange}
            />
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Input
              label="City"
              name="city"
              placeholder="City"
              value={city}
              onChange={this.props.handleChange}
            />
            <Form.Input
              label="State"
              name="state"
              placeholder="State"
              value={state}
              onChange={this.props.handleChange}
            />
            <Form.Input
              label="Zip Code"
              name="zip_code"
              placeholder="Zip Code"
              value={zip_code}
              onChange={this.props.handleChange}
            />
            </Form.Group>
          </Form>
          <div style={style.buttonHolder}>
          <Button style={style.cancelBtn}>Cancel</Button>
           <Button style={style.submitBtn} onClick={this.props.handleSubmit}>Place My Order</Button>
          </div>
        </div>
      </div>
    )
  }
}

const style = {
  formHolder: {
    borderRadius: '10px',
    boxShadow: '5px 5px 20px #d1d1d1',
    marginTop:'3%',
    marginBottom:'5%'
  },
  formHeader: {
    backgroundColor: '#ededed',
    padding: '0',
    textAlign: 'center',
    padding: '2%',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px'
  },
  form: {
    padding: '10px'
  },
  submitBtn:{
    color: 'white',
    backgroundColor: '#4901DB',
    borderRadius: '30px',
    width:'45%',
    marginTop:'3%'
  },
  cancelBtn:{
    color: '#d40808',
    borderRadius: '30px',
    marginTop:'3%',
    width:'45%'
  },
  buttonHolder:{
    display:'flex',
    justifyContent:'space-between'
  }
}

export default PurchaseRecordForm

