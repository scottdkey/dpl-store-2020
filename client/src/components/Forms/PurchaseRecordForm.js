import React from 'react'
import { Form } from 'semantic-ui-react'

class PurchaseRecordForm extends React.Component {

  render() {
    const { email_address, first_name, last_name, address_one, address_two, city, state, zip_code } = this.props
    return (
      <div>
        <h1 style={{textAlign:'center'}}>Please Fill Out The Form With Your Information</h1>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Input
            label="Email"
            autoFocus
            type='email'
            name="email_address"
            placeholder="Email"
            value={email_address}
            onChange={this.props.handleChange}
          />
          <Form.Input
            label="First Name"
            name="first_name"
            placeholder="First Name"
            value={first_name}
            onChange={this.props.handleChange}
          />
          <Form.Input
            label="Last Name"
            name="last_name"
            placeholder="Last Name"
            value={last_name}
            onChange={this.props.handleChange}
          />
          <Form.Input
            label="Address Line 1"
            name="address_one"
            placeholder="Address Line 1"
            value={address_one}
            onChange={this.props.handleChange}
          />
          <Form.Input
            label="Address Line 2"
            name="address_two"
            placeholder="Address Line 2"
            value={address_two}
            onChange={this.props.handleChange}
          />
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
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PurchaseRecordForm

