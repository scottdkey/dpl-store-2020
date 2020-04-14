import React, { useState, useEffect } from "react";
import { Card, Image, Button, } from "semantic-ui-react";
import axios from "axios";
import { Link, } from "react-router-dom";
import BlueHeader from '../images/BlueHeader.svg';
import FunctionalSearch from './SharedComponents/FunctionalSearch';
import Products from './Products';

const DynamicCategory = ({category_name, category_id, noHeader, match}) => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(null);
  // const [noHeader, setNoHeader] = useState(null);
  // const [catName, setCatName] = useState('');
  const cat_id = category_id || match.params.category_id
  // make another useEffect to get the category
  // /categories/:category_id/

  // refactor component to get products by category
  // when the controller exists (see Brianna)
  // /categories/:category_id/products/:product_id
  // call to get both of them
  const [results, setResults] = useState([]);

  const afterSearch = (results) => setResults(results);

  const renderResults = () => results.map((result) => (
    <div key={result.id}>
      {result.title}
    </div> 
  ));

  useEffect(() => {
    const cat_id = category_id || match.params.category_id
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
    items.map((product) => (
      <div key={product.id}>
        <Image src={product.main_image} as={Link} to={{pathname:`/categories/${cat_id}/products/${product.id}`, state:{...product} }} />
        <Card >
          <Card.Content>
            <Card.Header>{product.title}</Card.Header>
            <Card.Meta>{"$" + product.price}</Card.Meta>
          </Card.Content>
        </Card>
      </div>
    ));

    
  if(noHeader) {
      return(
        <>
        {renderItems()}
        {console.log(items)}
        </>
      )
    } else {
      return(
        <>
          <div class="image-container">
            <Image src={BlueHeader} fluid />
            <div class="centered">
              <h1>{ category && category.name }</h1>
              <FunctionalSearch afterSearch={afterSearch} category_id={cat_id} />
            </div>
          </div>
        { results.length > 0 && renderResults() }
        {renderItems()}
        </>
      )
    }



    // return(
    //   <>
    //   <div class="image-container">
    //     <Image src={BlueHeader} fluid />
    //     <div class="centered">
    //       <h1>{ category && category.name }</h1>
    //       <FunctionalSearch afterSearch={afterSearch}/>
    //     </div>
    //   </div>
    //   { results.length > 0 && renderResults() }
    //   {renderItems()}
    //   </>
    // );
};

export default DynamicCategory;

