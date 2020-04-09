import React, { Component } from "react";
import Dropzone from "react-dropzone";

export default class altImageForm extends Component {
  state = {
    alt_image: [],
    editing: false
  };

  componentDidMount() {
    this.setState({
      alt_image: [{name: 'Thumbnail', file: 'url here'}]
      });
  }

  toggleEdit = e => {
    this.setState({
      editing: !this.state.edting
    });
  };

  addImage = () => {
    const images = [
      ...this.state.product.image,
      { name: "Thumbnail", file: "" }
    ];
    this.setState({
      images
    });
    this.mapImages();
  };

  // imagesRender = () => {
  //   this.state.images
  // }

  // imageForm = () =>
  //   this.state.images.map((image, index) => {
  //     return <img src={image} key={index} />;
  //   });

  render() {
    console.log(this.props.alt_image)
    return <>
    {/* {this.imageForm()} */}
    
    </>;
  }
}
