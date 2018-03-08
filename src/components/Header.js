import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from '../utils/style';
// import { getCurrentWeather, getExtendedForecast } from '../utils/api'

const WeatherApp = styled.h1`
  font-size: 3rem;
  font-weight: 100;
  letter-spacing: -2px;
  margin-left: auto;
  margin: 0;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const HeaderInput = styled.input`
  margin-right: 1rem;
  border: none;
  background: #fff;
  padding: 0.6rem;
  border-radius: 0.6rem;
  color: #000;
`

const HeadButton = styled.button`
  padding: 0.6rem 1rem;
  border-radius: 0.3rem;
  background: #EDF060;
  border: 0;
  color: #000;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
`

class Nav extends Component {
  state = { city: '' }

  render() {
    return (
      <Header>
        <WeatherApp>WNow</WeatherApp> 
        <Wrapper>
          <HeaderInput 
            type="text" 
            placeholder='Search Cities'
          />
          <HeadButton>Get Weather</HeadButton>
        </Wrapper>
      </Header>
    );
  }
}

export default Nav;