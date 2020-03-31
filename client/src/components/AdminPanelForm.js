import React, { Component } from 'react'
import {Form, Checkbox} from 'semantic-ui-react'

export default class AdminPanelForm extends Component{
  state = {
    title: '',
    description: '',
    price: 0.00,
    has_size: false,
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
              label={{ children: "Does this come in multiple sizes?"}}
              name='has_size'
              checked={has_size === true}
              onClick={this.hasSizeChange}
            />
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

            <Form.Button>Submit</Form.Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}