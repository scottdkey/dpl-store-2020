import React, { Component } from "react";
import { Select } from "semantic-ui-react";
import Axios from "axios";
// import axios from "axios";

class CategorySelector extends Component {
  state = {
    CategoryOptions: [],
    value: "All Catagories",
  };
  componentDidMount = async() => {
    const res = await Axios.get('/api/categories')
    const categories = res.data
    const CategoryOptions = Array.from(
      new Set(categories.map(catagory => catagory.name))
    ).map((cat, i) => {
      return { value: cat, key: i, text: cat };
    });
    this.setState({CategoryOptions})
  }

  handleChange = (e, {value}) =>{
    this.setState({ value })
    this.props.setCategory(value)
    this.props.updateProducts()
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