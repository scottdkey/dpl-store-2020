import React, { Component } from "react";
import { Form, Modal, Button, Icon } from "semantic-ui-react";
import Dropzone from "react-dropzone";

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    const categories = this.props.categories;
    this.state = {
      categories: categories,
      editing: false
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {
    console.log(this.props);
  }

  componentDidMount() {
    this.setState({
      categories: this.props.categories
    });
  }
  addCategory = () => {
    const categories = [
      ...this.state.categories,
      { name: "New", file: "newFile" }
    ];
    this.setState({
      categories
    });
  };

  updateCategories() {}

  handleSubmit = e => {
    e.preventDefault();
    const {
      categories: { name, file }
    } = this.state;
  };
  handleChange = (name, value, index, e) => {
    console.log(e)
    console.log(name, value, index);
    const newCategory = this.state.categories[index];
    newCategory[name] = value;
    const categories = this.state.categories.map((category, i) =>
      i === index ? newCategory : category
    );
    this.setState({ categories });
    this.updateCategories();
  };

  categoryFormat = ({ category, index }) => {
    console.log(this.state)
    return (
      <Modal.Content>
        <div id={`${category}-${index}`}>
        <Form.Input
          palceholder="Category Name"
          name="name"
          value={category.name}
          onChange={e => this.handleChange(e.target.name, e.target.value, index)}
        />
        <Dropzone onDrop={this.onDrop} multiple={false}>
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
        </div>
      </Modal.Content>
    );
  };
  onDrop() {}
  generateForm = () =>
    this.props.categories.map((category, index) => (
      <this.categoryFormat category={category} index={index} />
    ));

  render() {
    return (
      <>
        <Modal trigger={<Button>Modify Categories</Button>}>
        <Form>
          {this.generateForm()}
          <Form.Button type="submit">Submit</Form.Button>
          <Form.Button onClick={this.addCategory}>
            <Icon name="plus" />
          </Form.Button>
        </Form>
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
  }
};
