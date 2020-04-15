import PropTypes from 'prop-types';
import React, { Component, useState } from 'react';
import { Container, Grid, Header, Image, } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import BlueHeader from '../images/BlueHeader2.svg';
import Featured from '../images/blank.png'
import FeaturedCard from './FeaturedCard';

const HomepageLayout = () => {
  const [results, setResults] = useState([]);

  const afterSearch = results => setResults(results);

  const renderResults = () =>
    results.map(result => <div key={result.id}>{result.title}</div>);

  return (
    <>
<<<<<<< HEAD
    
    <div class="image-container">
    <Image src={BlueHeader} fluid />
    {/* <div style={{backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat", backgroundImage: `url(${BlueHeader})`}} /> */}
    <div class="centered"><h1>DevPoint Store</h1>
    <h3>Find something you'll love.</h3></div> 
    </div>
    <Container> 
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
=======
      <div class="image-container">
        <Image src={BlueHeader} fluid />
        {/* <div style={{backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat", backgroundImage: `url(${BlueHeader})`}} /> */}
        <div class="centered">
          <h1>DevPoint Store</h1>
          <h3>Find something you'll love.</h3>
        </div>
      </div>
      <Container>
        <Grid>
          <Header as="h3">CATEGORIES</Header>
          <Grid.Row columns={4}>
            <Grid.Column>
              <Link to="/categories/1/products">
                <RoundedImage as={Image} size="medium" src={Featured} fluid />
              </Link>
              <h4 align="center">T Shirts</h4>
            </Grid.Column>
            <Grid.Column>
              <Link to="/categories/2/products">
                <RoundedImage as={Image} size="medium" src={Featured} />
              </Link>
              <h4 align="center">Jackets & Hoodies </h4>
            </Grid.Column>
            <Grid.Column>
              <Link to="/categories/3/products">
                {" "}
                <RoundedImage as={Image} size="medium" src={Featured} />
              </Link>
              <h4 align="center">Hats</h4>
            </Grid.Column>
            <Grid.Column>
              <Link to="/categories/4/products">
                <RoundedImage as={Image} size="medium" src={Featured} />
              </Link>
              <h4 align="center">Stickers</h4>
            </Grid.Column>
          </Grid.Row>
        </Grid>
>>>>>>> 09a07f7d1bfbefa635d227cdfc152284deece669
      </Container>
      <br />
      <div align="center">
        <button class="ui button" style={{ align: "center" }}>
          See More
        </button>
      </div>
      <br />
    </>
  );
};

const RoundedImage = styled.div`
  border-radius: 25px;
  width: 250px;
  height: 250px;
`;

export default HomepageLayout;
