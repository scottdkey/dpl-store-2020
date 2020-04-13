import React from 'react';
import { Segment, Header, Grid, Container, Responsive, Icon, Image } from "semantic-ui-react";
import styled from 'styled-components';
import Logo from '../images/dpl_logo.svg';
import Pin from '../images/Pin.svg';

const Footer = () => (
  
  <>
    <StyledFooter as={Segment} inverted className="dpl-blue" >
      <Grid>
        <Grid.Column width={9}>
          <Grid.Row></Grid.Row>
          <Grid.Row><h4 style={{marginTop: "100px", marginLeft: "300px"}}>Any Questions? </h4></Grid.Row>
          <Grid.Row><h1 style={{marginLeft: "300px"}}>We're here to help.</h1> </Grid.Row>
        </Grid.Column>
        <Grid.Column floated='right' width={5}>
          <div class = "ui vertical segment">
            <Segment floated='right' className= "segment-size" color='white'><Icon name="mail"/>contact@devpointlabs.com</Segment>
            <Segment floated='right' className= "segment-size" color='white' style={{display: "flex", alignItems: "center"}} >
              <Image src={Pin} size="mini" inline style={{height: "16px", width: "16px"}}/>
              <div>
                370 South 300 East<br />
                Salt Lake City, Utah<br/>
                84111
              </div>
            </Segment>
            <Segment floated='right' className= "segment-size" color='white'><Icon flipped='horizontally' name="phone" />801-448-7240</Segment>
            </div>
        </Grid.Column>
      </Grid>  
    </StyledFooter>
    <Segment inverted className="dpl-blue" align="right">
    <p><Image align="left" size="small" src={Logo} className="filter-white"></Image>2020 DevPoint Labs Terms Policy</p>
    </Segment>
    </>
);


const StyledFooter= styled.div` {
  position: relative;
  z-index: 1;
  background-color: 6E54A3;
  
  &:before,
  &:after {
    background: inherit;
    content: '';
    display: block;
    height: 75%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
    border-top-right-radius: 25px;
  }
  &:before {
    top: 0;
    transform: skewY(-1deg);
    transform-origin: 0% 0;
  }
  
  &:after {
    bottom: 0;
    transform: skewY(0deg);
    transform-origin: 100%;
  }
}
`;


export default Footer;