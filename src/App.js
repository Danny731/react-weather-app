import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import 'typeface-roboto';
import { Background } from './utils/style'
import Header from './components/Header';
import Form from './components/Form';
import Forecast from './components/Forecast'
import Detail from './components/Detail'




class App extends Component {
  render() {
    return (
      <Router>
        <Background>
          <Route render={(props) => {
            return (
              <Header 
                onSubmitCity={(city) => {
                  props.history.push({
                    pathname: 'forecast',
                    search: '?city=' + city
                  })
                }}
                city={'chicago'}/>
            )
          }} />
          <Route exact path='/' render={(props) => {
            return (
              <Form 
                onSubmitCity={(city) => {
                  props.history.push({
                    pathname: 'forecast',
                    search: '?city=' + city
                  })
                }}
                city={'chicago'}/>
            )
          }} />

          <Route path="/forecast" component={Forecast}/>

          <Route path="/details/:city" component={Detail}/>
        </Background>
      </Router>
    );
  }
}

export default App;
