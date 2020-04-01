import React, { Component } from "react";
import { Form, Checkbox, Select } from "semantic-ui-react";
// import axios from 'axios'

export default class AdminPanelForm extends Component {
  state = {
    formValues: {
      title: "",
      description: "",
      price: 0.0,
      category: "",
      mainImage: "",
      altImage: {}
    }, 
    sizes: [],
    // numAltImages: [],
  };

  handleSubmit = () => {
    console.log("handle submit");
    console.log(this.state);
  };
  // componentDidMount(){
  //   this.setState({
  //     sizes: sizeOptions
  //   })
  // }

  handleChange = (e, { name, value }) => {
    console.log(name)
    console.log(value)
   this.setState({ formValues: { ...this.state.formValues, [name]: value} });
  };
  hasSizeChange = (e, { name }) =>
    this.setState({ [name]: !this.state.has_size });

  sizeChange = (name, value, index) => {
    const newSize = this.state.sizes[index];
    newSize[name] = value;
    const sizes = this.state.sizes.map((size, i) => (
      i === index ? newSize : size
    ));
    // debugger
    this.setState({ sizes });
  }

  sizeForm = ({ size, index }) => {
    return (
      <>
        <Select
          selection
          placeholder="Select a Size"
          value={size.size}
          options={sizeOptions}
          name="size"
          onChange={(e, data) => this.sizeChange(data.name, data.value, index)}
          />
        <Form.Input
          name={size.quantity}
          placeholder="how many in stock?"
          value={size.quantity}
          name="quantity"
          onChange={(e) => this.sizeChange(e.target.name, e.target.value, index)}
        />
      </>
    );
  };

  altImageForm = () => {
    return (
      <>
        <p>alt image form</p>
      </>
    );
  };

  // noSizeForm = () => {
  //   const { size, sizes } = this.state;
  //   return (
  //     <>
  //       <Form.Input
  //         name={`${size} quanity`}
  //         placeholder="how many in stock?"
  //         // value={`${size} quantity`}
  //         onChange={this.handleChange}
  //       />
  //     </>
  //   );
  // };

  addSize = () => {
    const sizes = [...this.state.sizes, { size: "xs", quantity: 0 }];
    this.setState({ sizes });
  }

  renderSizes = () => this.state.sizes.map((size, index) => (
    <this.sizeForm size={size} index={index} />
  ));

  render() {
    const {
      title,
      description,
      price,
      category,
      mainImage,
      has_size
    } = this.state.formValues;
    // debugger
    ///////
    ///////
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
            {/* <Form.Field
              control={Checkbox}
              label={{ children: "Does this come in multiple sizes?" }}
              name="has_size"
              checked={has_size === true}
              onClick={this.hasSizeChange}
            /> */}
            { this.renderSizes() }
            <button onClick={this.addSize}>Add New Size</button>
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

const sizeOptions = [
  { key: "small", value: "small", text: "Small" },
  { key: "medium", value: "medium", text: "Medium" },
  { key: "large", value: "large", text: "Large" },
  { key: "noSize", value: "noSize", text: "No Size" },
];
const options = [
  { key: "t", text: "T-Shirts", value: "T-Shirts" },
  { key: "ho", text: "Hoodies", value: "Hoodies" },
  { key: "ha", text: "Hats", value: "Hats" },
  { key: "s", text: "Stickers", value: "Stickers" }
];
