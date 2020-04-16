import React, { useState, useEffect } from 'react';
import { Container, Grid, Header, Image, Card, } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import BlueHeader from '../images/BlueHeader2.svg';
import Featured from '../images/blank.png'
import FunctionalSearch from './SharedComponents/FunctionalSearch';
import FeaturedProducts from './FeaturedProducts'
import axios from 'axios';
import CategoriesLinks from './CategoriesLinks';


const HomepageLayout = () => {
  const [results, setResults] = useState([]);
  // const [categories, setCategories] = useState([]);

  const afterSearch = (results) => setResults(results);

  const renderResults = () => results.map((result) => (
    <div key={result.id}>
      <Image src={result.main_image} alt={result.title} size="small" />
      <Card.Header>{result.title}</Card.Header>
      <Card.Meta>${result.price}</Card.Meta>
    </div>
  ));

  // useEffect( () => { 
  //   axios.get('/api/categories')
  //     .then( res => {
  //       setCategories(res.data)
  //       console.log(res.data)
  //       const categoriesArray = [res.data];
  //       console.log(categories)
  //       console.log(categoriesArray)
  //     })
  //     .catch(console.log)
  // }, [])

  return (
    <>
      <div class="image-container">
        <Image src={BlueHeader} fluid />
        {/* <div style={{backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat", backgroundImage: `url(${BlueHeader})`}} /> */}
        <div class="centered"><h1 class="large-header">DevPoint Store</h1>
          <h3 class="small-header">Find something you'll love.</h3>
          <FunctionalSearch afterSearch={afterSearch} />
        </div> 
      </div>
    
    <Container>
      { results.length > 0 && renderResults() }
      <CategoriesLinks />
      <br/> 
      <br/>
    </Container>
    <div align="center">
      <FeaturedProducts />
    </div>
  </>
  )
};

const style = {
  button: {
    backgroundColor: "#F5F5F5",
    color: "#4901DB",
    borderRadius: "30px",
    padding: "20px",
    align: "center",
    border: "none",
    width: "125px",
  },
}

export default HomepageLayout;