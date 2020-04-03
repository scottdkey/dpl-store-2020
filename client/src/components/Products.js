import React, { Component } from 'react';
import axios from 'axios';
import { Table, Header, Card, Tab, Image  } from 'semantic-ui-react';

export default class Products extends Component {
  state = { products: [], categories: [] }

  getProducts() {
    axios
      .get("/api/products")
      .then(res => {
        if (res.data.length === 0) { this.setState({ products: ["No Products "] }) }
        else {
          this.setState({ products: res.data });
          this.putProductsInCategories();
        }
      })
      .catch(e => console.log(e));
  }

  putProductsInCategories = () => {
    const tShirts = [];
    const hoodies = [];
    const hats = [];
    const stickers = [];
    this.state.products.map(product => {
      if (product.category === "T-Shirts") {
        tShirts.push(product);
      } else if (product.category === "Hoodies") {
        hoodies.push(product);
      } else if (product.category === "Hats") {
        hats.push(product);
      } else {
        stickers.push(product);
      }
    });
    this.setState({
      categories: [
        { name: "T-Shirts", products: tShirts },
        { name: "Hoodies", products: hoodies },
        { name: "Hats", products: hats },
        { name: "Stickers", products: stickers }
      ]
    });
  };

  renderCategories = () =>
    this.state.categories.map(c => {
      const category = c.name;
      const products = c.products;
      return (
        <>
          <Header>{category}</Header>
          <Card.Group itemsPerRow={4}>
            {products.map(product => {
              const price = "$" + product.price
              return (
                <Card>
                  <Card
                    image={product.main_image}
                    header={product.title}
                    meta={price}
                  />
                 </Card>
                );
              })}
          </Card.Group>
        </>
      );
    });

  render() {
    if (this.state.products.length === 0) {
            this.getProducts();
    } else if(this.state.products[0]=== "No Products Found"){
            console.log("no products found");
    }
    return (
          <>
            <Header as="h1" textAlign="center">
              All Merchandise
        </Header>
            {this.renderCategories()}
          </>
    );
  }
}