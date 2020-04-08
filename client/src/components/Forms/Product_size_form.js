import React, { Component } from "react";
import { Form, Select, Button } from "semantic-ui-react";

export default class SizeForm extends Component {
  state = {
    sizes: []
  };

  componentDidMount(){
    const originalSizes = Object.entries(this.props.sizes)
    const sizes = originalSizes.map(size =>{
      return({size :size[0], quantity: size[1]})
    })
    this.setState({
      sizes
    })
    
  }
  addSize = () => {
    const sizes = [...this.state.sizes, { size: "noSize", quantity: 0 }];
    if(sizes.length <= 4){
    this.setState({ sizes });
    } else{
      alert('maximum sizes reached')
    }
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
      <Form.Group key={size}>
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
      </Form.Group>
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
