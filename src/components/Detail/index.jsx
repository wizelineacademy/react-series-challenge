import React from 'react'
import { func, object } from 'prop-types'

import { Header } from '../'
import GifItem from '../../containers/GifItem'
import { DetailWrapper, GifWrapper, TitleWrapper } from './Detail.style'

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
            <GifWrapper>
              <GifItem imageUrl={giph.images.original.url} alt={giph.title} isDetail={true} id={giph.id}/>
            </GifWrapper>
            <TitleWrapper>
              <h1>{giph.title}</h1>
            </TitleWrapper>
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
