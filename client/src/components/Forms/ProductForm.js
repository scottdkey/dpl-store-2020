import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import SizeForm from "./Product_size_form";
import axios from "axios";
import AltImageForm from "./Product_AltImage_Form";
// import axios from 'axios'

export default class AdminProduct extends Component {
  state = {
    title: "",
    description: "",
    price: 0.0,
    category: "",
    mainImage: "",
    altImage: {},
    sizes: []
    // numAltImages: [],
  };

  componentDidMount() {
    const { product } = this.props;
    if (product === undefined) {
      console.log("normal");
    } else {
      this.setState({
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
        mainImage: product.mainImage,
        altImage: product.altImage,
        sizes: product.sizes
      });
    }
  }

  handleSubmit = () => {
    const { id } = this.props.product;
    if (this.props.product === undefined) {
      axios
        .post(`/api/products`, this.state)
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
          `/api/products/${id}`,
          this.state)
        .then(res => {
            this.props.toggleEdit();
            this.props.getProducts();
          })
          .catch(e => {
          console.log(e);
        }
          )
  }}

  setSizes = sizesArray => {
    this.setState({ sizes: sizesArray });
  };

  handleChange = (e, { name, value }) => {
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    const {
      title,
      description,
      price,
      category,
      mainImage,
      sizes
    } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group
            width="equal"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Form.Input
              label="title"
              name="title"
              placeholder="Product Title"
              value={title}
              onChange={this.handleChange}
              required
            />
            <Form.TextArea
              label="description"
              name="description"
              placeholder="Product description"
              value={description}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="price"
              name="price"
              placeholder="price"
              value={price}
              onChange={this.handleChange}
              required
            />
            <SizeForm sizes={sizes} setSizes={this.setSizes} />
            <Form.Select
              label="category"
              name="category"
              placeholder="category"
              options={options}
              value={category}
              onChange={this.handleChange}
              required
            />

            <Form.Input
              label="mainImage"
              name="mainImage"
              placeholder="mainImage"
              value={mainImage}
              onChange={this.handleChange}
              required
            />
            <AltImageForm />
          </Form.Group>
          <Form.Button type="submit">Submit</Form.Button>
        </Form>
      </>
    );
  }
}

const options = [
  { key: "t", text: "T-Shirts", value: "T-Shirts" },
  { key: "ho", text: "Hoodies", value: "Hoodies" },
  { key: "ha", text: "Hats", value: "Hats" },
  { key: "s", text: "Stickers", value: "Stickers" }
];