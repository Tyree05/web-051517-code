import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Nav from './nav'
import GiphyContainer from './giphContainer'
import Auth from './authorize'
import Login from './LoginForm'
import AuthAdapter from './authAdapter'

class App extends Component {
  state = {
    auth: {
      isLoggedIn: false,
      user: ''
    }
  }
  onLogin(loginParams){
    AuthAdapter.login(loginParams)
      .then( res => {
        //check for an error message
        if( res.error ){
          console.log("do nothing")
        }else{
          localStorage.setItem('jwt', res.token)
          this.setState({
            auth:{
              isLoggedIn: true,
              user: res.username
            }
          })
        }
        //if error render login again
        //else set the jwt token and forward user to /giphs
      })
  }
  handleLogout(){
    localStorage.clear()
    this.setState({auth: {
      isLoggedIn:false,
      user: ''
    }})
  }

  render () {
    return (
      <Router>
        <div>
          <Route path='/' render={()=> <Nav onLogout={this.handleLogout.bind(this)} /> } />
          <Route path='/giphs' component={Auth(GiphyContainer)} />
          <Route path='/login' render={()=> this.state.auth.isLoggedIn ? <Redirect to="/giphs"/> : <Login onSendLogin={this.onLogin.bind(this)}/> } />
        </div>
      </Router>
    )
  }
}

export default App
