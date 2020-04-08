import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import RenderProduct from "./RenderProduct";

class RenderCategories extends Component {
  state = {
    products: this.props.products,
    category: this.props.category,
    load: this.props.load
  };

  notFoundMessage = ()=> (
    <>
    <div>Nothing Was Found!</div>
    <br/>
    <br/>
    <div>Please Refresh your page or</div>
    <div>create a product in this Category</div>
    </>
  )

  //need way to sperate products if there are all products
  //working on this later

  render(){
    const {category, products, load } = this.props;
    if (products.length <= 0) {
      return (<h2>{load ? "Loading" : this.notFoundMessage()}</h2>)
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
                    deleteProduct={this.props.deleteProduct}
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
