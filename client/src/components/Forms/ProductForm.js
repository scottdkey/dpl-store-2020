import React, { Component } from "react";
import { Form, Modal } from "semantic-ui-react";
import SizeForm from "./ProductSizeForm";
import axios from "axios";
import MainImageForm from "./ProductMainImageForm";
import AltImageForm from "./ProductAltImageForm";

class ProductForm extends Component {
  state = {
    title: "",
    description: "",
    price: 0.0,
    category_id: "",
    main_image: "",
    sizes: {},
    options: []
  };

  componentDidMount() {
    this.getCategoryOptions();
    this.getProduct();
  }

  getProduct = async () => {
    const { product } = this.props;
    if (product === undefined) {
      //do nothing
    } else {
      const res = await axios.get(`/api/categories/${product.category_id}/products/${product.id}`)
      this.setState({
        title: res.data.title,
        description: res.data.description,
        price: res.data.price,
        category_id: res.data.category_id,
        main_image: res.data.main_image,
      })
    }

  };

  getCategoryOptions = async () => {
    const res = await axios.get(`/api/categories/`);
    const options = res.data.map(c => ({
      key: c.name,
      text: c.name,
      value: c.id
    }));
    this.setState({
      options
    });
  };

  handleSubmit = () => {
    const {
      title,
      description,
      price,
      category_id,
      main_image,
      sizes
    } = this.state;
    const currentState = {
      title,
      description,
      price,
      main_image,
      sizes
    };
    if (this.props.product === undefined) {
      axios
        .post(`/api/categories/${category_id}/products`, currentState)
        .then(res => {
          this.props.toggleForm();
          this.props.getProducts();
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .put(
          `/api/categories/${category_id}/products/${this.props.product.id}`,
          currentState
        )
        .then(res => {
          this.props.toggleForm();
          this.props.getProducts();
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  setSizes = array => {
    const sizes = array.reduce(
      (obj, item) =>
        Object.assign(obj, {
          [item.size]: parseInt(item.quantity)
        }),
      {}
    );
    this.setState({ sizes });
  };

  handleChange = (e, { name, value }) => {
    this.setState({ ...this.state, [name]: value });
  };

  setMainImage = newURL => {
    this.setState({
      main_image: newURL
    });
  };

  render() {
    const {
      title,
      description,
      price,
      category_id,
      main_image,
      options
    } = this.state;
    return (
      <Modal.Content>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group
            width="equal"
            style={{ display: "flex", flexDirection: "column", }}
          >
            <Form.Input
              label="Title"
              name="title"
              placeholder="Product Title"
              value={title}
              onChange={this.handleChange}
              required
            />
            <br/>
            <Form.TextArea
              label="Description"
              name="description"
              placeholder="Product description"
              value={description}
              onChange={this.handleChange}
              required
            />
            <br/>
            <Form.Input
              label="Price"
              name="price"
              placeholder="price"
              value={price}
              onChange={this.handleChange}
              required
            />
            <br/>
            <SizeForm sizes={this.state.sizes} setSizes={this.setSizes} />
            <br/>
            <Form.Select
              label="Category"
              name="category_id"
              placeholder="Pick a category"
              options={options}
              value={category_id}
              onChange={this.handleChange}
              required
            />
            <br/>
            <div style={styles.imageArea}>
              <MainImageForm
                main_image={main_image}
                {...this.props}
                setMainImage={this.setMainImage}
              />
              <br/>
              <AltImageForm {...this.props} />
            </div>
          </Form.Group>
          <Form.Button type="submit" style={styles.submitBtn}>Submit</Form.Button>
          <Form.Button onClick={this.props.toggleForm} style={styles.cancelBtn}>
            Cancel
          </Form.Button>
        </Form>
      </Modal.Content>
    );
  }
}

export default ProductForm

const styles = {
  imageArea: {
    width: "80%",
    margin: "20px",
    paddingTop: "10px",
    display: "flex"
  },
  submitBtn: {
    color: 'white',
    backgroundColor: '#4901DB',
    borderRadius: '30px',
    width:'150px',
    padding:'2%',
    cursor:'pointer'
  },
  cancelBtn: {
    color: '#4901DB',
    backgroundColor:'lightgrey',
    borderRadius: '30px',
    width:'150px',
    padding:'2%',
    cursor:'pointer'
  },
};
