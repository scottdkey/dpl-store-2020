import React, { useState, useEffect } from "react";
import { Card, Image, Button, } from "semantic-ui-react";
import axios from "axios";
import { Link, } from "react-router-dom";
import BlueHeader from '../images/BlueHeader.svg';
// import SearchCategory from './SharedComponents/SearchCategory';
import FunctionalSearch from './SharedComponents/FunctionalSearch';

const DynamicCategory = ({category_id, match}) => {
  const [items, setItems] = useState([]);
  // const [catName, setCatName] = useState('');
  const cat_id = category_id || match.params.category_id
  // make another useEffect to get the category
  // /categories/:category_id/

  // refactor component to get products by category
  // when the controller exists (see Brianna)
  // /categories/:category_id/products/:product_id
  // call to get both of them

  useEffect(() => {
    const cat_id = category_id || match.params.category_id
    axios
      .get(`/api/categories/${cat_id}/products`)
      .then((res) => {
        setItems(res.data);
      })
      .catch(console.log);
  }, []);

  const renderItems = () =>
    items.map((product) => (
      <>
      <h2>{product.category}</h2>
      <div key={product.id}>
      <Image src={product.main_image} as={Link} to={{pathname:`/categories/${cat_id}/products/${product.id}`, state:{...product} }} />
        <Card >
          {/* <Image src={product.main_image} /> */}
          <Card.Content>
            <Card.Header>{product.title}</Card.Header>
            <Card.Meta>{"$" + product.price}</Card.Meta>
          </Card.Content>
        </Card>
      </div>
      </>
    ));

  return (
    <>
    <div class="image-container">
          <Image src={BlueHeader} fluid />
          <div class="centered">
            <h1></h1>
            <FunctionalSearch category_id={cat_id} />
          </div>
    </div>
    {renderItems()}
    </>
  );
};

export default DynamicCategory;
