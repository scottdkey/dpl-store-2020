import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import SizeForm from './sizeForm'
import Axios from "axios";
// import axios from 'axios'

export default class AdminPanelForm extends Component {
  state = {
      title: "",
      description: "",
      price: 0.0,
      category: "",
      mainImage: "",
      altImage: {},
      sizes: [],
    // numAltImages: [],
  };

  handleSubmit = () => {
    console.log("handle submit");
    console.log(this.state);
    Axios.post(`/api/products`, (this.state)).then( res =>{
      this.props.toggleForm();
      this.props.getProducts()
    }).catch( err => {
      console.log(err)
    })
  };

  setSizes = (sizesArray) =>{this.setState({ sizes: sizesArray})}

  handleChange = (e, { name, value }) => {
   this.setState({ ...this.state, [name]: value});
  };

  altImageForm = () => {
    return (
      <>
        <p>alt image form</p>
      </>
    );
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
          <Form.Group width="equal" style={{display: "flex", flexDirection: "column"}}>
            <Form.Input
              label="title"
              name="title"
              placeholder="Product Title"
              value={title}
              onChange={this.handleChange}
            />
            <Form.TextArea
              label="description"
              name="description"
              placeholder="Product description"
              value={description}
              onChange={this.handleChange}
            />
            <Form.Input
              label="price"
              name="price"
              placeholder="price"
              value={price}
              onChange={this.handleChange}
            />
            <SizeForm sizes={sizes} setSizes={this.setSizes}/>
            <Form.Select
              label="category"
              name="category"
              placeholder="category"
              options={options}
              value={category}
              onChange={this.handleChange}
            />

            <Form.Input
              label="mainImage"
              name="mainImage"
              placeholder="mainImage"
              value={mainImage}
              onChange={this.handleChange}
            />
            {this.altImageForm()}

            <Form.Button>Submit</Form.Button>
          </Form.Group>
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
