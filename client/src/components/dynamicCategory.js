import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import axios from "axios";

const DynamicCategory = ({category_id, match}) => {
  const [items, setItems] = useState([]);
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
        console.log(res.data);
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
    {renderItems()}
    </>
  );
};

export default DynamicCategory;