import React, { Component } from "react";
import axios from "axios";
import { Card, Image  } from "semantic-ui-react";
import DynamicCategory from "./DynamicCategory";
import BlueHeader from "../images/BlueHeader.svg"
import FunctionalSearch from "./SharedComponents/FunctionalSearch";



export default class Products extends Component {
  state = { categories: [], noHeader:true , results: [] };
  

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
        <Card.Group key={c.id}>
          <DynamicCategory category_id={c.id} category_name={c.name} noHeader={true}/>
        </Card.Group>
      );
    });

  afterSearch = (results) => {this.setState({ results: results })};

  renderResults = () => (
    <div>
      <h1>Search Results</h1>
      {this.state.results.map((result) => (
        <div key={result.id}>
          <Card>
            <Image src={result.main_image} alt={result.title} size="small" />
            <Card.Header>{result.title}</Card.Header>
            <Card.Meta>${result.price}</Card.Meta>
          </Card><br />
        </div> 
      ))}
    </div> 
  );



  render() {
    return (
      <>
        <div class="image-container">
          <Image src={BlueHeader} fluid />
          <div class="centered">
            <h1>All Merchandise</h1>
            <h3>Find something you'll love.</h3>
            <FunctionalSearch afterSearch={this.afterSearch} />
          </div>
        </div>

        { this.state.results.length > 0 && this.renderResults() }
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