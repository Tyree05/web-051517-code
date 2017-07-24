import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import HogContainer from './components/HogContainer'
import Filter from './components/Filter'

import Hogs from './porkers_data'

class App extends Component {
  constructor() {
    super()
    this.state ={
      hogs: Hogs,
      greasedOnly: false,
      sort: "name"
    }
  }

  filteredHogs = () => {
    if (this.state.greasedOnly) {
      return this.state.hogs.filter(hog => hog.greased)
    } else {
      return this.state.hogs
    }
  }

  sortedHogs = (hogs) => {
    if (this.state.sort === "name") {
      return hogs.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    });
    } else {
      return hogs.sort(function (a, b) {
        let key = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        return a[key] - b[key];
      });
    }
  }

  selectedHogs = () => {
    let hogs = this.filteredHogs()
    return this.sortedHogs(hogs)
  }

  handleCheck = (event) => {
    this.setState(prevState => ({greasedOnly: !prevState.greasedOnly}))
  }

  handleSelect = (event) => {
    this.setState({sort: event.target.value})
  }

  render() {
    console.log("sort:", this.state.sort)
    console.log("sorted:", this.sortedHogs(this.filteredHogs()))
    return (
      <div className="App">
          < Nav />
          <Filter
            greasedOnly={this.state.greasedOnly}
            handleCheck={this.handleCheck}
            sort={this.state.sort}
            handleSelect={this.handleSelect}
          />
          <HogContainer hogs={this.selectedHogs()}/>
      </div>
    )
  }
}

export default App;
