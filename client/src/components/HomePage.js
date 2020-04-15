import PropTypes from 'prop-types';
import React, { Component, useState } from 'react';
import { Container, Grid, Header, Image, Card, } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import BlueHeader from '../images/BlueHeader.svg';
import Featured from '../images/blank.png'
import LargeLogo from '../images/logo_black.svg'
import FunctionalSearch from './SharedComponents/FunctionalSearch';
import FeaturedProducts from '../components/FeaturedProducts'


const HomepageLayout = () => {
  const [results, setResults] = useState([]);

  const afterSearch = (results) => setResults(results);

  const renderResults = () => results.map((result) => (
    <div key={result.id}>
      <Card>
        <Image src={result.main_image} alt={result.title} size="small" />
        {/* <Image src={result.main_image} as={Link} to={{pathname:`/categories/${category_id}/products/${result.id}`, state:{...result} }} /> */}
        <Card.Header>{result.title}</Card.Header>
        <Card.Meta>${result.price}</Card.Meta>
      </Card><br />
    </div> 
  ));

  return (
    <>
      <div class="image-container">
        <Image src={BlueHeader} fluid />
        {/* <div style={{backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat", backgroundImage: `url(${BlueHeader})`}} /> */}
        <div class="centered"><h1>DevPoint Store</h1>
          <h3>Find something you'll love.</h3>
          <FunctionalSearch afterSearch={afterSearch}/>
        </div> 
      </div>
    
    <Container>
      { results.length > 0 && renderResults() }
      <Grid >
        <Header as='h3'>CATEGORIES</Header>
        <Grid.Row columns={4}>
          <Grid.Column>
            <Link to="/categories/1/products" ><RoundedImage as={Image} size="medium" src={Featured} fluid /></Link>
            <h4 align="center">T Shirts</h4>
          </Grid.Column>
          <Grid.Column>
            <Link to="/categories/2/products" ><RoundedImage as={Image} size="medium" src={Featured} /></Link>
            <h4 align="center">Jackets & Hoodies </h4>
          </Grid.Column>
          <Grid.Column>
            <Link to="/categories/3/products" > <RoundedImage as={Image} size="medium" src={Featured} /></Link>
            <h4 align="center">Hats</h4>
          </Grid.Column>
          <Grid.Column>
            <Link to="/categories/4/products" ><RoundedImage as={Image} size="medium" src={Featured} /></Link>
            <h4 align="center">Stickers</h4>
          </Grid.Column>
        </Grid.Row>
      </Grid> 
      </Container>
      <br/> 
      <div align="center">
        <FeaturedProducts />
      </div>
      <br />
  </>
  )
};


const RoundedImage= styled.div `
    border-radius: 25px;
    width: 250px;
    height: 250px;
`

export default HomepageLayout;