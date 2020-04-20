import axios from 'axios';
import React, { useState, useEffect, } from 'react';
import { Image, } from 'semantic-ui-react';
import Search from './search.svg'

const FunctionalSearch = (props) => {
  const [searchState, setSearchState] = useState({
    term: "", 
    category_id: props.category_id || null
  });

  // resets state when category changes
  useEffect(() => {
    setSearchState({
      term: "", 
      category_id: props.category_id || null
    })
  }, [props.category_id])

  const searchChange = (event) => {
    setSearchState({ 
      ...searchState, 
      [event.target.name]: event.target.value
    });
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    console.log('click')
    const categoryCondition = searchState.category_id ? `&category_id=${searchState.category_id}` : ""
    axios.get(`/api/products/search?term=${searchState.term}${categoryCondition}`)
      .then((res) => {
       if(props.afterSearch) props.afterSearch(res.data);
      })
      .catch(console.log);
  };


  return(
    <>
        <form onSubmit={searchSubmit} style={{position: 'relative', display: 'inline-block'}}>
          <div className="fitted-icon">
            <Image src={Search} style={style.spyglass} onClick={searchSubmit}></Image>
            <input style={{paddingLeft: '40px'}}
              name="term"
              value={searchState.term}
              onChange={searchChange}
            />
          </div>
         </form>
    </>
  );
};

const style = {
  spyglass: {
    backgroundColor: '#FFFFFF',
    width: '20px',
    position: 'absolute',
    display: 'inline-block',
    left: '20px',
    top: '6px',
    cursor: 'pointer',
  },
  button: {
    border: 'none',
    backgroundColor: '#FFFFFF'
  }
}

export default FunctionalSearch;