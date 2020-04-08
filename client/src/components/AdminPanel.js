import React, { Component } from "react";
import { Header, Button, Modal } from "semantic-ui-react";
import axios from "axios";
import ProductForm from "./Forms/ProductForm";
import RenderCategories from "./AdminPanelComponents/RenderCategories";
import CategoryForm from "./Forms/CategoryForm";
import CategorySelector from "./Selectors/CategorySelector";

export default class AdminPanel extends Component {
  state = {
    products: [],
    categories: [],
    openForm: false,
    load: true,
    category: "All Categories"
  };

  componentWillMount() {
    this.getCategories(categories);
    this.getProducts();
    
  }

  getCategories(categories){
    this.setState({
      categories
    })
  }

  getProducts() {
    axios
      .get("/api/products")
      .then(res => {
        this.setState({
          products: res.data,
          load: false
        });
      })
      .catch(e => console.log(e));
  }
  deleteProduct = id => {
    const products = this.state.products.filter(product => {
      if (product.id != id) {
        return product;
      }
    });
    axios
      .delete(`/api/products/${id}`)
      .then(res => this.searchUpdate(products))
      .catch(error => console.log(error));
  };
  updateProducts = category => {
    if(category === undefined){
      category = this.state.category
    }
    axios.get("/api/products").then(res => {
      if (category === "All Categories") {
        this.setProducts(res.data, category)
      } else {
        const products = res.data.filter(product => {
          return product.category === category;
        });
        this.setProducts(products, category)
      }
    });
  };
  setProducts = (products, category) =>{
    this.setState({
      products,
      category
    });
  }

  toggleForm = () => {
    this.setState({ openForm: !this.state.openForm });
  };

  render() {
    const { openForm, categories, load, products, category } = this.state;
    return (
      <>
        <Header as="h1" textAlign="center">
          Admin panel
        </Header>
        <CategorySelector
          products={products}
          getProducts={this.getProducts}
          getCategories={this.getCategories}
          updateProducts={this.updateProducts}
          categories={categories}
        />
        <Button onClick={this.toggleForm}>New Product</Button>
        <Modal open={openForm}>
          <ProductForm
            toggleForm={this.toggleForm}
            updateProducts={this.updateProducts}
            openForm={openForm}
          />
        </Modal>
        {/* <CategoryForm categories={categories}/> */}
        <RenderCategories
          toggleForm={this.toggleForm}
          categories={categories}
          updateProducts={this.updateProducts}
          deleteProduct={this.deleteProduct}
          products={products}
          category={category}
          load={load}
        />
      </>
    );
  }
}

const categories = [
  { name: "T-Shirts", image: "ksdlafjeilajsdfkljaeslfjel" },
  { name: "Hoodies", image: "asdlkfjeliajsdlf;jelasjdfie" },
  { name: "Hats", image: "asl;kfjel;ajsdf;ljaskldjfads" },
  { name: "Stickers", image: "asldkjfeijasldkfje;ilasjkdfkja" }
];