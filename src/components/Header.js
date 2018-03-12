import React, { Component } from 'react';
import styled from 'styled-components';
import { Header, Button } from '../utils/style';

const WeatherApp = styled.h1`
  font-size: 3rem;
  font-weight: 100;
  letter-spacing: -4px;
  margin-left: auto;
  margin: 0;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const HeaderInput = styled.input`
  margin-right: 2rem;
  border: none;
  background: #000;
  padding: 0.6rem 0.5rem;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  color: rgb(4, 219, 147);
  &::placeholder { 
    color: rgba(255,255,255,0.9);
    opacity: 1;
}
`

const HeaderButton = styled(Button)`
  padding: 0.6rem 1rem;
  margin-top: 0;
  border-radius: 0.3rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
`

class Nav extends Component {
  state = { city: '' }

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
      <Header>
        <WeatherApp>WNow</WeatherApp> 
        <Wrapper>
          <HeaderInput 
            onChange={this.handleInputValue}
            value={this.state.value}
            type="text" 
            placeholder='Search Cities..'
          />
          <HeaderButton onClick={this.handleSubmit}>
            Search
          </HeaderButton>
        </Wrapper>
      </Header>
    );
  }
}

export default Nav;