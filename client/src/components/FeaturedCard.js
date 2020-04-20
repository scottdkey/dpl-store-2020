import React from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const FeaturedCard = ({ product, pictureHeight }) => {
  const cat_id = product.category_id;
  return (
    <div>
      <Link to={`/categories/${cat_id}/products/${product.id}`}>
        <div style={{ ...style.photoHolder, height: pictureHeight }}>
          <div style={style.crop}>
            <Image style={style.photo} src={`${product.main_image}`} />
          </div>
        </div>
      </Link>
      <Link to={`/categories/${cat_id}/products/${product.id}`}>
      <div style={{ textAlign: "left" }}>
        <div style={style.infoHolder}>
          <h4>${product.price}</h4>
        </div>
        <div style={style.infoHolder}>
          <p>{product.title}</p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default FeaturedCard;

const style = {
  photo: {
    // borderRadius: '10px',
    display: "block",
    minWidth: "100%",
    minHeight: "100%",
    margin: " auto",
    position: "absolute",
    top: "-100%",
    right: "-100%",
    bottom: "-100%",
    left: "-100%"
  },
  crop: {
    height: "100%",
    overflow: "hidden",
    position: "relative"
  },
  photoHolder: {
    background: "#fff",
    display: "inline-block",
    verticalAlign: "top",
    width: "100%",
    marginRight: ".5em",
    marginBottom: ".3em",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0px 3px 10px #cccccc"
  },
  infoHolder: {
    display: "inline-block",
    marginRight: ".5%",
    marginTop: "2%",
  }
};
