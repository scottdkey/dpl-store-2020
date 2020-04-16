import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Icon, Image, Menu, Responsive, Sidebar, Visibility,} from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Beaker from "../images/logo_black.svg";
import Links from '../components/SharedComponents/Links';


const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (
  <Container text >
   
    
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive 
        getWidth={getWidth} 
        minWidth={Responsive.onlyTablet.minWidth}
        >
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
            <Menu className="dpl-blue"
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              inverted 
              size='large'
              style={{margin: 0, border: "none"}}
            >
              <Container fluid >
              <Link to="/" ><Menu.Item>
                  <Image src={Beaker} size="tiny" className="filter-white"></Image>
                </Menu.Item></Link>
                <Menu.Item position='right'>
                <Links />
                {/* <Menu.Item >More<Icon name="dropdown"/></Menu.Item> */}
                <Link to="/cart"><Menu.Item as='a'><Icon name="shopping cart" />Cart </Menu.Item></Link> 
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
        </Visibility>

        {children}
      </Responsive >
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive 
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar 
          as={Menu}
          animation='push'
          inverted className="dpl-blue"
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          style={{margin: 0, border: "none"}}
        >
          <Link to="/" ><Menu.Item>
                  <Image src={Beaker} size="tiny" className="filter-white"></Image>
                </Menu.Item></Link>
          <Menu.Item as='a'>More<Icon name="dropdown"/></Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened} >
            <Container fluid >
              <Menu style={{margin: 0, border: "none"}}
                className="dpl-blue" 
                inverted 
                pointing 
                secondary 
                size='large'
                >
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                 <Link to="/cart"><Menu.Item as='a'><Icon name="shopping cart" />Cart </Menu.Item></Link> 
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          {children}
        </Sidebar.Pusher> 
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer >
    
  </ResponsiveContainer>
);

export default HomepageLayout;