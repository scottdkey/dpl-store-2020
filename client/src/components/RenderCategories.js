import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import RenderProduct from "./RenderProduct";

class RenderCategories extends Component {
  state = {
    products: this.props.products,
    category: this.props.category,
    load: this.props.load
  };

  render(){
    const { products, category, load } = this.props;
    if (products.length <= 0) {
      return (<h2>{load ? "Loading" : "Please Pick a Category"}</h2>)
    } else {
      return (
        <div key={category}>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="4">{category}</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {products.map(product => (
                <Table.Row key={product.id}>
                  <RenderProduct
                    toggleForm={this.props.toggleForm}
                    getProducts={this.props.getProducts}
                    product={product}
                  />
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      );
    }
  }
}

export default RenderCategories;
