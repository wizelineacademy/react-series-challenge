import React from 'react'
import { func } from 'prop-types'

class Detail extends React.Component {
  componentDidMount() {
    this.props.initialSetup(this.props.match.params.id)
  }

  render() {
    return (
      <div>Loading...</div>
    )
  }
}

Detail.propTypes = {
  initialSetup: func
}
Detail.defaultProps = {
  initialSetup: () => {}
}
export default Detail
