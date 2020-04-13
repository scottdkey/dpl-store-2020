import React, { Component } from "react";
import axios from "axios";
import { Card, Image  } from "semantic-ui-react";
import DynamicCategory from "./DynamicCategory";
import BlueHeader from "../images/BlueHeader.svg"
import SearchAll from "./SharedComponents/SearchAll";

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
        <Card.Group key={category.id}>
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
            <h3>Find something you'll love.</h3>
            <SearchAll />
          </div>
        </div>
        {this.state.categories.length === 0
          ? "No Products"
          : this.renderCategories()}
        <div align="center">
          <button class="ui button" style={{ align: "center" }}>
            See More
          </button>
        </div>
        <br />
      </>
    );
  }
}
