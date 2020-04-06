import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import Products from "./Products";
import axios from "axios";

const dynamicCategory = ({ category_id }) => {
  const [item, setItems] = useState([]);
  // make another useEffect to get the category
  // /categories/:category_id/

  // refactor component to get products by category
  // when the controller exists (see Brianna)
  useEffect(() => {
    // /categories/:category_id/products/:product_id
    axios
      .get("/categories/:category_id/products")
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
      <Card.Group itemsPerRow={4}>{renderItems()}</Card.Group>
    </>
  );
};

export default Tshirts;
