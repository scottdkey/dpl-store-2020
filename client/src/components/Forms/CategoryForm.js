import React, { Component } from "react";
import { Form, Modal, Button, Icon, FormButton } from "semantic-ui-react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { Image, CloudinaryContext } from "cloudinary-react";

class CategoryForm extends Component {
  state = {
    name: "",
    image: "",
    id: null,
    editing: false
  };

  componentDidMount() {
    this.setCategory();
  }
  setCategory = async () => {
    const res = await axios.get(`/api/categories`);
    const category = res.data.filter(
      category => category.name === this.props.category
    )[0];
    this.setState({
      name: category.name,
      image: category.image,
      id: category.id
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`/api/categories/${this.state.id}`, {
        name: this.state.name,
        image: this.state.image
      })
      .then
      //close form
      ()
      .catch();
  };
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  categoryFormat = () => {
    const { category } = this.props;
    const { name, image, id } = this.state;
    return (
      <Modal.Content>
        <div id={`${category}-${id}`}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              palceholder="Category Name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <Dropzone onDrop={file => this.onDrop(file, id)} multiple={false}>
              {({ getRootProps, getInputProps, isDragActive }) => {
                return (
                  <div {...getRootProps()} style={styles.dropzone}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>drop files here!</p>
                    ) : (
                      <p>Click to add a picture or drag here</p>
                    )}
                  </div>
                );
              }}
            </Dropzone>
            <Button color="red">Cancel</Button>
            <Form.Button>Submit</Form.Button>
          </Form>
        </div>
      </Modal.Content>
    );
  };
  onDrop = (File, id) => {
    const image = File[0].path;
    this.setState({
      image
    });
    console.log(image)
    console.log(id)
  };

  render() {
    return (
      <>
        <Modal trigger={<Button>Edit</Button>}>
          {this.categoryFormat()}
        </Modal>
      </>
    );
  }
}

export default CategoryForm;

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px"
  },
  image: {
    height: "150px",
    width: "150px",
    display: "flex"
  }
};
