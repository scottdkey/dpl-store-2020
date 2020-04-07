import React, { Component, } from "react";
import axios from "axios";
import { Card, } from "semantic-ui-react";
import DynamicCategory from './DynamicCategory';

export default class Products extends Component {
  state = { categories: []}

  componentDidMount() {
      this.getCategories();
  }

  getCategories = () => {
    axios
      .get('/api/categories')
      .then(res => {
        this.setState({categories:res.data})
      })
  }

  renderCategories = () =>
    this.state.categories.map((c) => {
      const category = c.name;
      console.log(c)
      return (
        <>
        <Card.Group key={category} itemsPerRow={4} >
          <DynamicCategory category_id={c.id} />
        </Card.Group>
        </>
      );
    });

  render(){
    return(
      <>
      All Merchandise
      {this.state.categories.length === 0 ? "No Products" : this.renderCategories()}
      </>
    )
  }
};
