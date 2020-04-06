import React, { Component } from 'react'
import {Table, Icon, Modal} from 'semantic-ui-react'
import ProductForm from './Forms/ProductForm'

class RenderProduct extends Component {
  state = { editing: false };

  toggleEdit = () => {
    this.setState({editing: !this.state.editing });
    console.log(this.props)
  };

  

  render() {
    const {editing} = this.state
    const { product } = this.props;
    return (
      <>
        <Table.Cell collapsing>{product.title}</Table.Cell>
        <Table.Cell>{product.description}</Table.Cell>
        <Table.Cell collapsing textAlign="right">
          ${product.price}
        </Table.Cell>
        <Table.Cell onClick={() => this.toggleEdit()}><Icon name="edit"/></Table.Cell>
        <Table.Cell onClick={() => this.props.deleteProduct(product.id)}>
          <Icon name="trash alternate" />
        </Table.Cell>
        <Modal open={editing}>
          <ProductForm {...this.props} toggleEdit={this.toggleEdit} />
        </Modal>
      </>
    );
  }
}

export default RenderProduct