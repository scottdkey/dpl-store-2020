import React, { Component } from "react";
import { Form, Modal} from "semantic-ui-react";
import SizeForm from "./Product_size_form";
import axios from "axios";
import ImageForm from "./Product_ImageForm";
// import CategoryForm from "./CategoryForm";
// import axios from 'axios'

export default class AdminProduct extends Component {
  constructor(props) {
    super(props);
    const {product}  = this.props;
    this.getCategoryOptions()
    if (product === undefined) {
      this.state = {
        title: "",
        description: "",
        price: 0.0,
        category: "",
        main_image: "",
        alt_image: [],
        sizes: {},
        options: []
      };
    } else {
      this.state = {
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category_id,
        main_image: product.main_image,
        sizes: product.sizes,
        alt_image: product.alt_image,
        options: []
      };
    }
  }

    getCategoryOptions = async() =>{
    const res = await axios.get(`/api/categories/`)
    const options = res.data.map( c => (
      {key: c.name, text: c.name, value: c.id}
    ))
    this.setState({
      options
    })
  }



  handleSubmit = () => {
    const {title, description, price, category, main_image, alt_image, sizes} = this.state
    const currentState = {title, description, price, main_image, alt_image, sizes}
    if (this.props.product === undefined) {
      axios
        .post(`/api/categories/${category}/products`, currentState)
        .then((res) => {
          this.props.toggleForm();
          this.props.getProducts();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .put(`/api/categories/${category}/products/${this.props.product.id}`, currentState)
        .then((res) => {
          this.props.toggleForm();
          this.props.getProducts()
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  setSizes = (array) => {
    const sizes = array.reduce(
      (obj, item) =>
        Object.assign(obj, { [item.size]: parseInt(item.quantity) }),
      {}
    );
    this.setState({ sizes });
  };

  handleChange = (e, { name, value }) => {
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    const { title, description, price, category, main_image, alt_image, options } = this.state;
    return (
      <Modal.Content>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group
            width="equal"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Form.Input
              label="title"
              name="title"
              placeholder="Product Title"
              value={title}
              onChange={this.handleChange}
              required
            />
            <Form.TextArea
              label="description"
              name="description"
              placeholder="Product description"
              value={description}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="price"
              name="price"
              placeholder="price"
              value={price}
              onChange={this.handleChange}
              required
            />
            <SizeForm sizes={this.state.sizes} setSizes={this.setSizes} />
            <Form.Select
              label="category"
              name="category"
              placeholder="category"
              options={options}
              value={category}
              onChange={this.handleChange}
              required
            />
            <ImageForm alt_image={alt_image} main_image={main_image}{...this.props}/>
          </Form.Group>
          <Form.Button type="submit">Submit</Form.Button>
          <Form.Button color="red" onClick={this.props.toggleForm}>
            Cancel
          </Form.Button>
        </Form>
      </Modal.Content>
    );
  }
}