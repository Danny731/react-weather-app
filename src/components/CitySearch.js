import React, { Component } from 'react';
import styled from 'styled-components';
import { SearchField, Button } from '../utils/style'
import { getCurrentWeather } from '../utils/api'


const SearchForm = styled.form`
  display: grid;
  justify-self: center;
  align-content: center;
`

const Tag = styled.h2`
  color: white;
  font-size: 3rem;
  font-weight: 100;
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

class SearchContainer extends Component {
  state = { city: '' };
  
  handleSearchUpdate = (e) => {
    let inputResults = e.target.value;
    this.setState({ city: inputResults });
  }

  handleSubmit = () => {
    getCurrentWeather(this.state.city)
      .then((res) => console.log(res))
  }

  render() {
    return (
      <SearchForm>
        <Tag>Enter a City and State</Tag>
        <SearchField 
          value={this.state.city}
          onChange={this.handleSearchUpdate}
          type="text"
          placeholder='Search City...'
        />
        <FlexWrapper>
          <Button 
            type="button"
            onClick={this.handleSubmit}>
            Get Weather
          </Button>
        </FlexWrapper>
      </SearchForm>
    );
  }
}

export default SearchContainer;