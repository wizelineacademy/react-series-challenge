import React from 'react'
import { func, object } from 'prop-types'

class Detail extends React.Component {
  componentWillMount() {
    this.props.initialSetup(this.props.match.params.id)
  }

  render() {
    const { giph } = this.props

    return (
      <div>
        { giph !== null &&
          <div>
            <h1>{giph.title}</h1>
            <p>Author: {giph.username}</p>
            <p>Rating: {giph.rating}</p>
            <img src={giph.images.original.url} alt={giph.title}></img>
          </div>
        }
        {
          giph === null &&
          <h1>Loading</h1>
        }
      </div>
    )
  }
}

Detail.propTypes = {
  giph: object,
  initialSetup: func
}
Detail.defaultProps = {
  giph: null,
  initialSetup: () => {}
}
export default Detail
