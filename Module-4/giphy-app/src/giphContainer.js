import React, { Component } from 'react'
import GiphList from './giphList'
import GiphShow from './giphShow'
import { Route } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'


class GiphContainer extends Component{
  state = {
    currentGiph: {},
    giphList: [],
    searchTerm: 'cats'
  }
  componentDidMount(){
    fetch(`http://api.giphy.com/v1/gifs/search?q=+${this.state.searchTerm}+&api_key=dc6zaTOxFJmzC`)
      .then( res => res.json() )
      .then( jsonRes => {
        const currentID = this.props.history.location.pathname.slice(7)
        const currentGiph = jsonRes.data.filter( g => g.id == currentID)[0]
        this.setState({
          giphList: jsonRes.data,
          currentGiph
        })
      })
  }

  changeSelectedGiph(giph){
    console.log("changing giph", giph)
    this.setState({currentGiph: giph})
  }



  render(){
    return(
          <Segment>
              <Route path='/giphs' render={()=>(
                <GiphList giphs={this.state.giphList} changeGiph={this.changeSelectedGiph.bind(this)}/>
              )}/>
            <Route path='/giphs/:id' render={()=>(
              <GiphShow giph={this.state.currentGiph}/>
            )}/>
          </Segment>
    )
  }
}
export default GiphContainer
