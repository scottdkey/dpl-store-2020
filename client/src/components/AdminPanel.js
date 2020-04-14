import React, { Component } from "react";
import { Header, Button, Modal } from "semantic-ui-react";
import axios from "axios";
import ProductForm from "./Forms/ProductForm";
import RenderCategories from "./AdminPanelComponents/RenderCategories";
// import CategoryForm from "./Forms/CategoryForm";
import CategorySelector from "./Selectors/CategorySelector";

export default class AdminPanel extends Component {
  state = {
    products: [],
    categories: [],
    openForm: false,
    load: true,
    category: "All Categories",
    categoryOptions: []
  };

  componentDidMount() {
    this.getCategories();
    this.getCategoryOptions();
    this.getProducts();
  }
  getCategoryOptions = async () => {
    const res = await axios.get(`/api/categories/`);
    const categoryOptions = res.data.map(c => ({
      key: c.name,
      text: c.name,
      value: c.id
    }));
    this.setState({
      categoryOptions
    });
  };

  getCategories = async () => {
    const res = await axios.get("/api/categories");
    this.setState({
      categories: res.data
    });
  };

  getProducts = async () => {
    const res = await axios.get(`/api/products`);
    this.setState({
      products: res.data
    });
  };

  deleteProduct = id => {
    const products = this.state.products.filter(product => {
      if (product.id !== id) {
        return product;
      }
    });
    axios
      .delete(`/api/products/${id}`)
      .then(res => this.searchUpdate(products))
      .catch(error => console.log(error));
  };
  updateProducts = async () => {
    const res = await axios.get("/api/products");
    const category_id = this.state.categories.filter(category => {
      if (category.name === this.state.category) {
        return category;
      }
    })[0].id;
    if (category_id === 1) {
      const products = res.data;
      this.setState({ products });
    } else {
      const products = res.data.filter(product => {
        return category_id === product.category_id;
      });
      this.setState({ products });
    }
  };
  setCategory = category => {
    this.setState({ category });
  };

  toggleForm = () => {
    this.setState({ openForm: !this.state.openForm });
  };

  render() {
    const {
      openForm,
      categories,
      load,
      products,
      category,
      categoryOptions
    } = this.state;
    return (
      <>
        <Header as="h1" textAlign="center">
          Admin panel
        </Header>
        <CategorySelector
          products={products}
          getProducts={this.getProducts}
          getCategories={this.getCategories}
          setCategory={this.setCategory}
          updateProducts={this.updateProducts}
          categories={categories}
        />
        <Button onClick={this.toggleForm}>New Product</Button>
        <Modal open={openForm} onClose={this.toggleForm}>
          <ProductForm
            toggleForm={this.toggleForm}
            getProducts={this.getProducts}
            openForm={openForm}
          />
        </Modal>
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
