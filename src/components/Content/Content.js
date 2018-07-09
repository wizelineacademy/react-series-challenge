import React, { Component } from 'react'
import Item from '../Item'
import { createPortal } from 'react-dom'
import './content.css'

const ContentList = ({data = {}, onClickFav, favorites, filter, onClick}) => {

  const isEmptyObject =  (obj) => {
    for(var prop in obj) {
        return false
    }
    return true
  }

  if(data.hasOwnProperty('data')){
    return data.data.map((item, index) => (
      <Item key={index}
        item={item}
        onClickFav={onClickFav}
        isFav={favorites[item.id] ? true : false}
        onClick={onClick}
      />
    ))
  } else {
  return !isEmptyObject(data) ? Object.keys(data).map((key, index) => {
    return data[key].title.search(new RegExp(filter, 'i')) > -1 ?
      (
          <Item key={index}
            item={data[key]}
            onClickFav={onClickFav}
            isFav={favorites[key] ? true : false}
            onClick={onClick}
          />
      ) : null
  }) : <div> No Favorites </div>
  }

}

const PortalContainer = ({children}) => {
  const nodeToAppend = document.getElementsByTagName('body')[0]

  return createPortal(children, nodeToAppend)
}

const Portal = ({open, onClick, item}) => {
    return open ? (
      <PortalContainer>
        <div className="portal">
          <button onClick={onClick} className="btn-close"> Close </button>
          <img src={item.images.original.webp} alt={item.title}/>
          <p> {item.title} </p>
        </div>
        </PortalContainer>
    )
  : null
}

class Content extends Component {

  constructor(props) {
    super(props)
    this.state = { open: false , item: ''}
    this.togglePortal = this.togglePortal.bind(this)
  }

  togglePortal(item = null) {
    const { open } = this.state
    if(open){
      this.setState({open: !open})
    } else {
      this.setState({ open: !open, item})
    }
  }

  render() {
    const {data = {}, isLoading = false, onClickFav, favorites, filter} = this.props
    if(isLoading){
      return(
        <div> loading ... </div>
      )
    }

    return(
      <div className="content">
        <ContentList
          data={data}
          favorites={favorites}
          onClickFav={onClickFav}
          filter={filter}
          onClick={this.togglePortal}
        />
        <Portal
          open={this.state.open}
          onClick={this.togglePortal}
          item = {this.state.item}
        />
      </div>
    )

  }
}

export default Content
