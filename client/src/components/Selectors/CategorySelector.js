import React, { Component } from "react";
import { Select } from "semantic-ui-react";
import axios from "axios";

class CategorySelector extends Component {
  state = {
    CategoryOptions: [],
    value: "All Catagories",
  };
  componentDidMount = async() => {
    const res = await axios.get('/api/categories')
    const categories = res.data
    const CategoryOptions = Array.from(
      new Set(categories.map(catagory => catagory.name))
    ).map((cat, i) => {
      return { value: cat, key: i, text: cat };
    })
    CategoryOptions.unshift({value: "All Products", key: 100, text: "All Products"})
    this.setState({CategoryOptions})
  }

  handleChange = (e, {value}) =>{
    this.setState({ value })
    this.props.setCategory(value)
    this.props.updateProducts()
  }

  render(){
    const { CategoryOptions} = this.state
    return(
      <>
      <Select
      selection
      name="category"
      onChange={this.handleChange}
      placeholder="Select Category"
      options={CategoryOptions}
      />
      </>
    )
  }
}

export default CategorySelector