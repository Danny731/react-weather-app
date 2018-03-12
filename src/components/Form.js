import React, { Component } from 'react';
import styled from 'styled-components';
import { InputSearch, Button } from '../utils/style'

const SearchContainer = styled.div`
  display: grid;
  justify-items: center;
  height: 100vh;
`

const SearchForm = styled.form`
  display: grid;
  justify-content: center;
  align-content: center;
`

const Heading = styled.h1`
  color: #000;
  font-size: 2.4rem;
  font-weight: 300;
  text-transform: uppercase;
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

class Form extends Component {
  state = { city: '' };

  handleInputValue = (event) => {
    let inputCityValue = event.target.value;
    this.setState({ city: inputCityValue})
  }

  handleSubmit = () => {
    this.props.onSubmitCity(this.state.city)
    this.setState(() => ({ city: ''}))
  }

  render() {
    return (
      <SearchContainer>
        <SearchForm>
          <Heading>Enter a City</Heading>
          <InputSearch 
            onChange={this.handleInputValue}
            value={this.state.value}
            type="text"
            name="city"
            placeholder="search for city..."/>
          <svg viewBox='0 0 40 2' preserveAspectRatio='none' className='Line'>
            <path d='M0 1 L40 1'/>
            <path d='M0 1 L40 1' className='focus'/>
          </svg>
          <FlexWrapper>
            <Button 
              type="button"
              onClick={this.handleSubmit}>
              Get Weather
            </Button>
          </FlexWrapper>
        </SearchForm>
      </SearchContainer>
    );
  }
}

export default Form;