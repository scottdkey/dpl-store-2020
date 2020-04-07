import React, { Component } from "react";
import { Header, Table, Button, Modal } from "semantic-ui-react";
import axios from "axios";
import ProductForm from "./Forms/ProductForm";
import RenderProduct from "./RenderProduct";
import RenderCategories from "./RenderCategories";
import CategoryForm from "./Forms/CategoryForm";
import CategorySelector from "./Forms/CategorySelector";

export default class AdminPanel extends Component {
  state = { products: [], categories: [], openForm: false, load: true, category: []};

  // componentDidMount() {
  //   if (this.state.products === 0) {
  //     this.setState({ products: ["No Products "] });
  //   } else if (this.state.products.length === 0) {
  //     this.getProducts();
  //     // this.putProductsInCategories()
  //   } else {
  //     console.log("No Products Found");
  //   }
  // }

  componentDidMount() {
    this.getProducts()
  }

  // putProductsInCategories = () => {
  //   const tShirts = [];
  //   const hoodies = [];
  //   const hats = [];
  //   const stickers = [];
  //   this.state.products.forEach(product => {
  //     if (product.category === "T-Shirts") {
  //       tShirts.push(product);
  //     } else if (product.category === "Hoodies") {
  //       hoodies.push(product);
  //     } else if (product.category === "Hats") {
  //       hats.push(product);
  //     } else {
  //       stickers.push(product);
  //     }
  //   });
  //   this.setState({
  //     categories: [
  //       { name: "T-Shirts", products: tShirts },
  //       { name: "Hoodies", products: hoodies },
  //       { name: "Hats", products: hats },
  //       { name: "Stickers", products: stickers }
  //     ]
  //   });
  // };
  // getCategories(){
  //   categories
  // }

  getProducts() {
    axios
      .get("/api/products")
      .then(res => {
        this.setState({ 
          products: res.data, 
          load: false });
      })
      .catch(e => console.log(e));
  }
  getCategories(){

  }

  // deleteCategory() {}

  toggleForm = () => {
    this.setState({ openForm: !this.state.openForm });
  };

  searchUpdate = products => {
    console.log(products)
    this.setState({ products });
  };

  render() {
    const { openForm, categories, load, products, category } = this.state;
    return (
      <>
        <Header as="h1" textAlign="center">
          Admin panel
        </Header>
        <CategorySelector
          products={this.state.products}
          getProducts={this.getProducts}
          searchUpdate={this.searchUpdate}
        />
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
          products={products}
          category={category}
          load={load}
        />
      </>
    );
  }
}
