import React, { Component } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './nav'
import GiphyContainer from './giphContainer'
import Auth from './auth'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route path='/' component={Nav} />
          <Route path='/giphs' component={Auth(GiphyContainer)} />
        </div>
      </Router>
    )
  }
}

export default App
