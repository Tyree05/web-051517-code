import React, {Component} from 'react'
import { Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
class giphList extends Component {

  renderList () {
    return (this.props.giphs.map(g => (
      <Feed.Event key={g.id}>
        <Feed.Label>
          <img src={g.images.downsized_still.url} height={g.images.downsized_still.height} width={g.images.downsized_still.width} />
        </Feed.Label>
        <Feed.Content>
          <Link onClick={() => this.props.changeGiph(g)} to={`/giphs/${g.id}`}>{g.slug}</Link>
        </Feed.Content>
      </Feed.Event>
    )))
  }
  render () {
    return (<Feed>{this.renderList()}</Feed>)
  }

}

export default giphList
