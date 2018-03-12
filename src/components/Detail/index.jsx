import React from 'react'
import { func, object } from 'prop-types'

import { Header } from '../'
import { DetailWrapper, DetailInfo } from './Detail.style'

class Detail extends React.Component {
  componentWillMount() {
    this.props.initialSetup(this.props.match.params.id)
  }

  render() {
    const { giph } = this.props

    return (
      <div>
        <Header />
        <DetailWrapper>
        { giph !== null &&
          <div>
            <img src={giph.images.original.url} alt={giph.title}></img>
            <h1>{giph.title}</h1>
          </div>
        }
        {
          giph === null &&
          <h1>Loading</h1>
        }
        </DetailWrapper>
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
