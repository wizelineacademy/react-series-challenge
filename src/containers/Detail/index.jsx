import { connect } from 'react-redux'

import { detailFetchGiph } from '../../actions'
import Detail from '../../components/Detail'

const mapStateToProps = ({ detail }) => ({
  giph: detail.giph
})

const mapDispatchToProps = dispatch => ({
  initialSetup: id => dispatch(detailFetchGiph(id))
})

const DetailContainer = connect(mapStateToProps, mapDispatchToProps)(Detail)

export default DetailContainer
