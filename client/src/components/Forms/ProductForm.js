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
    main_image: "",
    alt_image: {},
    sizes: []
    // numAltImages: [],
  };

  componentDidMount() {
    if (this.state === undefined) {
      console.log("creating");
    } else {
      this.setState({
        title: this.state.title,
        description: this.state.description,
        price: this.state.price,
        category: this.state.category,
        main_image: this.state.mainImage,
        alt_image: this.state.altImage,
        sizes: this.state.sizes
      });
    }
  }

  handleSubmit = () => {
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
      console.log("editing submitted")
      axios
        .put(
          `/api/products/${this.props.product.id}`,
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
      main_image,
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
              label="Main Image"
              name="main_image"
              placeholder="Main Image"
              value={main_image}
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
