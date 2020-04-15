import React, { useState, useEffect } from "react";
import { Card, Image, Button, Container, Grid } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import BlueHeader from "../images/BlueHeader2.svg";
import FunctionalSearch from "./SharedComponents/FunctionalSearch";
import Products from './Products'

const DynamicCategory = ({ category_id, match, category_name, noHeader }) => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(null);
  const cat_id = category_id || match.params.category_id;
  const [results, setResults] = useState([]);
  // make another useEffect to get the category
  // /categories/:category_id/

  // refactor component to get products by category
  // when the controller exists (see Brianna)
  // /categories/:category_id/products/:product_id
  // call to get both of them
  
  const afterSearch = (results) => setResults(results);

  const renderResults = () => results.map((result) => (
    <div key={result.id}>
      {result.title}
    </div> 
  ));

  useEffect(() => {
    console.log(match);
    const cat_id = category_id || match.params.category_id;
    axios
      .get(`/api/categories/${cat_id}/products`)
      .then((res) => {
        setItems(res.data)
      })
      .catch(console.log);
  }, []);

  // gets category on initial render
  useEffect(() => {
    const cat_id = category_id || match.params.category_id
    axios
      .get(`/api/categories/${cat_id}`)
      .then((res) => setCategory(res.data))
      .catch(console.log);
  }, []);

  const renderItems = () =>
  <div style={style.productContainer}>
        { items.map((product) => (
            <div  key={product.id}>
              <h1>{category_name}</h1>
              <div style={{ ...style.photoHolder }}>
                <div style={style.crop}>
                  <Image
                    src={product.main_image}
                    as={Link}
                    to={{
                      pathname: `/categories/${cat_id}/products/${product.id}`,
                      state: { ...product },
                    }}
                  />
                </div>
              </div>
              <div style={style.informationContainer}>
                <div>
                  <h3 style={{ margin: "5px", display: "inline" }}>
                    {"$" + product.price}
                  </h3>
                  <h5 style={{ margin: "5px", display: "inline" }}>
                    {product.title}
                  </h5>
                </div>
              </div>  
            </div>
        ))}
    </div>
if(noHeader){
  return (
    <>
      {renderItems()}
      {console.log(items)}
      </>
  )
} else {
  return(
    <>
    <div class="image-container">
        <Image src={BlueHeader} style={{ width: "100%" }} />
        <div class= "centered">
          <h1 class="large-header">{category && category.name}</h1>
          <FunctionalSearch afterSearch={afterSearch} category_id={cat_id}/>
          </div>
          </div>
          {results.length > 0 && renderResults()}
          {renderItems()}
          <br />
        <div align="center">
        <button style={style.button}>See More</button>
        </div>
        <br />
          </>
  )
};
};
const style = {
  crop: {
    height: "100%",
    overflow: "hidden",
    position: "relative",
  },
  photoHolder: {
    background: "#fff",
    display: "inline-block",
    verticalAlign: "top",
    marginRight: ".5em",
    marginBottom: ".3em",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0px 3px 10px #cccccc",
  },
  informationContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5%",
  },
  item: {
    width: "30%",
    margin: "1%",
  },
  button: {
    backgroundColor: "#F5F5F5",
    color: "#4901DB",
    borderRadius: "30px",
    padding: "20px",
    align: "center",
    border: "none",
    width: "125px",
  },
  productContainer: {
    display: 'flex',
    alignItems: 'stretch',
    marginLeft: '100px',
    flexWrap: 'wrap',
  },
};

export default DynamicCategory; 