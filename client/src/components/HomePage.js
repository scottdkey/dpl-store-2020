
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Grid, Header, Icon, Image, Menu, Responsive, Segment, Sidebar, Visibility, SearchCategory,} from 'semantic-ui-react';
import TShirts from '../images/T-Shirts.jpg';
import Hoodies from '../images/Hoodies.jpg';
import Hats from '../images/Hat.jpg';
import Stickers from '../images/Stickers.jpg';
import Featured from '../images/blank.png';
import { Link } from "react-router-dom";
import Links from '../components/SharedComponents/Links';


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
                <Menu.Item as='a' active>
                  .SHOP
                </Menu.Item>
                <Menu.Item position='right'>
                <Links />
                <Menu.Item as='a'>More<Icon name="dropdown"/></Menu.Item>
                <Menu.Item as='a'><Link to='/cart'><Icon name="shopping cart" />Cart </Link></Menu.Item>
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
          <Menu.Item as='a' active>
            .Shop
          </Menu.Item>
          <Links />
          <Menu.Item as='a'>More<Icon name="dropdown"/></Menu.Item>
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
    <Segment style={{ padding: '8em 0em', }} vertical>
    <Grid >
    <Header as ='h3'>Categories</Header>
    <Grid.Row columns={4}>
      <Grid.Column>
        <Link to="/tshirts" ><Image size="medium" src={TShirts} /></Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="/hoodies" ><Image size="medium" src={Hoodies} /></Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="/hats" > <Image size="medium" src={Hats} /></Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="/stickers" ><Image size="medium" src={Stickers} /></Link>
      </Grid.Column>
    </Grid.Row>
  
<br/>
    <Header as="h3">Featured Products</Header>
    <Grid.Row centered columns={2} >
      <Grid.Column>
        <Image src={Featured} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Featured}  />
      </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={2}>
      <Grid.Column>
        <Image src={Featured}  />
      </Grid.Column>
      <Grid.Column>
        <Image src={Featured} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
    </Segment>

    <Segment inverted vertical >
      <Container>
        <Grid inverted >
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h3' textAlign="center" content='DevPoint Labs' />
            </Grid.Column>
            <Grid.Column width={10}>
              <p inverted='true' textalign="centered">370 S. 300 E. SLC, Utah 84111 / 801-448-7240 / contact@devpointlabs.com</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    <Segment inverted vertical textAlign="right" padding="15px">
    <p>2020 DevPoint Labs Terms Policy</p>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;