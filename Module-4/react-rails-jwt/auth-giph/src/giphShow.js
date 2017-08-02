import React, {Component} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class giphShow extends Component {

  shouldRender () {
    return this.props.giph.images ? <Card className='right'>
      <Image src={this.props.giph.images.downsized_medium.url} />
      <Card.Content>
        <Card.Header>
          {this.props.giph.slug}
        </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='heart' />
          Save this giph
        </a>
      </Card.Content>
    </Card> : null
  }
  render () {
    console.log('rendering show', this.props.giph)
    return (this.shouldRender())
  }
}

export default giphShow
