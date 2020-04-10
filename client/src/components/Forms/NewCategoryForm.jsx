import React from 'react'
import { Component } from 'react';

export default class NewCategoryForm extends Component {
  state = {
    category: {},
    editing: false
  }
    addCategory = () => {
    const categories = [...this.state.categories, { name: "New", file: "" }];
    this.setState({
      categories
    });
    this.mapCategories();
  };
    toggleEdit = e => {
    this.setState({
      editing: !this.state.editing
    });
  };
}