import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';
import React, { useState, useEffect, } from 'react';
import { Image, Form, Button, } from 'semantic-ui-react';
import Search from './search.svg'

// const resultRenderer = ({ title }) => <Label content={title} />

// resultRenderer.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// };

const FunctionalSearch = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const [category_id, setCategory_id] = useState(props.category_id);
  const [searchState, setSearchState] = useState({
    term: "", 
    category_id: props.category_id || ""
  });

  // const initialState = {isLoading, results, value, products, category_id}

  useEffect( () => {
      // const cat_id = this.props.category_id
        axios.get(`/api/categories/${category_id}/products`)
        .then( res => {
        setProducts(res.data)
        console.log(products)
      })
      .catch(console.log)
    },[])

  const searchChange = (event) => {
    setSearchState({ 
      ...searchState, 
      [event.target.name]: event.target.value 
    });
  }

  const searchSubmit = (e) => {
    e.preventDefault()
    axios.get(`/api/products/search?term=${searchState.term}&category_id=${searchState.category_id}`)
      .then((res) => {
       if(props.afterSearch) props.afterSearch(res.data);
      })
      .catch(e => console.log(e))
  }

    return(
        <>
        {/* <Button onClick={searchSubmit}>
        </Button> */}
        <form onSubmit={searchSubmit} style={{position: 'relative', display: 'inline-block'}}>
          <div class="fitted-icon">
          <Image src={Search} style={style.spyglass} ></Image>
          <input style={{paddingLeft: '40px'}}
            name="term"
            value={searchState.term}
            onChange={searchChange}
            
          />

          </div>
         </form>
        </>
    )
};

export default FunctionalSearch;

const style = {
  spyglass: {
    backgroundColor: '#FFFFFF',
    width: '20px',
    position: 'absolute',
    display: 'inline-block',
    left: '20px',
    top: '6px',
  },
  button: {
    border: 'none',
    backgroundColor: '#FFFFFF'
  }
}