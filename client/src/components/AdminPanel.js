import React, { Component } from "react";
import { Header, Button, Modal } from "semantic-ui-react";
import axios from "axios";
import ProductForm from "./Forms/ProductForm";
import RenderCategories from "./AdminPanelComponents/RenderCategories";
import CategoryForm from "./Forms/CategoryForm";
import CategorySelector from "./Selectors/CategorySelector";


const categories = [
  {
    name: "T-Shirts",
    image:
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/424074/item/goods_63_424074.jpg?width=2000"
  },
  {
    name: "Hoodies",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/comfortable-hoodies-20-1555533088.jpg?crop=1xw:1xh;center,top&resize=768:*;jelasjdfie"
  },
  {
    name: "Hats",
    image:
      "https://cdn.shopify.com/s/files/1/0528/1597/products/Exosso_web_grande.jpg?v=1567298995"
  },
  {
    name: "Stickers",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81B%2B1ls383L._AC_SL1500_.jpg;ilasjkdfkja"
  }
];
export default class AdminPanel extends Component {
    state = {
      products: [],
      categories: categories,
      openForm: false,
      load: true,
      category: "All Categories"
    };

  

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  getCategories(categories){
    this.setState({
      categories
    })
  }


  deleteProduct = (id, category_id) => {
    axios
      .get("/api/products")
      .then(res => {
        this.setState({
          products: res.data,
          load: false
        });
        this.getCategories(categories)
      })
      .catch(e => console.log(e));
  }
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
        <CategoryForm categories={categories}/>
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
