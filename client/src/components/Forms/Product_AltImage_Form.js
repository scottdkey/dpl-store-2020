import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { Icon, Button, Form, Select } from "semantic-ui-react";

export default class altImageForm extends Component {
  constructor(props) {
    super(props);
    const alt_image = () => {
      if (this.props.alt_image.length === 0) {
        return [{ name: "No Images", file: "NoURL" }];
      } else {
        return this.props.alt_image;
      }
    };
    const images = alt_image();
    console.log(images);
    this.state = {
      images: images,
      editing: true
    };
  }
  componentDidMount() {}

  toggleEdit = e => {
    this.setState({
      editing: !this.state.edting
    });
  };

  addImage = () => {
    const newImage = { name: "Thumbnail", file: "" };
    const { images } = this.state;
    if (images[0].file === "NoURL") {
      this.setState({
        images: [newImage]
      });
    } else {
      this.setState({
        images: [...this.state.images, newImage]
      });
    }
  };

  renderImages = () => {
    console.log(this.state);
    const { images } = this.state;
      if (images[0].file === "NoURL") {
        return <h3>{images[0].name}</h3>;
      } else {
        return (
          this.state.images.map((image, index) => (
          <>
            {this.state.editing
              ? this.imageFormFormat(image, index)
              : this.imageViewFormat(image, index)}
          </>
        )))
      }
  
    };
    
  handleChange = () => {};
  imageViewFormat = (image, index) => (
    <>
      <p>imageViewFormat</p>
      <div>{image.name}</div>
      <img src={image.url} key={index} />
    </>
  );

  imageFormFormat = (image, index) => (
    <div id={`${image}-${index}`}>
      <p>imageFormFormat</p>
      <Select
        placeholder="Select Image Type"
        options={AltImageOptions}
        onChange={this.handleChange}
        required
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
    </div>
  );

  render() {
    return (
      <>
        <Button as="div" onClick={this.addImage}>
          <Icon name="plus" />
        </Button>
        {this.renderImages()}
      </>
    );
  }
}

const AltImageOptions = [
  { key: "thumbnail", value: "thumbnail", text: "Thumbnail" },
  { key: "main_Image", value: "main_Image", text: "Main Image" }
];

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
