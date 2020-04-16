import React, { Component } from "react";
import axios from "axios";
import { Card, Image, Container, } from "semantic-ui-react";
import DynamicCategory from "./DynamicCategory";
import BlueHeader from '../images/BlueHeader2.svg';
import FunctionalSearch from './SharedComponents/FunctionalSearch';



export default class Products extends Component {
  state = { categories: [] , results: [] };
  

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
      return (
        <Card.Group key={c.id}>
          <h2 style={{marginLeft:"100px"}}>{category}</h2>
          <br/>
          <DynamicCategory category_id={c.id} category_name={c.name} noHeader />
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
        <div className="image-container">
          <Image src={BlueHeader} fluid />
          <div className="centered">
            <h1 className="large-header">All Merchandise</h1>
            <h3 className="small-header">Find something you'll love.</h3>
            <FunctionalSearch afterSearch={this.afterSearch}  />
          </div>
        </div>
        <div style={style.container}>
        {/* <Container style={{margin: '2%'}}> */}
        { this.state.results.length > 0 && this.renderResults() }
        {this.state.categories.length === 0
          ? "No Products"
          : this.renderCategories()}
          </div>
          <br/>
        <div align="center">
          <button class="ui button" style={style.button}>See More</button>
        </div>
        <br />
      </>
    );
  }
}

const style = {
  button: {
    borderRadius: "30px",
    color: "#4901DB",
    backgroundColor: "rgba(74,1,219, .03)",
  },
  container: {
    margin: "2% 11%",
    marginTop: "5%"
  },
}