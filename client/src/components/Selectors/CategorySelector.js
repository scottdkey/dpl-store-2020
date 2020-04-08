import React, { Component } from "react";
import { Select } from "semantic-ui-react";
// import axios from "axios";

class CategorySelector extends Component {
  state = {
    CategoryOptions: [],
    value: "All Catagories",
  };
  componentDidMount() {
    const {categories} = this.props
    const CategoryOptions = Array.from(
      new Set(categories.map(catagory => catagory.name))
    ).map((cat, i) => {
      return { value: cat, key: i + 1, text: cat };
    });
    CategoryOptions.unshift(AllCategories)
    this.setState({
      CategoryOptions: CategoryOptions
    })
  }

  handleChange = (e, {value}) =>{
    this.setState({ value })
    this.props.updateProducts(value)
  }

  render(){
    const { CategoryOptions, value } = this.state
    return(
      <>
      <Select
      selection
      name="category"
      onChange={this.handleChange}
      placeholder="Select Category"
      options={CategoryOptions}
      value={value}
      />
      </>
    )
  }
}

export default CategorySelector
const AllCategories = {value: "All Categories", key: 0, text: "All Categories"}