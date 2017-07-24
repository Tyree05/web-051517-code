import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'


const Home = () => (<h3>Home</h3>)
const Nest = ({match}) => (<h3>{match.params.id}</h3>)
const About = (props) => (<h3>Hello{props.what}</h3>)
const Nested = ({match}) => (
  <div>
    <ul>
      <li><Link to={`${match.url}/1`}/></li>
    </ul>
    <Switch>
    <Route path={`${match.url}/new`} component={Home} />
    <Route path={`${match.url}/:id`} component={Nest} />
    <Route exact path={`${match.url}`} render={()=> (
      <h3>No route matches </h3>
    )}/>
  </Switch>
  </div>
)

class App extends Component {
  state = {
    name: "Tony"
  }
  render () {
    return (
      <Router history={history}>
        <div>
          <div>
            <ul>
              <Route exact path='/' component={Home} />
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/nested'>Nested</Link></li>
            </ul>
          </div>

          <Route path='/tony' component={Tony} />
          <Route path='/about'  render={()=>(
            <About what={this.state.name}/>
          )}/>
          <Route path='/nested' component={Nested} />
        </div>
      </Router>
    )
  }
}

export default App
