import React from 'react';
import { Card, } from 'semantic-ui-react';
import Products from './Products';
import Navbar from './Menu';
import Footer from './Footer'; 

const Tshirts = () => {
  // we have a const called tshirts which is all products with category = tshirts
  // const products = [Product.All]
  // const tshirts = []

  // def findTshirts = () => {
  //   return products.map( product () => (
  //     newShirt = product
  //     if product.category == "tshirts"
  //       tshirts << newShirt
  //     end
  //   )
  // }

  // componentDidMount() {
  //   // TODO: Make GET request with axios
  //   // TODO: Update state
  // }

  // renderTshirts = () => {
    
  // };

  return (
    <>
    <Navbar/>
    <h1>T-Shirts</h1>
    tshirts.map( tshirt => (
      <Card>
      <Card.Content>
        {/* <Card.Header>{ insert image of tshirt.mainImage }</Card.Header> */}
        <Card.Content></Card.Content>
        <Card.Meta></Card.Meta>
      </Card.Content>
    </Card>
    <Footer/>
    </>
  )
}

export default Tshirts;