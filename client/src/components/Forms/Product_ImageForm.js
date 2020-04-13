import React, { Component } from "react";
import {Form, Select, Icon} from 'semantic-ui-react'
import Dropzone from "react-dropzone";
import Axios from "axios";

class ImageForm extends Component {

  state = {
    main_image: this.props.main_image,
    alt_image: this.props.alt_image,
    category: this.props.category,
  }

  componentDidMount(){
    console.log(this.props)
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
  onDrop = (Files) =>{
    let data = new FormData() 
    data.append("file", Files[0])
    Axios.put(`/api/categories/${this.props.product.category_id}/products/${this.props.product.id}/images`, data)
    .then(res =>
      console.log(res)
      )
    .catch( e => console.log(e))

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
