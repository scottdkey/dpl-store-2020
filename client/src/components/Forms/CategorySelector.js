import React, { Component } from "react";
import { Modal, Select, Button } from "semantic-ui-react";
import axios from "axios";

class CategorySelector extends Component {
  state = {
    CategoryOptions: [],
    // Categories: [],
    value: "All Catagories"
  };
  componentDidMount() {
    const CategoryOptions = Array.from(
      new Set(categories.map(catagory => catagory.name))
    ).map((cat, i) => {
      return { value: cat, key: i + 1, text: cat };
    });
    CategoryOptions.unshift({value: "All_Categories", key: 0, text: "All Categories"})
    this.setState({
      CategoryOptions: CategoryOptions
    })
  }

  updateProducts = () => {
    const {value, CategoryOptions} = this.state
    axios.get("/api/products").then(res => {
      if (value === "All_Categories") {
        this.props.searchUpdate(res.data);
      } else {
        let category = CategoryOptions.filter(cat => value === cat.value);
        const searchTerm = category[0].value;
        console.log(searchTerm)
        let currentProducts = res.data.filter(
          product => {
            console.log(product.category)
            return product.category === searchTerm;
          }
        );
        
        this.props.searchUpdate(currentProducts);
      }
    })
    
    
  }

  handleChange = (e, {value}) =>{
    this.setState({ value })
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
      <Button onClick={this.updateProducts} color='green'>Go</Button>
      </>
    )
  }
}

export default CategorySelector

const categories = [
  { name: "T-Shirts", image: "ksdlafjeilajsdfkljaeslfjel" },
  { name: "Hoodies", image: "asdlkfjeliajsdlf;jelasjdfie" },
  { name: "Hats", image: "asl;kfjel;ajsdf;ljaskldjfads" },
  { name: "Stickers", image: "asldkjfeijasldkfje;ilasjkdfkja" }
];
