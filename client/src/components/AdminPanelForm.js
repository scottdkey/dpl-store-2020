import React, { Component } from 'react'
import {Form, Checkbox, Select} from 'semantic-ui-react'
// import axios from 'axios'

export default class AdminPanelForm extends Component{
  state = {
    title: '',
    description: '',
    price: 0.00,
    has_size: {},
    sizes: {},
    category: '',
    mainImage: '',
    altImage: {}
  }

  handleSubmit = () =>{
    console.log('handle submit')
    console.log(this.state)
    
    
  }

  handleChange = (e, {name, value})=>this.setState({[name]: value})
  hasSizeChange = (e, {name}) =>this.setState({[name]: !this.state.has_size})

  sizeSheetForm = () => {
    const {size, sizes}= this.state
    return(
      <>
      <Select placeholder='Select a Size' value={this.state.sizes} options={sizeOptions} />
      <Form.Input
      name={ `${size} quanity`}
      placeholder='how many in stock?'
      // value={`${size} quantity`}
      onChange={this.handleChange}
      />
      </>
    )
  }

  altImageForm = () => {
    return(
      <>
      <p>alt image form</p>
      </>
    )
  }

  noSizeForm = () => {
    const {size, sizes}= this.state
    return(
      <>
      <Form.Input
      name={ `${size} quanity`}
      placeholder='how many in stock?'
      // value={`${size} quantity`}
      onChange={this.handleChange}
      />
      </>
    )
  }

  render(){
    const {title, description, price, category, mainImage, has_size} = this.state
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group width="equal">
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
            <Form.Field
              control={Checkbox}
              label={{ children: "Does this come in multiple sizes?" }}
              name="has_size"
              checked={has_size === true}
              onClick={this.hasSizeChange}
            />
            {has_size ? this.sizeSheetForm() : this.noSizeForm()}
            <Form.Input
              label="category"
              name="category"
              placeholder="category"
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
];
