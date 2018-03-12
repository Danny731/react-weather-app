import React from 'react';
import styled from 'styled-components';
import { getDate } from '../utils/helpers';

const DayContainer = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  img {
    height: 4rem;
    svg {
      fill: white;
    }
  }
  
  h2 {
    font-size: 1.3rem;
    font-weight: 100;
    color: #fff;
  }

  h3 {
    color: #FFFFFF;
    font-size: 2rem;
    margin: 0;
  }
`

const DayItem = (props) =>  {
  let currentTemp = `${Math.round(props.day.temp.day)}°`;
  let date = getDate(props.day.dt);
  let icon = props.day.weather[0].icon;
  return (
    <DayContainer onClick={props.onClick}>
      <img src={`/images/weather-icons/${icon}.svg`} alt="Weather Icon"/>
      <h2>{date}</h2>
      <h3>{currentTemp}</h3>
    </DayContainer>
  )
}

export default DayItem;