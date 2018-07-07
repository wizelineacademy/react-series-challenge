import React, { Component } from 'react'
import { connect } from 'react-redux'
import contentActions from '../../actions/content'
import Header from '../Header'
import Searchbar from '../Searchbar'
import Item from '../Item'

const {
  startLoading,
} = contentActions.actions

const Content = ({data, onClick}) => {
  const loading = !data
  if(loading){
    return(
      <div> loading ... </div>
    )
  }
  return data.data.map((key, index) => (
    <Item key={index}
      imageURL={key.images.original.webp}
    />
  ))

}

class Home extends Component {

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return(
      <div>
        <Header/>
        <Searchbar/>
        <Content
          data={this.props.content.content}/>
        Home
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.content
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(startLoading())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
