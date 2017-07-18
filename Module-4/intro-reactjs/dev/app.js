import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = React.createClass({
  render: () => {
    return (
      <h1 className='myClass'>Hello, Tony</h1>
    )
  }
})

// const Display = () => <h2>HIIIII</h2>

const Display = (props) => {
  return (
    <h2>{props.word}</h2>
  )
}

// class MyComponent extends React.Component
class MyComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      word: 'hello',
      name: 'world'
    }
  }

  // state = {
  //   word: 'hello'
  // }

  render () {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <Display word={this.state.word} />
      </div>
    )
  }
}

ReactDOM.render(<MyComponent />, document.querySelector('#root'))
