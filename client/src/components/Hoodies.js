import React from 'react';
import { Card, } from 'semantic-ui-react';
import Navbar from './Menu';
import Footer from './Footer';

const Hoodies = () => {
    return(
      <>
      <Navbar/>
      <h1>Hoodies</h1>
      <Card>
    <Card.Content>
      <Card.Header>
        Hoodies Go In These Cards
      </Card.Header>
    </Card.Content>
  </Card>
  <Footer/> 
  </>
    )
    }

export default Hoodies;