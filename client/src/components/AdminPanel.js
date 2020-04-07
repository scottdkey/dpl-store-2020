import React, { Component } from "react";
import { Header, Table, Button, Modal } from "semantic-ui-react";
import axios from "axios";
import ProductForm from "./Forms/ProductForm";
import RenderProduct from "./RenderProduct";
import RenderCategories from './RenderCategories'
import CategoryForm from "./Forms/CategoryForm";

export default class AdminPanel extends Component {
 state = {products: [], categories: [], openForm: false}
  

  componentDidMount() {
    if (this.state.products === 0) {
      this.setState({ products: ["No Products "] });
    } else if(this.state.products.length === 0) {
      this.getProducts()
      // this.putProductsInCategories()
    } else {
      console.log("No Products Found");
    }
  }

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

  getProducts() {
    axios
      .get("/api/products")
      .then(res => {
        this.setState({ products: res.data });
        this.putProductsInCategories();
        }
      )
      .catch(e => console.log(e));
      
  }

  // deleteCategory() {}

  toggleForm = () => {
    this.setState({ openForm: !this.state.openForm });
  };

  render() {
    const { openForm, categories } = this.state;
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
            openForm={openForm}
          />
        </Modal>
        {/* <CategoryForm categories={categories}/> */}
        <RenderCategories
          toggleForm={this.toggleForm}
          categories={categories}
          getProducts={this.getProducts}
        />
      </>
    );
  }
}
