import PropTypes from 'prop-types';
import React, { Component, useState } from 'react';
import { Container, Grid, Header, Image, } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import BlueHeader from '../images/BlueHeader2.svg';
import Featured from '../images/blank.png'
import FeaturedCard from './FeaturedCard';
import FunctionalSearch from './SharedComponents/FunctionalSearch';

const HomepageLayout = () => {
  const [results, setResults] = useState([]);

  const afterSearch = results => setResults(results);

  const renderResults = () =>
    results.map(result => <div key={result.id}>{result.title}</div>);

  return (
    <>
      <div class="image-container">
        <Image src={BlueHeader} fluid />
        <div class="centered">
          <h1 class="large-header" >DevPoint Store</h1>
          <h3 class="small-header" >Find something you'll love.</h3>
          <FunctionalSearch/>
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
      </Container>
      <br />
      <div align="center">
        <button class="ui button" style={style.button}>
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
