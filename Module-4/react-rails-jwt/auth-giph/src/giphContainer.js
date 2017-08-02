import React, { Component } from 'react'
import GiphList from './giphList'
import GiphShow from './giphShow'
import { Route } from 'react-router-dom'
import { Segment, Grid } from 'semantic-ui-react'
import Search from './search'


class GiphContainer extends Component{
  state = {
    currentGiph: {},
    giphList: [],
    searchTerm: 'cats'
  }
  fetchGiphs(term){
    fetch(`http://api.giphy.com/v1/gifs/search?q=+${term}+&api_key=dc6zaTOxFJmzC`)
      .then( res => res.json() )
      .then( jsonRes => {
        const currentID = this.props.history.location.pathname.slice(7)
        const currentGiph = jsonRes.data.filter( g => g.id == currentID)[0]
        this.setState({
          giphList: jsonRes.data,
          currentGiph,
          searchTerm: term
        })
      })
  }
  componentDidMount(){
    this.fetchGiphs(this.state.searchTerm)
  }

  changeSelectedGiph(giph){
    console.log("changing giph", giph)
    this.setState({currentGiph: giph})
  }

  changeSearchTerm(term){
    console.log("from search box",term)
    this.fetchGiphs(term)
  }



  render(){
    return(
        <Segment>
        <Grid columns={2} divided >
            <Grid.Row>
              <Grid.Column>
                <Search onSearch={this.changeSearchTerm.bind(this)} />
                <Route path='/giphs' render={()=>(
                  <GiphList giphs={this.state.giphList} changeGiph={this.changeSelectedGiph.bind(this)}/>
                )}/>
              </Grid.Column>
              <Grid.Column>
                <Route path='/giphs/:id' render={()=>(
                  <GiphShow giph={this.state.currentGiph}/>
                )}/>
              </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    )
  }
}
export default GiphContainer
