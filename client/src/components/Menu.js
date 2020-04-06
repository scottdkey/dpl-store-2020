import React from 'react';
import { Menu, Icon, Dropdown, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Navbar = () => (

  <Menu borderless inverted color="purple" >
    <Link to="/" ><Menu.Item active>.SHOP</Menu.Item></Link>
    <Menu.Item position='right'></Menu.Item>
    <Link to="/allmerchandise" ><Menu.Item as='a'>All Products</Menu.Item></Link>
    <Link to="/hoodies" ><Menu.Item as='a'>Hoodies</Menu.Item></Link>
    <Link to="/hats" ><Menu.Item as='a'>Hats</Menu.Item></Link>
    <Dropdown text='More' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item as='a' href='/tshirts'>Tshirts</Dropdown.Item>
        <Dropdown.Item as='a' href='/stickers'>Stickers</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item as='a'><Icon name="shopping cart" />Cart </Menu.Item>      
      </Menu >
  
)

export default Navbar; 