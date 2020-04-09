import React, { useState, useEffect } from "react";
import { Card, Image, Button, } from "semantic-ui-react";
import axios from "axios";
import { Link, } from "react-router-dom";

const DynamicCategory = ({category_id, match}) => {
  const [items, setItems] = useState([]);
  const cat_id = category_id || match.params.category_id
  // make another useEffect to get the category
  // /categories/:category_id/

  // refactor component to get products by category
  // when the controller exists (see Brianna)
  // /categories/:category_id/products/:product_id
  // call to get both of them

  useEffect(() => {
    console.log(match)
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
      <Image src={product.main_image} as={Link} to={{pathname:`/categories/${cat_id}/products/${product.id}`, state:{...product} }} />
      <Card key={product.id}>
        {/* <Image src={product.main_image} /> */}
        <Card.Content>
          <Card.Header>{product.title}</Card.Header>
          <Card.Meta>{"$" + product.price}</Card.Meta>
        </Card.Content>
      </Card>
      </>
    ));

  return (
    <>
    {renderItems()}
    </>
  );
};

export default DynamicCategory;
