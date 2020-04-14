import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
                required
                fluid
                placeholder="First Name"
                value={first_name}
                onChange={this.props.handleChange}
              />
              <Form.Input
                label="Last Name"
                name="last_name"
                required
                fluid
                placeholder="Last Name"
                value={last_name}
                onChange={this.props.handleChange}
              />
            </Form.Group>
            <Form.Input
              label="Email"
              type='email'
              required
              name="email_address"
              placeholder="Email"
              value={email_address}
              onChange={this.props.handleChange}
            />
            <Form.Group widths='equal'>
              <Form.Input
                label="Address Line 1"
                name="address_one"
                required
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
                required
                placeholder="City"
                value={city}
                onChange={this.props.handleChange}
              />
              <Form.Input
                label="State"
                name="state"
                placeholder="State"
                required
                value={state}
                onChange={this.props.handleChange}
              />
              <Form.Input
                label="Zip Code"
                name="zip_code"
                required
                placeholder="Zip Code"
                value={zip_code}
                onChange={this.props.handleChange}
              />
            </Form.Group>
          </Form>
          <div style={style.buttonHolder}>
            <div style={{width:"45%"}}>
            <Link to='/'><div style={style.cancelBtn}>Cancel</div></Link>
            </div>
            <div style={{width:"45%"}}>
            <div style={style.submitBtn} onClick={this.props.handleSubmit}>Place My Order</div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

const style = {
  formHolder: {
    borderRadius: '10px',
    boxShadow: '5px 5px 20px #d1d1d1',
    marginTop: '3%',
    marginBottom: '5%'
  },
  formHeader: {
    backgroundColor: '#ededed',
    padding: '0',
    textAlign: 'center',
    padding: '1%',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px'
  },
  form: {
    padding: '3%'
  },
  submitBtn: {
    color: 'white',
    backgroundColor: '#4901DB',
    borderRadius: '30px',
    marginTop: '3%',
    width:'100%',
    padding:'2%',
    cursor:'pointer'
  },
  cancelBtn: {
    color: '#990000',
    backgroundColor:'lightgrey',
    borderRadius: '30px',
    marginTop: '3%',
    width:'100%',
    padding:'2%',
    cursor:'pointer'

  },
  buttonHolder: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign:'center'
  }
}

export default PurchaseRecordForm

