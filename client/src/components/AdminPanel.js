import React, { Component } from "react";
import { Header, Table, Button, Modal } from "semantic-ui-react";
import axios from "axios";
import ProductForm from "./Forms/ProductForm";
import RenderProduct from "./RenderProduct";

export default class AdminPanel extends Component {
  state = { products: [], categories: [], openForm: false };

  componentDidMount() {
    if (this.state.products.length === 0) {
      this.getCategories();
    } else if (this.state.products[0] === "No Products Found") {
      console.log("No Products Found");
    }
  }

  getProducts=() =>{
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

  deleteProduct = (id, category_id) => {
    axios
      .delete(`/api/categories/${category_id}/products/${id}`)
      .then((res) => {
      this.setState({categories:[]})
      this.getCategories()
      })
      .catch((error) => console.log(error));
  };

  getCategories = () => {
    const { categories } = this.state
    axios
      .get('/api/categories')
      .then(res => {
        res.data.forEach(category=>{
          axios.get(`/api/categories/${category.id}/products`)
          .then(res=> {
            this.setState({
              categories:[...this.state.categories, {category: category, products: res.data}]
            })
          })
        })
      })
    
  }

  deleteCategory() { }

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
                  {/* I dont think we need this, since categories wont be dynamic */}
                  {/* <Icon
                    name="trash alternate"
                    onClick={() => this.deleteCategory(category)}
                  /> */}
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {products.map((product) => (
                <Table.Row key={product.id}>
                  <RenderProduct
                    toggleForm={this.toggleForm}
                    getProducts={this.getProducts}
                    deleteProduct={this.deleteProduct}
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
