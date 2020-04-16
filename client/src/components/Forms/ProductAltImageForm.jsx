import axios from "axios";
import React, { Component } from "react";
import { Icon, Image, Button } from "semantic-ui-react";
import Dropzone from "react-dropzone";
import ImageIcon from "../../images/Image_Icon.png";

class AltImageForm extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    this.getAltImages();
  }

  getAltImages = async () => {
    if (this.props.product) {
      const { product } = this.props;
      const res = await axios.get(`/api/products/${product.id}/images`);
      this.setState({
        images: res.data
      });
    } else {
      this.setState({
        images: []
      });
    }
  };

  addImage = () => {
    const images = [...this.state.images, { url: ImageIcon }];

    this.setState({ images });
  };

  newAltImageFormat = () => {
    return (
      <div key="new _alt_Image">
        <Dropzone onDrop={file => this.onDrop(file)} multiple={false}>
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div {...getRootProps()} style={styles.dropzone}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>
                    <img src={ImageIcon} style={styles.image} alt="thumbnail" />
                    drop files here!
                  </p>
                ) : (
                  <p>
                    <img src={ImageIcon} style={styles.image} alt="thumbnail"/>
                    Click to add a picture or drag here
                  </p>
                )}
              </div>
            );
          }}
        </Dropzone>
      </div>
    );
  };

  deleteAltImage = image => {
    axios
      .delete(`/api/products/${image.product_id}/images/${image.id}`)
      .then(res => {
        const newImages = this.state.images.filter(i => {
          if (i.url != image.url) {
            return i;
          }
        });
        this.setState({
          images: newImages
        });
      })
      .catch(e => console.log(e));
  };

  onDrop = Files => {
    const { product } = this.props;
    let data = new FormData();
    data.append("file", Files[0]);
    axios
      .post(`/api/products/${product.id}/images`, data)
      .then(res => {
        this.setState({
          images: [...this.state.images, res.data]
        });
        this.renderAltImages();
      })
      .catch(e => console.log(e));
  };
  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    });
  };

  renderAltImages = () => {
    return this.state.images.map(image => {
      return (
        <div key={image.id}>
          <Button
            as="div"
            style={styles.deleteButton}
            onClick={() => this.deleteAltImage(image)}
            color="red"
          >
            <Icon name="delete" />
          </Button>
          <Image style={styles.image} src={image.url} />
        </div>
      );
    });
  };

  render() {
    if(this.props.product && this.props.product.id){
    return (
      <>
        {this.newAltImageFormat(ImageIcon)}

        {this.renderAltImages()}
      </>
    )}else {
      return(
        <>
        {/* <p>please add images after product creation</p> */}
        </>
      )
    }
  }
}

export default AltImageForm;

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
  },
  deleteButton: {
    height: "25px",
    width: "150px"
  }
};
