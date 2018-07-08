import React, {Component} from 'react'
import remove from '../../assets/remove.png'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import getTrendingGifsActions from '../../actions/trendingGifs'

class RemoveFavButton extends Component{
    removeFav = (event) =>{
        const {
            removeFav,
          } = this.props
        
        var id = event.target.getAttribute('data-id')
        removeFav(id)
    }

    render(){
        return <button className='btn-action' onClick={this.removeFav} data-id={this.props.id}>
            <img src={remove} alt='remove from favs' data-id={this.props.id} height={100}/>
            <br/>
            <label>Remove</label>
        </button>
    }
}

const mapStateToProps = (state) => {
    return {
      
    }
  }  

const mapDispatchToProps = (dispatch) => {
    const { removeFav } = getTrendingGifsActions.creators
    return bindActionCreators({
        removeFav
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(RemoveFavButton)
