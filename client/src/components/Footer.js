import React from 'react';
import { Segment, Header, Grid, Container, Responsive, Icon } from "semantic-ui-react";
import styled from 'styled-components';

const Footer = () => (
  
  <>
    <StyledFooter as={Segment} inverted color="purple"  >
      <Grid>
        <Grid.Column textAlign='center' width={9}>
        <h1 textAlign="center">Any Questions?
              <br/> We're here to help.</h1>
        </Grid.Column>
        <Grid.Column floated='right' width={5}>
        <Segment floated='right' color='white'><Icon name="mail"/>contact@devpointlabs.com</Segment>
            <Segment floated='right' color='white'>370 South 300 East
            <br/>Salt Lake City, Utah
            <br/>84111</Segment>
            <Segment floated='right' color='white'><Icon flipped='horizontally' name="phone" />801-448-7240</Segment>
        </Grid.Column>
      </Grid>  
    </StyledFooter>
  <StickyFooter as={Segment} inverted color="purple">
        <Grid inverted >
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h3' textAlign="center" content='DevPoint Labs' />
            </Grid.Column>
            <Grid.Column width={10}>
              <p inverted textAlign="center">370 S. 300 E. SLC, Utah 84111 / 801-448-7240 / contact@devpointlabs.com</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    <Segment inverted color="purple" textAlign="right">
    <p textAlign="right">2020 DevPoint Labs Terms Policy</p></Segment>
    </StickyFooter>
    </>
);

const StickyFooter = styled.div `{
  position: ;
  left: 0;
  bottom: 0;
  width: 100%;
  background: 6E54A3;
  color: white;
  text-align: center;
}
`;
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
