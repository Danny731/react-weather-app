import React, { Component } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { getExtendedForecast } from '../utils/api';
import DayItem from './DayItem'
import { Container, InnerContainer } from '../utils/style'

const Heading = styled.h1`
  color: #FFEB55;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 0px;
`

const SubHeading = styled.h3`
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 50px;
`

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

class Forecast extends Component {
  state = { 
    forecastData: [],
    isLoading: true
   }

  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
   }

  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
   }

   
   makeRequest = (city) => {
     this.setState(() => ({ isLoading: true }))
     
     getExtendedForecast(city)
     .then(res => 
      this.setState({ 
        isLoading: false, 
        forecastData: res 
      }))
    }
    
  handleClick = (city) => {
    city.city = this.city;
    this.props.history.push({
      pathname: '/details/' + this.city,
      state: city
    })
  }

  render() {
    const { isLoading, forecastData } = this.state;
    return (
      <Container>
        {isLoading === true
         ? <h1>Loading...</h1> 
         : <InnerContainer>
            <Heading>{this.city}</Heading>
            <SubHeading>5 Day Forecast</SubHeading>
            <Row>
              {forecastData.list.map((listItem )=> {
                return <DayItem onClick={() => this.handleClick(listItem)} key={listItem.dt} day={listItem} />
              })}
            </Row>
          </InnerContainer>
        }
      </Container>
    )
  }
}

export default Forecast;