import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { admin, handleLogout, }, location, } = this.props;
    
    if (admin) {
      return (
        <>
        <Menu.Menu position='left'>
          <Link to="/">
            <Menu.Item
              id="home"
              name="home"
              active={location.pathname === "/"}
            />
          </Link>
          <Link to="/adminpanel">
            <Menu.Item
              id="adminpanel"
              name="adminpanel"
              active={location.pathname === "/adminpanel"}
            />
          </Link>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
        </>
      )
    } else {
      return (
        <>
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item
              id="login"
              name="login"
              active={location.pathname === "/login"}
            />
          </Link>

        </Menu.Menu>
        </>
      );
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary style={{backgroundColor:'#6E54A3'}}>
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);