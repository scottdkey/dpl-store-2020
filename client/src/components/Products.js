import React, { Component } from "react";
import axios from "axios";
import { Card, Image, Container, Grid  } from "semantic-ui-react";
import DynamicCategory from "./DynamicCategory";
import BlueHeader from "../images/BlueHeader2.svg"

export default class Products extends Component {
  state = { categories: [] };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    axios.get("/api/categories").then((res) => {
      this.setState({ categories: res.data });
    });
  };

  renderCategories = () =>
    this.state.categories.map((c) => {
      const category = c.name;
      console.log(c);
      return (
        <Card.Group key={category}>
          <DynamicCategory category_id={c.id} />
        </Card.Group>
      );
    });

  render() {
    return (
      <>
        <div class="image-container">
          <Image src={BlueHeader} fluid />
          <div class="centered">
            <h1>All Merchandise</h1>
            <h3>Find something you''ll love.</h3>
          </div>
        </div>
        <Container>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
              {this.state.categories.length === 0
              ? "No Products"
              : this.renderCategories()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Container>
          <br/>
        <div align="center">
          <button style={style.button}>
            See More
          </button>
        </div>
        <br />
      </>
    );
  }
}

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
