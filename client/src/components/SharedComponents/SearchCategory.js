import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';
import React, { Component, useState, } from 'react';
import { Search, Grid, Header, Segment, Label, } from 'semantic-ui-react';

const resultRenderer = ({ title }) => <Label content={title} />

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

const initialState = { isLoading: false, results: [], value:"", products: [], category_id: "" }

export default class SearchCategory extends Component {
  state = initialState;

  componentDidMount() {
    axios.get(`api/categories/${category_id}/products`)
      .then( res => {
        this.setState({ products: [...res.data], category_id: category_id })
        console.log(this.state.products)
      })
      .catch(console.log)
  };

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.products, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results, products: [] } = this.state
    return(
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            resultRenderer={resultRenderer}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    )
  }
};