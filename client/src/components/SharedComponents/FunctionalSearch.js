import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';
import React, { useState, useEffect, } from 'react';
import { Search, Grid, Header, Segment, Label, } from 'semantic-ui-react';

const resultRenderer = ({ title }) => <Label content={title} />

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

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

  const handleResultSelect = (e, { result }) => setValue(result.title)

  const handleSearchChange = (e, { value }) => {
    setIsLoading(true)
    setValue(value)

    setTimeout(() => {
      if (value.length < 1) return initialState

      const re = new RegExp(_.escapeRegExp(value), 'i')
      const isMatch = (result) => re.test(result.title);

      setIsLoading(false)
      setResults(_.filter(products, isMatch))
    }, 300)
  }

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
      <Grid>
        <Grid.Column>
          <input 
            name="term"
            value={searchState.term}
            onChange={searchChange}
          />
          <button onClick={searchSubmit} >Submit</button>
        </Grid.Column>
      </Grid>
    )
};

export default FunctionalSearch;