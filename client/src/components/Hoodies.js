import React, { useState, useEffect } from 'react';
import { Card, } from 'semantic-ui-react';
import Products from './Products';
import axios from "axios";

const Hoodies = () => {
  const [hoodies, setHoodies] = useState([]);
  
  // make another useeffect to get the category
  // /categories/:category_id/

  // refactor component to get products by category
  // when the controller exists (see Brianna)
  useEffect(() => {
    // /categories/:category_id/products
    axios.get("/api/products")
      .then((res) => {
        const filteredProducts = res.data.filter((product) => (
          product.category == "Hoodies"
        ));
        setHoodies(filteredProducts);
      })
      .catch(console.log);
  }, []);

  const renderHoodies = () => 
    hoodies.map( product => ( 
      <Card
        key={product.id}
        image={product.main_image}
        header={product.title}
        meta={"$" + product.price}
      />
    ))

  return (
    <>
    <h1>Hoodies<hr /></h1>
    <Card.Group itemsPerRow={4}>
      {renderHoodies()}
    </Card.Group>
    </>
  )
}

export default Hoodies;