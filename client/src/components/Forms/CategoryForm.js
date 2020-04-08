import React, { Component } from "react";
import { Form, Modal, Button, Icon } from "semantic-ui-react";
import Dropzone from "react-dropzone";

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    const categories = this.props.categories;
    this.state = {
      categories,
      editing: false
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {
    console.log(this.props);
  }

  toggleEdit = e => {
    this.setState({
      editing: !this.state.editing
    });
  };
  addCategory = () => {
    const categories = [...this.state.categories, { name: "New", file: "" }];
    this.setState({
      categories
    });
    this.mapCategories();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getCategories(this.state.categories)
  };
  handleChange = (name, value, index, e) => {
    const newCategory = this.state.categories[index];
    newCategory[name] = value;
    const categories = this.state.categories.map((category, i) =>
      i === index ? newCategory : category
    );
    this.setState({ categories });
  };

  categoriesRender = () =>
    this.state.categories.map((category, index) => (
      <Modal.Content key={`${category.name}-${index}`} >
        <h3>{category.name}</h3>
        <img style={styles.image} src={category.image} alt={category.name}/>
      </Modal.Content>
    ));

  categoryFormat = ({ category, index }) => {
    return (
      <Modal.Content>
        <div id={`${category}-${index}`}>
          <Form.Input
            palceholder="Category Name"
            name="name"
            value={category.name}
            onChange={e =>
              this.handleChange(e.target.name, e.target.value, index)
            }
          />
          <Dropzone onDrop={file => this.onDrop(file, index)} multiple={false}>
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
          <img style={styles.image} src={category.image} alt={category.image}/>
        </div>
      </Modal.Content>
    );
  };
  onDrop = (File, index) => {
    const image = File[0].path;
    const categories = this.state.categories.map((category, i) =>{
      if (index === i) {
        return ({name: category.name, image})
      } else {
        return category;
      }
    })
    this.setState({
      categories
    });
  };

  mapCategories = () =>
    this.state.categories.map((category, index) => (
      <this.categoryFormat category={category} index={index} />
    ));

  render() {
    return (
      <>
        <Modal trigger={<Button>Modify Categories</Button>}>
          <Button onClick={this.toggleEdit}>Edit</Button>
          {this.state.editing ? (
            <Form>
              {this.mapCategories()}
              <Form.Button type="submit">Submit</Form.Button>
              <Form.Button onClick={this.addCategory}>
                <Icon name="plus" />
              </Form.Button>
            </Form>
          ) : (
            this.categoriesRender()
          )}
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
    height: '150px',
    width: '150px',
    display: 'flex'
  }
};
