import React, { Component } from "react";
import {Form, Select, Icon} from 'semantic-ui-react'
import Dropzone from "react-dropzone";

class ImageForm extends Component {

  state = {
    main_image: this.props.main_image,
    alt_image: this.props.alt_image
  }


  addImage = () => {
    const alt_image = [...this.state.alt_image, {url: ''}];
    this.setState({alt_image});
    console.log(this.state)
  };

  renderImages = () => {
  }

  imagesFormat = (image, index, label) =>{
    return (
      <div key={index}>
        <Dropzone onDrop={file => this.onDrop(file, index)} multiple={false}>
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div {...getRootProps()} style={styles.dropzone} >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>
                    <img src={image} style={styles.image} />
                    drop files here!
                  </p>
                ) : (
                  <p>
                    <img src={image} style={styles.image}/>
                    Click to add a picture or drag here
                  </p>
                )}
              </div>
            );
          }}
        </Dropzone>
      </div>
    );
  }
  onDrop = (File, index) =>{
    const image = File[0].path
    
    if(index === undefined){
      this.setState({
        main_image: image
      })
    }else{
      this.state.alt_image[index].url = image
      this.forceUpdate()
    }
    console.log(this.state)

  }

  renderMainImage = () =>(
    this.imagesFormat(this.state.main_image,)
  )

  // renderAltImage = () => (
  // this.state.alt_image.map((image, index) => {
  //     return this.imagesFormat(image.url, index);
  //   })
  // )

  render() {
    return (
      <>
        {this.renderMainImage()}
        {/* {this.renderAltImage()} */}
        <Form.Button onClick={this.addImage}>
          <Icon name="plus" />
        </Form.Button>
      </>
    );
  }
}

export default ImageForm

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
