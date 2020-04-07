import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import RenderProduct from "./RenderProduct";

class RenderCategories extends Component {
  render() {
    return (this.props.categories.map(c => {
      const category = c.name;
      const products = c.products;
      return (
        <div key={category}>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  {category}
                </Table.HeaderCell>
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
    }));
  }
}

export default RenderCategories;
