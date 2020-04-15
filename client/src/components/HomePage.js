import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Grid, Header, Image, } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import BlueHeader from '../images/BlueHeader2.svg';
import Featured from '../images/blank.png'
import FeaturedCard from './FeaturedCard';


const HomepageLayout = () => (
    <>
    <div class="image-container">
    <Image src={BlueHeader} style={{width:"100%"}} />
    {/* <div style={{backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat", backgroundImage: `url(${BlueHeader})`}} /> */}
    <div class="centered"><h1 class="large=header">DevPoint Store</h1>
    <h3 class="small-header">Find something you'll love.</h3></div> 
    </div>
    <Container style={{marginBottom: '10%'}}> 
      <Grid >
        <Header as='h3' class='heading'>CATEGORIES</Header>
        <Grid.Row columns={4}>
          <Grid.Column centered>
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
      <br/> 
      <Header as="h3" class="heading">FEATURED PRODUCTS</Header>
      <Grid >
      <Grid.Row columns={2} >
        {/* <FeaturedCard/> */}
        <Grid.Column>
          <RoundedImage as={Image}  src={Featured}/>
          <h4 align="left">$ Product Name</h4>
        </Grid.Column>
        <Grid.Column>
          <RoundedImage as={Image}  src={Featured}/>
          <h4 align="left">$ Product Name</h4>
        </Grid.Column>
        </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <RoundedImage as={Image}  src={Featured}/>
          <h4 align="left">$ Product Name</h4>
        </Grid.Column>
        <Grid.Column>
          <RoundedImage as={Image}  src={Featured}/>
          <h4 align="left">$ Product Name</h4>
        </Grid.Column>
      </Grid.Row>
      </Grid>
      <br/>
      <div align="center">
            <button style={style.button}>See More</button></div>     
    </Container>
  </>
);

const style = {
  button: {
    backgroundColor: '#F5F5F5',
    color: '#4901DB',
    borderRadius: '30px',
    padding: '20px',
    align: 'center',
    border: 'none',
    width: '125px',
  },
};

const RoundedImage= styled.div `
    border-radius: 25px;
    width: 550px;
    height: 350px;
`

export default HomepageLayout;