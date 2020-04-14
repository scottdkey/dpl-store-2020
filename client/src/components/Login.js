import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom'

class Login extends React.Component {
  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, } = this.state;

    return (
      <div>
        <div style={style.headerContainer}>
          <h1 style={style.header}>Admin Login</h1>
        </div>
        <div style={style.formContainer}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              label="Email"
              autoFocus
              required
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
            <Form.Input
              label="Password"
              required
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
          <div style={style.buttonHolder}>
            <div style={{width:"45%"}}>
            <Link to='/'><div style={style.cancelBtn}>Cancel</div></Link>
            </div>
            <div style={{width:"45%"}}>
            <div style={style.submitBtn} onClick={this.handleSubmit}>Login</div>
            </div>
          </div>
          </Form>
        </div>
      </div>
    )
  }
}

const style = {
  formContainer: {
    margin: '2% 10%',
    marginBottom: '4%',
    boxShadow: '0px 3px 10px #cccccc',
    borderRadius: '20px',
    padding: '2%'
  },
  headerContainer: {
    backgroundColor: '#4901DB',
    color: 'white',
    padding: '20px 50px',
    textAlign: 'right'
  },
  header: {
    margin: '0px'
  },
  btnHolder: {
    display: 'flex',
    justifyContent: 'space-between'
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

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}