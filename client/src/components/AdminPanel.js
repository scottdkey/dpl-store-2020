import React, { Component } from "react";
import { Header, Table, Button } from "semantic-ui-react";
import axios from "axios";
import ProductForm from "./Forms/ProductForm";
import RenderProduct from './RenderProduct'

export default class AdminPanel extends Component {
  state = { products: [], categories: [], showForm: false};

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

  deleteProduct = id => {
    axios
      .delete(`/api/products/${id}`)
      .then(res => this.getProducts())
      .catch(error => console.log(error));
  };

  putProductsInCategories = () => {
    const tShirts = [];
    const hoodies = [];
    const hats = [];
    const stickers = [];
    this.state.products.forEach(product => {
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
  deleteCategory() { }

  renderCategories = () =>
    this.state.categories.map(c => {
      const category = c.name;
      const products = c.products;
      return (
        <div key={category}>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  {category}
                  {/* I dont think we need this, since categories wont be dynamic */}
                  {/* <Icon
                    name="trash alternate"
                    onClick={() => this.deleteCategory(category)}
                  /> */}
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {products.map(product => (
                <Table.Row key={product.id}>
                  <RenderProduct
                    toggleForm={this.toggleForm}
                    getProducts={this.getProducts}
                    product={product}
                  />
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      );
    });
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };


  render() {
    if (this.state.products.length === 0) {
      this.getProducts();
    } else if (this.state.products[0] === "No Products Found") {
      console.log("No Products Found");
    }
    const { showForm } = this.state;
    return (
      <>
        <Header as="h1" textAlign="center">
          Admin panel
        </Header>
        <Button onClick={() => this.toggleForm()}>
          {showForm ? "hide" : "new product"}
        </Button>
        {showForm ? <ProductForm toggleForm={this.toggleForm} getProducts={this.getProducts} /> : null}

        {this.renderCategories()}
      </>
    );
  }
}
