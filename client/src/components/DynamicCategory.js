import React, { useState, useEffect } from "react";
import { Card, Image, } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import BlueHeader from "../images/BlueHeader2.svg";
import FunctionalSearch from "./SharedComponents/FunctionalSearch";
import Products from "./Products";


const DynamicCategory = ({ category_id, match, category_name, noHeader }) => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(null);
  const [results, setResults] = useState([]);
  const cat_id = category_id || match.params.category_id;
  
  // gets products on initial render
  useEffect(() => {
    axios
      .get(`/api/categories/${cat_id}/products`)
      .then(res => setItems(res.data))
      .catch(console.log);
  }, [cat_id]);

  // gets category on initial render
  useEffect(() => {
    axios
      .get(`/api/categories/${cat_id}`)
      .then((res) => setCategory(res.data))
      .catch(console.log);
  }, [cat_id,results]);


  // clears results when category changes
  useEffect(() => {
    setResults([]);
  },[cat_id]);

  const renderResults = () => results.map((result) => (
    <div key={result.id}>
      <Image src={result.main_image} alt={result.title} size="small" as={Link} to={`/categories/${result.category_id}/products/${result.id}`} />
      <Card.Header>{result.title}</Card.Header>
      <Card.Meta>${result.price}</Card.Meta>
    </div>
  ));

  const renderItems = () => (
    <div style={style.productContainer}>
      {items.map((product) => (
        <div key={product.id}>
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
  );

  if (noHeader) {
    return <>{renderItems()}</>;
  } else {
    return (
      <>
        <div className="image-container">
          <Image src={BlueHeader} style={{ width: "100%" }} />
          <div className="centered">
            <h1 className="large-header">{category && category.name}</h1>
            <FunctionalSearch afterSearch={setResults} category_id={cat_id} />
          </div>
        </div>
        <div style={style.container}>
          <div style={style.resultsContainer}>
        { results.length > 0 && renderResults() }
        </div>
        {renderItems()}
        </div>
        <br />
      </>
    );
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
    borderRadius: "30px",
    color: "#4901DB",
    backgroundColor: "rgba(74,1,219, .03)",
  },
  productContainer: {
    display: "flex",
    alignItems: "stretch",
    marginLeft: "100px",
    flexWrap: "wrap",
    marginBottom: "5%",
  },
  container: {
    margin: "2% 11%",
    marginTop: "5%"
  },
  resultsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "2%",
    margin: "5%",
  },
};

export default DynamicCategory;
