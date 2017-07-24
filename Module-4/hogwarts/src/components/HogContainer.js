import React, { Component } from 'react';
import Hog from './Hog'
import {Grid} from 'semantic-ui-react'

class HogContainer extends Component {
  imgSrc = (hog) => {
    let slug = hog.name.toLowerCase().split(" ").join("_")
    return `/hog-imgs/${slug}.jpg`
  }

  render() {
    return(
      <div className="hog-container">
        <Grid>
          {this.props.hogs.map(hog => <Hog
            key={hog.name}
            hog={hog}
            img={this.imgSrc(hog)}
          />)}
        </Grid>
      </div>
    )
  }
}

export default HogContainer
