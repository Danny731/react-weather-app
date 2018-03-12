import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import DayItem from './DayItem'
import { Container, InnerContainer } from '../utils/style'

const DescContainer = styled.div`
  text-align: center;
  h1 {
    color: limegreen;
    font-size: 2.2rem;
  }
  h3 {
    color: #FFEB55;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  p {
    color: white;
    font-size: 1.5rem;
  }
`

const StyledLink = styled(Link)`
  color: #FFEB55;
`

class Detail extends Component {
  render() {
    console.log(this.props.location.state)
    let props  = this.props.location.state;
    return (
      <Container>
        <InnerContainer>
          <DayItem day={props} />
          <StyledLink to='/'>BACK</StyledLink>
          <DescContainer>
            <h3>{props.city}</h3>
            <p>{props.weather[0].description}</p>
            <p>High: {Math.round(props.temp.max)}°</p>
            <p>Low: {Math.round(props.temp.min)}°</p>
            <p>Humidity: {props.humidity}</p>
          </DescContainer>
        </InnerContainer>
      </Container>
    );
  }
}

export default Detail;