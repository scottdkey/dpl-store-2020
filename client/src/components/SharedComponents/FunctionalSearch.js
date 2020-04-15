import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';
import React, { useState, useEffect, } from 'react';
import { Image, Button } from 'semantic-ui-react';
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

  const initialState = {isLoading, results, value, products, category_id}

  useEffect( () => {
    // const cat_id = this.props.category_id
    axios.get(`/api/categories/${category_id}/products`)
      .then( res => {
        setProducts(res.data)
        console.log(products)
        console.log(category_id)
      })
      .catch(console.log)
  }, []);

  // const handleResultSelect = (e, { result }) => setValue(result.title)

  // const handleSearchChange = (e, { value }) => {
  //   setIsLoading(true)
  //   setValue(value)

  //   setTimeout(() => {
  //     if (value.length < 1) return initialState

  //     const re = new RegExp(_.escapeRegExp(value), 'i')
  //     const isMatch = (result) => re.test(result.title);

  //     setIsLoading(false)
  //     setResults(_.filter(products, isMatch))
  //   }, 300)
  // }

  const searchChange = (event) => {
    setSearchState({ 
      ...searchState, 
      [event.target.name]: event.target.value 
    });
  }

  const searchSubmit = () => {
    axios.get(`/api/products/search?term=${searchState.term}&category_id=${searchState.category_id}`)
      .then((res) => {
       console.log(res.data);
       if(props.afterSearch) props.afterSearch(res.data);
      })
      .catch(console.log);
  }

    // const { isLoading: boolean, value: string, results: [], products: [] } = this.state
    return(
        <>
          {/* <Button onClick={searchSubmit}></Button> */}
          <div class="fitted-icon">
          <Image src={Search} style={style.spyglass} ></Image>
          <input 
            type="term"
            name="term"
            value={searchState.term}
            onChange={searchChange}
          />
          </div>
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
    left: '25px',
    top: '6px',
  },
}