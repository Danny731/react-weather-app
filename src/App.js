import React, { Component } from 'react';
import 'typeface-roboto';
import { Background, Container } from './utils/style'
import Header from './components/Header';
import Search from './components/CitySearch';
import { getCurrentWeather } from './utils/api';



class App extends Component {
  render() {
    return (
      <Background>
        <Header />
        <Container>
          <Search 
            handleCurrentWeather={getCurrentWeather()}
          />
        </Container>
      </Background>
    );
  }
}

export default App;
