import React, { Component } from "react";
import { Form, Select, Button } from "semantic-ui-react";

export default class SizeForm extends Component {
  state = {
    sizes: this.props.sizes
  };
  addSize = () => {
    const sizes = [...this.state.sizes, { size: "NoSize", quantity: 0 }];
    this.setState({ sizes });
  };
  

  sizeChange = (name, value, index) => {
    const newSize = this.state.sizes[index];
    newSize[name] = value;
    const sizes = this.state.sizes.map((size, i) =>
      i === index ? newSize : size
    );
    this.setState({ sizes });
    this.props.setSizes(sizes)
  };

  

  sizeDropDownFormat = ({ size, index }) => {

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
          placeholder="how many in stock?"
          value={size.quantity}
          name="quantity"
          onChange={e => this.sizeChange(e.target.name, e.target.value, index)}
        />
      </>
    );
  };
  renderSizes = () =>
    this.state.sizes.map((size, index) => (
      <this.sizeDropDownFormat size={size} index={index} />
    ));

  render() {

    return (
      <>
        <Button as='div' onClick={this.addSize}>Add New Size</Button>
        {this.renderSizes()}
      </>
    );
  }
}

const sizeOptions = [
  { key: "noSize", value: "noSize", text: "No Size" },
  { key: "small", value: "small", text: "Small" },
  { key: "medium", value: "medium", text: "Medium" },
  { key: "large", value: "large", text: "Large" },
  
];
