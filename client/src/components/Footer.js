import React from 'react';
import { Segment, Header, Grid, Container, Responsive } from "semantic-ui-react";


const Footer = () => (
  // <ResponsiveContainer>
  <>
  <Segment inverted vertical fluid>
      <Container>
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
      </Container>
    </Segment>
    <Segment inverted vertical textAlign="right" padding="15px">
    <p textAlign="right">2020 DevPoint Labs Terms Policy</p>
    </Segment>
    </>
  /* // </ResponsiveContainer> */

)

export default Footer
