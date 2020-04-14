import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import RenderProduct from "./RenderProduct";
import CategoryForm from "../Forms/CategoryForm";
import Axios from "axios";
import AdminCard from '../AdminCard'

class RenderCategories extends Component {
  notFoundMessage = () => (
    <>
      <div>Nothing Was Found!</div>
      <br />
      <br />
      <div>Please Refresh your page or</div>
      <div>create a product in this Category</div>
    </>
  );

  

  //need way to sperate products if there are all products
  //working on this later
  render() {
    const { category, products } = this.props;
    return (
      <>
        <div key={category}>
          {/* <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="4">{category}</Table.HeaderCell>
              <CategoryForm category={category} />
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
        </Table> */}
        <div style={style.productContainer}>
          {products.map(product => (
            <div style={style.product} key={product.id}>
              <AdminCard
                toggleForm={this.props.toggleForm}
                getProducts={this.props.getProducts}
                product={product}
                deleteProduct={this.props.deleteProduct}
              />
            </div>
          ))}
        </div>
        </div>
      </>
    );
  }
}
const style={
  productContainer:{
    display:'flex',
    flexWrap:'wrap',
    margin:'1% 5%',
    justifyContent:'center',
    marginBottom:'5%'
  },
  product:{
    width:'24%',
    boxShadow: '0px 3px 10px #cccccc',
    borderRadius: '10px',
    padding:'1%',
    margin:'.5%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
  }
}

export default RenderCategories;
