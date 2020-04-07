import React, { Component, } from "react";
import axios from "axios";
import { Header, Table, } from "semantic-ui-react";
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
      const products = c.products;
      return (
        <div key={category}>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  {category}
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
              <Table.Body>
                  <DynamicCategory category_id={c.id} />
              </Table.Body>
          </Table>
        </div>
      );
    });

  render(){
    return(
      <>
      {this.renderCategories()}
      </>
    )
  }
};
