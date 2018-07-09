import React from 'react'
import Item from '../Item'

const Content = ({data = {}, isLoading = false, onClickFav, favorites, filter}) => {
  if(isLoading){
    return(
      <div> loading ... </div>
    )
  }

  if(data.hasOwnProperty('data')){
    return data.data.map((item, index) => (
      <Item key={index}
        item={item}
        onClickFav={onClickFav}
        isFav={favorites[item.id] ? true : false}
      />
    ))
  } else {

  return Object.keys(data).map((key, index) => {
    if(data[key].title.search(new RegExp(filter, 'i')) > -1){
        return(
          <Item key={index}
            item={data[key]}
            onClickFav={onClickFav}
            isFav={favorites[key] ? true : false}
          />
        )
      }
      return null
    })
  }
}

export default Content
