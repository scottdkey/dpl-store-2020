import React, { useState, useEffect } from 'react';
import { Card, SearchCategory, Container, } from 'semantic-ui-react';
import Products from './Products';

const Tshirts = ({ categories }) => {
  const [tshirts, setTshirts] = useState([])

  const categorizeTshirts = (categories) => {
    categories.map(product => {
      if (categories.key == "tshirt") {
        tshirts.push(product);
      }
    }), []};

  const renderTshirts = () => {
    return(
    tshirts.map( product => {
    const price = "$" + product.price
    return(
      <Card
      image={product.main_image}
      header={product.title}
      meta={price}
      />
        );
      })
    )};

  return (
    {renderTshirts()}
  )
}

export default Tshirts;