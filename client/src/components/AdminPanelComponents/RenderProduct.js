import React from 'react'
import { Icon, Modal, Image, } from 'semantic-ui-react'
import ProductForm from '../Forms/ProductForm'
import axios from 'axios'

export default class AdminCard extends React.Component {
  state = { pictureHeight: ((window.innerWidth) / 5.5), editing: false, }

  toggleEdit = () => { this.setState({ editing: !this.state.editing }); };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    if (this.props.product.featured === true) {
      document.getElementById(`featured=${this.props.product.id}`).checked = true
    }
  }
  handleResize = () => { this.setState({ pictureHeight: ((window.innerWidth) / 5.5) }) }

  toggleFeatured = () => {
    const { product } = this.props
    this.setState({ featured: !this.state.featured })
    axios.put(`/api/categories/${product.category_id}/products/${product.id}`, { ...product, featured: !product.featured })
      .catch(e => console.log(e))
  }

  render() {
    const { product, deleteProduct } = this.props
    const { pictureHeight, editing } = this.state
    return (
      <div key={`product-${product.id}`}>
    {/* photo */}
        <div>
          <div style={{ ...style.photoHolder, height: pictureHeight }} >
            <div style={style.crop}>
              <Image style={style.photo} src={`${product.main_image}`} />
            </div>
          </div>

    {/* buttons */}
          <div style={style.btnHolder}>
            <div onClick={() => { deleteProduct(product.id, product.category_id) }} style={{ ...style.button, color: '#990000' }}>
              <Icon name='trash alternate' />
            </div>
            <div onClick={this.toggleEdit} style={{ ...style.button, color: '#4575c4' }}>
              <Icon name="edit" />
            </div>
            <div>
              <input
                type='checkbox'
                style={style.inputBox}
                onClick={this.toggleFeatured}
                id={`featured=${product.id}`}
              />
              <label>Featured</label>
            </div>
          </div>

    {/* information */}
          <div style={style.informationContainer}>
            <div>
              <h3 style={{ margin: '0px' }}>{product.title}</h3>
              <h5 style={{ margin: '0px' }}>{product.description}</h5>
            </div>
            <div>
              <h3>${product.price}</h3>
            </div>
          </div>
        </div>

    {/* modal */}
        <Modal open={editing}>
          <ProductForm {...this.props} toggleForm={this.toggleEdit} editing={editing} />
        </Modal>
      </div>
    )
  }
}
const style = {
  photo: {
    display: 'block',
    minWidth: '100%',
    minHeight: '100%',
    margin: ' auto',
    position: 'absolute',
    top: '-100%',
    right: '-100%',
    bottom: '-100%',
    left: '-100%',
  },
  crop: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  photoHolder: {
    background: '#fff',
    display: 'inline-block',
    verticalAlign: 'top',
    width: '100%',
    marginRight: '.5em',
    marginBottom: '.3em',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  informationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5%'
  },
  button: {
    padding: '1%',
    backgroundColor: 'white',
    width: '50%',
    textAlign: 'center',
    cursor: 'pointer'
  },
  btnHolder: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1%',
    marginTop: '2%'
  },
  inputBox: {
    width: '50%',
    padding: '1%',
    margin: '1%',
  }
}