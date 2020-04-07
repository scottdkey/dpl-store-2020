import React, { Component, } from "react";
import axios from "axios";
import { Card, } from "semantic-ui-react";
import DynamicCategory from './DynamicCategory';

export default class Products extends Component {
  state = { products: [], categories: []}

  componentDidMount() {
    if (this.state.products.length === 0) {
      this.getCategories();
    } else if (this.state.products[0] === "No Products Found") {
      console.log("No Products Found");
    }
  }

  getCategories = () => {
    axios
      .get('/api/categories')
      .then(res => {
        res.data.forEach(category => {
          axios.get(`/api/categories/${category.id}/products`)
            .then(res => {
              this.setState({
                categories: [...this.state.categories, { category: category, products: res.data }]
              })
            })
        })
      })
  }

  renderCategories = () =>
    this.state.categories.map((c) => {
      const category = c.category.name;
      return (
        <>
        {category}
        <Card.Group key={category}>
          <DynamicCategory category_id={category.id} />
        </Card.Group>
        </>
      );
    });

  render(){
    return(
      <>
      All Merchandise
      {this.renderCategories()}
      </>
    )
  }
};
