import React from 'react'
import {Switch, Route} from 'react-router-dom'
import SurfboardDetail from '../components/SurfboardDetail/index'
import Surfboards from '../containers/Surfboards/index'
import SurfboardForm from '../components/SurfboardForm/index'

const SurfboardRouter = () => {
  return (
    <div>
      <Route exact path='/surfboards' component={'put component here'} />
      <Switch>
        <Route path='/surfboards/new' component={'put component here'} />
        <Route path='/surfboards/:id' component={'put component here'} />
      </Switch>
    </div>
  )
}

export default SurfboardRouter
