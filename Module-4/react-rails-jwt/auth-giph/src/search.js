import React, {Component} from 'react'
import { Icon, Input } from 'semantic-ui-react'

class InputExampleIconElement extends Component {
  state = {
    term: ''
  }

  onTermChange(e){
    const term = e.target.value
    this.setState({ term })
  }
  render () {
    return (
      <Input onChange={this.onTermChange.bind(this)}
        icon={<Icon onClick={ () => this.props.onSearch(this.state.term) } name='search' inverted circular link onclick />}
        placeholder='Search...'
      />
    )
  }
}

export default InputExampleIconElement
