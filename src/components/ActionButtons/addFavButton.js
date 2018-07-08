import React, {Component} from 'react'
import plus from '../../assets/plus.png'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import getTrendingGifsActions from '../../actions/trendingGifs'

class AddFavButton extends Component{
    addFav = (event) =>{
        const {
            addFav,
          } = this.props
        
        var id = event.target.getAttribute('data-id')
        addFav(id)
    }


    render(){
        return <button className='btn-action' onClick={this.addFav} data-id={this.props.id}>
                <img src={plus} alt='remove from favs' data-id={this.props.id} height={100}/>
            <br/>
            <label>Add to favs</label>
        </button>
    }
}

const mapStateToProps = (state) => {
    return {
      
    }
  }  

const mapDispatchToProps = (dispatch) => {
    const { addFav } = getTrendingGifsActions.creators
    return bindActionCreators({
        addFav
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddFavButton)
