import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Grid, Header, Icon, Image, Menu, Responsive, Segment, Sidebar, Visibility, Dropdown, Button } from 'semantic-ui-react';
import Hats from '../images/Hat.jpg';
import Featured from '../images/blank.png';
import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import Navbar from './Menu';


const hoodiesLayout = () => (
  // <ResponsiveContainer >
  
      <>
      <Navbar/>
      <h1>Hoodies</h1>
      <Grid >
          <Grid.Row columns={3}>
              <Grid.Column>
                  <Link to="/" ><RoundedImage as ={Image} size="medium"  src={Featured} fluid /></Link>
                  <h4 align="left">$ Product Name</h4>
              </Grid.Column>
              <Grid.Column>
                  <Link to="/" ><RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                  <h4 align="left">$ Product Name </h4>
              </Grid.Column>
              <Grid.Column>
                  <Link to="/" > <RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                  <h4 align="left">$ Product Name</h4>
              </Grid.Column>
              <Grid.Column>
                  <Link to="/" ><RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                  <h4 align="left">$ Product Name</h4>
              </Grid.Column>
              <Grid.Column>
                  <Link to="/" ><RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                  <h4 align="left">$ Product Name</h4>
              </Grid.Column>
              <Grid.Column>
                  <Link to="/" ><RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                  <h4 align="left">$ Product Name</h4>
              </Grid.Column>
              <Grid.Column>
                  <Link to="/" ><RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                  <h4 align="left">$ Product Name</h4>
              </Grid.Column>
              <Grid.Column>
                  <Link to="/" ><RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                  <h4 align="left">$ Product Name</h4>
              </Grid.Column>
              <Grid.Column>
                  <Link to="/" ><RoundedImage as= {Image} size="medium" src={Featured} /></Link>
                  <h4 align="left">$ Product Name</h4>
              </Grid.Column>
          </Grid.Row>
      </Grid>
      <br />
      <div>
          <CenteredButton as={Button} class="ui button" textAlign="center">See More</CenteredButton></div>
      <br />
    </>
  /* // </ResponsiveContainer> */
);


const CenteredButton= styled.div `
display: flex; 
justify-content: center;
`;

const RoundedImage= styled.div `
  border-radius: 25px;
  width: 250px;
  height: 250px;
`

export default hoodiesLayout; 