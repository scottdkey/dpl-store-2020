import React, { Component } from "react";
import { Header, Table, Button, Icon } from "semantic-ui-react";
import axios from 'axios'
import AdminPanelForm from "./AdminPanelForm";

export default class AdminPanel extends Component {
  state = {products: [], categories: []}

  getProducts() {
    axios.get('/api/products').then(res => {
      this.setState({ products: res.data })
      this.putProductsInCategories()
    }).catch(e => console.log(e))
  }

  deleteProduct = (id) => {
    axios.delete(`/api/products/${id}`)
      .then(res => this.getProducts())
      .catch(error => console.log(error))
  }

  putProductsInCategories = () => {
    const tShirts = []
    const hoodies = []
    const hats = []
    const stickers = []
    this.state.products.map(product => {
      if(product.category === 'T-Shirt') {tShirts.push(product)}
      else if (product.category === 'Hoodie') {hoodies.push(product)}
      else if (product.category === 'Hats') {hats.push(product)}
      else {stickers.push(product)}
    })
    this.setState({
      categories: [
        { name: 'T-Shirts', products: tShirts },
        { name: 'Hoodies', products: hoodies },
        { name: 'Hats', products: hats },
        { name: 'Stickers', products: stickers },
      ]
    })
  }

  renderCategories = () =>
    this.state.categories.map(c => {
      const category = c.name;
      const products = c.products;
      return (
        <>
          <Table key={category} celled striped>
            <Table.Header>
              <Table.HeaderCell colSpan="3">{category}</Table.HeaderCell>
            </Table.Header>
            <Table.Body>
              {products.map(product => {
                return (
                  <Table.Row key={product.name}>
                    <Table.Cell collapsing>{product.name}</Table.Cell>
                    <Table.Cell>{product.description}</Table.Cell>
                    <Table.Cell collapsing textAlign="right">
                      ${product.price}
                    </Table.Cell>
                    <Button onClick={() => this.deleteProduct(product.id)}>
                      <Icon name="trash alternate" />
                    </Button>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </>
      );
    });

  render() {
    if(this.state.products.length === 0 ){
      this.getProducts()
    }
    return (
      <>
        <Header as="h1" textAlign="center">
          Admin panel
        </Header>
        <AdminPanelForm />
        {this.renderCategories()}
      </>
    );
  }
}

