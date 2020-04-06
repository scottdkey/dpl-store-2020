import React, { useState, useEffect } from 'react';
import { Card, } from 'semantic-ui-react';
import Products from './Products';
import axios from "axios";
 
const Hats = () => {
 const [hats, setHats] = useState([]);
  // make another useeffect to get the category
 // /categories/:category_id/
 
 // refactor component to get products by category
 // when the controller exists (see Brianna)
 useEffect(() => {
   // /categories/:category_id/products
   axios.get("/api/products")
     .then((res) => {
       const filteredProducts = res.data.filter((product) => (
         product.category == "Hats"
       ));
       setHats(filteredProducts);
     })
     .catch(console.log);
 }, []);
 
 const renderHats = () =>
   hats.map( product => (
     <Card
       key={product.id}
       image={product.main_image}
       header={product.title}
       meta={"$" + product.price}
     />
   ))
 
 return (
   <>
   <h1>Hats<hr /></h1>
   <Card.Group itemsPerRow={4}>
     {renderHats()}
   </Card.Group>
   </>
 )
}
 
export default Hats;
