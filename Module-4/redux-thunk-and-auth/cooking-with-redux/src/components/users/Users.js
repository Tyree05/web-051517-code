import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchUsers from '../../actions/users'

class Users extends Component {
  componentWillMount(){
    this.props.fetchUsers()
  }
  render(){
    return(
      <ul>
        <li> What! </li>
      </ul>
    )
  }
}

export default connect(null, {fetchUsers: fetchUsers})(Users)
