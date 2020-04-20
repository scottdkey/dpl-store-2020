import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import axios from "axios";
import ProductForm from "./Forms/ProductForm";
import RenderCategories from "./AdminPanelComponents/RenderCategories";
import CategorySelector from "./Selectors/CategorySelector";
import CategoryForm from "./Forms/CategoryForm";

export default class AdminPanel extends Component {
  state = {
    products: [],
    categories: [],
    openForm: false,
    openCategoryForm: false,
    load: true,
    category: "All Products",
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

  deleteProduct = (id, category_id) => {
    this.state.products.filter(product => {
      if (product.id !== id) {
        return product;
      }
    });
    axios
      .delete(`/api/categories/${category_id}/products/${id}`)
      .then(res => this.getProducts())
      .catch(error => console.log(error));
  };
  updateProducts = async () => {
    const res = await axios.get("/api/products");
    const category = this.state.categories.filter(category => {
      if (this.state.category === category.name) {
        return category;
      }
    });
    const products = res.data;
    if (this.state.category === "All Products") {
      this.setState({ products });
    } else {
      const products = res.data.filter(product => {
        return category[0].id === product.category_id;
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
    const { openForm, categories, load, products, category } = this.state;
    return (
      <>
        <div style={style.headerContainer}>
          <h1 style={style.header}>Admin Panel</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1% 5%"
          }}
        >
          <div>
            <CategorySelector
              products={products}
              getProducts={this.getProducts}
              getCategories={this.getCategories}
              setCategory={this.setCategory}
              updateProducts={this.updateProducts}
              categories={categories}
            />
          </div>
          <div>
            {category === "All Products" || category === "Featured" ? (
              <>
                <div style={{ display: "inline-block" }}>
                  <h1>{category}</h1>
                </div>
              </>
            ) : (
              <div
                style={{
                  color: "#4575c4",
                  display: "flex",
                  cursor: "pointer"
                }}
              >
                <h1>{category}</h1>
                <div style={{marginLeft: "10px"}}>
                  <CategoryForm category={category} />
                </div>
              </div>
            )}
          </div>
          <div>
            <Button style={style.button} onClick={this.toggleForm}>
              New Product
            </Button>
            <CategoryForm />
          </div>
        </div>
        <Modal open={openForm}>
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

const style = {
  headerContainer: {
    backgroundColor: "#4901DB",
    color: "white",
    padding: "20px 50px",
    textAlign: "right"
  },
  header: {
    margin: "0px"
  },
  button: {
    borderRadius: "30px",
    color: "#4901DB",
    backgroundColor: "rgba(74,1,219, .03)"
  }
};
