import React from 'react';
import {Card} from 'semantic-ui-react'

const Hog = (props) => {
  let {name, greased, specialty} = props.hog
  let weight = props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
  let medal = props.hog["highest medal achieved"]
  return(
    <div className="hog">
      <Card>
        <Card.Header>
          {name}
        </Card.Header>
        <img src={props.img} alt={name} />
        <Card.Content>
          <p>{specialty}</p>
          <p>{medal}</p>
          <p>Weight in terms of refrigerators: {weight}</p>
          <p>Greased: {greased.toString()}</p>
        </Card.Content>
      </Card>
    </div>
  )
}

export default Hog
