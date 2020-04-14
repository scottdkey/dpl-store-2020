import React, { Component } from "react";
import RenderProduct from "./RenderProduct";

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
          <div style={style.productContainer}>
            {products.map(product => (
              <div style={style.product} key={product.id}>
                <RenderProduct
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
const style = {
  productContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '1% 5%',
    marginBottom: '5%'
  },
  product: {
    width: '24%',
    boxShadow: '0px 3px 10px #cccccc',
    borderRadius: '10px',
    padding: '1%',
    margin: '.5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}

export default RenderCategories;
