import React, { Component } from 'react'

class Details extends Component{
  render () {
    return (
      <div>
        <h1>Details {this.props.match.params.id}</h1>
      </div>
    )
  }
}

export default Details
