import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import Products from "./Products";
import axios from "axios";

const DynamicCategory = ({category_id}) => {
  const [items, setItems] = useState([]);
  // make another useEffect to get the category
  // /categories/:category_id/

  // refactor component to get products by category
  // when the controller exists (see Brianna)
  useEffect(() => {
    // /categories/:category_id/products/:product_id
    axios
      .get("/api/categories/category_id/products")
      .then((res) => {
        setItems(res.data);
      })
      .catch(console.log);
  }, []);

  const renderItems = () =>
    items.map((product) => (
      <Card
        key={product.id}
        image={product.main_image}
        header={product.title}
        meta={"$" + product.price}
      />
    ));

  return (
    <>
    <h1>You are Here</h1>
      <Card.Group itemsPerRow={4}>{renderItems()}</Card.Group>
    </>
  );
};

export default DynamicCategory;