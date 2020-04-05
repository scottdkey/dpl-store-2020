
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Grid, Header, Icon, Image, Menu, Responsive, Segment, Sidebar, Visibility, Dropdown, } from 'semantic-ui-react';
import TShirts from '../images/T-Shirts.jpg';
import Hoodies from '../images/Hoodies.jpg';
import Hats from '../images/Hat.jpg';
import Stickers from '../images/Stickers.jpg';
import Featured from '../images/blank.png';
import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';


const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (
  <Container text >
    <Header
      as='h1'
      content='DevPoint Store'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'thick',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        textAlign: 'left'
      }}
    />
    <Header
      as='h4'
      content='Find something you love.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        textAlign: 'left'
      }}
    />

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
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container >
                <Link to="/" ><Menu.Item active>.SHOP</Menu.Item></Link>
                <Menu.Item position='right'>
                  <Link to="/allmerchandise" ><Menu.Item as='a'>All Products</Menu.Item></Link>
                  <Link to="/hoodies" ><Menu.Item>Hoodies</Menu.Item></Link>
                  <Link to="/hats" ><Menu.Item as='a'>Hats </Menu.Item></Link>
                  <Dropdown text='More' pointing className='link item'>
                    <Dropdown.Menu>
                    <Dropdown.Item as='a' href='/tshirts'>Tshirts</Dropdown.Item>
                      <Dropdown.Item as='a' href='/stickers'>Stickers</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Menu.Item as='a'><Icon name="shopping cart" />Cart </Menu.Item>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
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
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
           <Link to="/" ><Menu.Item active>.SHOP</Menu.Item></Link>
          <Link to="/allmerchandise" ><Menu.Item as='a'>All Products</Menu.Item></Link>
          <Link to="/hoodies" ><Menu.Item as='a'>Hoodies</Menu.Item></Link>
          <Link to="/hats" ><Menu.Item as='a'>Hats</Menu.Item></Link>
          <Dropdown text='More' pointing className='link item'>
                    <Dropdown.Menu>
                    <Dropdown.Item as='a' href='/tshirts'>Tshirts</Dropdown.Item>
                      <Dropdown.Item as='a' href='/stickers'>Stickers</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened} >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container >
              <Menu inverted pointing secondary size='large' >
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Menu.Item as='a'><Icon name="shopping cart" />Cart </Menu.Item>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

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
   <br/>
   <br/>
      <Grid >
        <Header as='h3'>CATEGORIES</Header>
        <Grid.Row columns={4}>
          <Grid.Column>
            <Link to="/tshirts" ><Image size="medium" rounded src={TShirts} fluid /></Link>
            <h4 align="center">T Shirts</h4>
          </Grid.Column>
          <Grid.Column>
            <Link to="/hoodies" ><Image size="medium" rounded src={Hoodies} /></Link>
            <h4 align="center">Jackets & Hoodies </h4>
          </Grid.Column>
          <Grid.Column>
            <Link to="/hats" > <Image size="medium" rounded src={Hats} /></Link>
            <h4 align="center">Hats</h4>
          </Grid.Column>
          <Grid.Column>
            <Link to="/stickers" ><Image size="medium" rounded src={Stickers} /></Link>
            <h4 align="center">Stickers</h4>
          </Grid.Column>
        </Grid.Row>

        <br />
        <Header as="h3">FEATURED PRODUCTS</Header>
        <Grid.Row centered columns={2} >
          <Grid.Column>
            <Image size='large' src={Featured} rounded/>
          </Grid.Column>
          <Grid.Column>
            <Image size='large' src={Featured} rounded/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Image size='large' src={Featured} rounded/>
          </Grid.Column>
          <Grid.Column>
            <Image size='large' src={Featured} rounded/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br/>
  
    <StyledFooter as={Segment} inverted >
      <Grid>
        <Grid.Column textAlign='center' width={9}>
        <h1 textAlign="center">Any Questions?
              <br/> We're here to help.</h1>
        </Grid.Column>
        <Grid.Column floated='right' width={5}>
        <Segment floated='right' color='white'><Icon name="mail"/>contact@devpointlabs.com</Segment>
            <Segment floated='right' color='white'>370 South 300 East
            <br/>Salt Lake City, Utah
            <br/>84111</Segment>
            <Segment floated='right' color='white'><Icon flipped='horizontally' name="phone" />801-448-7240</Segment>
        </Grid.Column>
      </Grid>  
    </StyledFooter>
    <Segment inverted vertical >
      <p textAlign="left">DevPoint Labs</p>
    </Segment>
    
  </ResponsiveContainer>
);

const StyledFooter= styled.div` {
  position: relative;
  z-index: 1;
  
  &:before,
  &:after {
    background: inherit;
    content: '';
    display: block;
    height: 75%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
  }

  &:before {
    top: 0;
    transform: skewY(-1deg);
    transform-origin: 0% 0;
  }
  
  &:after {
    bottom: 0;
    transform: skewY(0deg);
    transform-origin: 100%;
  }
}
`;

export default HomepageLayout;