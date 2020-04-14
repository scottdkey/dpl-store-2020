import React, { Component } from "react";
import Dropzone from "react-dropzone";
import Axios from "axios";
// import ImageIcon from '../../images/Image_Icon.png'

class ImageForm extends Component {

  state = {
    image: this.props.product.main_image
  }

  renderMainImage = () =>{
    const {image} = this.state
    return (
      <div key={image} style={styles.mainImageArea}>
        <h2>Main Image</h2>
        <Dropzone onDrop={file => this.onDrop(file)} multiple={false}>
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div {...getRootProps()} style={styles.dropzone}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>
                    <img src={image} style={styles.image} alt="mainProduct" />
                    drop files here!
                  </p>
                ) : (
                  <p>
                    <img src={image} style={styles.image} alt="mainProduct" />
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
      console.log(res)
      this.setState({
        image: res.data.main_image
      })
      this.renderMainImage()
    })
    .catch( e => console.log(e))
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
  }, mainImageArea: {
    width: "100%",
    height: "200px"
  }
};

const unmodifiedURL = '<Icon name="image" />'