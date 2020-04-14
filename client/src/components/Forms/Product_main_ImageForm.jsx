import React, { Component } from "react";
import {Form, Icon} from 'semantic-ui-react'
import Dropzone from "react-dropzone";
import Axios from "axios";
import ImageIcon from '../../images/Image_Icon.png'

class ImageForm extends Component {

  imagesFormat = (image) =>{
    return (
      <div key={image}>
        <Dropzone onDrop={file => this.onDrop(file)} multiple={false}>
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
  onDrop = (Files) =>{
    let data = new FormData() 
    data.append("file", Files[0])
    Axios.put(`/api/categories/${this.props.product.category_id}/products/${this.props.product.id}/main_image`, data)
    .then(res =>{
      this.props.setMainImage(res.data)
      this.renderMainImage()
    })
    .catch( e => console.log(e))
  }

  renderMainImage = () =>{
    return (this.imagesFormat(this.props.product.main_image))
  }

  render() {
    return (
      <>
      {this.props.product ? this.renderMainImage() : <p>Please Add images after creating product</p>}
        
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

const unmodifiedURL = '<Icon name="image" />'