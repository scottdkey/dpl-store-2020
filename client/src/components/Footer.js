import React from 'react';
import { Segment, Header, Grid, Container, Responsive } from "semantic-ui-react";
import styled from 'styled-components';

const Footer = () => (
  
  <>
  <StickyFooter as={Segment} inverted >
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
    <Segment inverted textAlign="right">
    <p textAlign="right">2020 DevPoint Labs Terms Policy</p></Segment>
    </StickyFooter>
    </>
);

const StickyFooter = styled.div `{
  position: static;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
}
`;

export default Footer;
