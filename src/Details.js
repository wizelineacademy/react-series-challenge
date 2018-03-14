import React, { Component } from 'react'

const Details = ({match}) => {
  return (
    <div>
      <h1>Details {match.params.id}</h1>
    </div>
  )
}

export default Details
