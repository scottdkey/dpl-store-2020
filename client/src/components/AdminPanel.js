import React, { Component } from "react";
import { Header, Table, Button, Modal } from "semantic-ui-react";
import axios from "axios";
import ProductForm from "./Forms/ProductForm";

export default class AdminPanel extends Component {
  state = { products: [], categories: [], openForm: false };

  componentDidMount() {
    if (this.state.products.length === 0) {
      this.getCategories();
    } else if (this.state.products[0] === "No Products Found") {
      console.log("No Products Found");
    }
  }

  getProducts() {
    axios
      .get("/api/products")
      .then((res) => {
        if (res.data.length === 0) {
          this.setState({ products: ["No Products "] });
        } else {
          this.setState({ products: res.data });
          this.putProductsInCategories();
        }
      })
      .catch((e) => console.log(e));
  }

  deleteProduct = (id) => {
    axios
      .delete(`/api/products/${id}`)
      .then((res) => this.getProducts())
      .catch((error) => console.log(error));
  };

  getCategories = () => {
    const {categories} = this.state
    axios
      .get('/api/categories')
      .then(res => {
        var products = []
        axios.get(`/api/categories`)
        res.data.forEach(category => {
          this.setState({
            categories: [...categories, {category:category, products:products}]
          })
        
      })})
  }

  putProductsInCategories = () => {
    // this.state.products.forEach((product) => {
    //   if (product.category === "T-Shirts") {
    //     tShirts.push(product);
    //   } else if (product.category === "Hoodies") {
    //     hoodies.push(product);
    //   } else if (product.category === "Hats") {
    //     hats.push(product);
    //   } else {
    //     stickers.push(product);
    //   }
    // });
    this.state.categories.forEach(category => {

    })

  };
  deleteCategory() {}

  renderCategories = () =>
    this.state.categories.map((c) => {
      const category = c.name;
      // const products = c.products;
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
              {/* {products.map((product) => (
                <Table.Row key={product.id}>
                  <RenderProduct
                    toggleForm={this.toggleForm}
                    getProducts={this.getProducts}
                    deleteProduct={this.deleteProduct}
                    product={product}
                  />
                </Table.Row>
              ))} */}
            </Table.Body>
          </Table>
        </div>
      );
    });
  toggleForm = () => {
    this.setState({ openForm: !this.state.openForm });
  };

  render() {
    const { openForm } = this.state;
    return (
      <>
        <Header as="h1" textAlign="center">
          Admin panel
        </Header>
        <Button onClick={this.toggleForm}>New</Button>
        <Modal open={openForm}>
          <ProductForm
            toggleForm={this.toggleForm}
            getProducts={this.getProducts}
          />
        </Modal>

        {this.renderCategories()}
      </>
    );
  }
}
