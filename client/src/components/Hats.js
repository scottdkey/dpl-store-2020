
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Grid, Header, Icon, Image, Menu, Responsive, Segment, Sidebar, Visibility, Dropdown, Button } from 'semantic-ui-react';
import Hats from '../images/Hat.jpg';
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
            content='Hats'
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
            content='Great hats for great people'
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

const hatLayout = () => (
    <ResponsiveContainer >
        <br />
        <br />
        <Grid >
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Link to="/" ><RoundedImage as ={Image} size="medium"  src={Featured} fluid /></Link>
                    <h4 align="left">$ Product Name</h4>
                </Grid.Column>
                <Grid.Column>
                    <Link to="/" ><RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                    <h4 align="left">$ Product Name </h4>
                </Grid.Column>
                <Grid.Column>
                    <Link to="/" > <RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                    <h4 align="left">$ Product Name</h4>
                </Grid.Column>
                <Grid.Column>
                    <Link to="/" ><RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                    <h4 align="left">$ Product Name</h4>
                </Grid.Column>
                <Grid.Column>
                    <Link to="/" ><RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                    <h4 align="left">$ Product Name</h4>
                </Grid.Column>
                <Grid.Column>
                    <Link to="/" ><RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                    <h4 align="left">$ Product Name</h4>
                </Grid.Column>
                <Grid.Column>
                    <Link to="/" ><RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                    <h4 align="left">$ Product Name</h4>
                </Grid.Column>
                <Grid.Column>
                    <Link to="/" ><RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                    <h4 align="left">$ Product Name</h4>
                </Grid.Column>
                <Grid.Column>
                    <Link to="/" ><RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                    <h4 align="left">$ Product Name</h4>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <br />
        <div>
            <CenteredButton as={Button} class="ui button" textAlign="center">See More</CenteredButton></div>
        <br />
      
    </ResponsiveContainer>
);

 
const CenteredButton= styled.div `
display: flex; 
justify-content: center;
`;

const RoundedImage= styled.div `
    border-radius: 25px;
    width: 250px;
    height: 250px;
`

export default hatLayout; 