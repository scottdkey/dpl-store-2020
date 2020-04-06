import React from 'react';
import { Card, } from 'semantic-ui-react';
import Products from './Products';

const Tshirts = () => {
 

  return (
    <><h1>T-Shirts</h1>
    tshirts.map( tshirt => (
      <Card>
      <Card.Content>
        {/* <Card.Header>{ insert image of tshirt.mainImage }</Card.Header> */}
        <Card.Content></Card.Content>
        <Card.Meta></Card.Meta>
      </Card.Content>
    </Card>
    </>
  )
}

export default Tshirts;