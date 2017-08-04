import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import SurfboardRouter from '../routers/SurfboardRouter'
import Navbar from '../components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h2>Surboard Collection</h2>
            <Navbar />
          </div>
          <div>
            <Route path='/surfboards' component={SurfboardRouter} />
            <Route path='/about' component={'put component here'} />
          </div>
        </div>
    );
  }
}

export default App;
