import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import getTrendingGifsActions from '../../actions/trendingGifs'
import { InputContainerStyled } from '../Home/searchForm.styled';


class Favs extends Component{

    constructor(props){
        super(props)
        this.state = {
            showSearch:false,
            query:''
        }
    }

    removeFav = (event) =>{
        const {
            removeFav,
          } = this.props
        
        var id = event.target.getAttribute('data-id')
        removeFav(id)
    }



    handleChange = (event) =>{
        event.preventDefault()
        this.setState({query:event.target.value})
        if(event.taget === ''){
            this.setState({showSearch:false})
        }
        else{
            this.setState({showSearch:true})
        }
    }

    render(){
        const favs = this.props.trendingGifs.favs
        const addFavFunction = this.addFav
        const removeFavFunction = this.removeFav
        var arrayGifs = []
        
        if(favs.length > 0 && !this.state.showSearch){
            favs.forEach(function(item, index){
                var img = <div key={index}>
                    <img src={item.url} alt={item.title} key={'trending-' + index}/>
                    <br/>
                    <label>{item.title}</label>
                    <br/>
                    <button onClick={ !item.fav ? addFavFunction:removeFavFunction} data-id={item.id}>{item.fav ? 'UN-FAV':'FAV'}</button>
                    <hr/>
                </div>
                arrayGifs.push(img)
            })
        }
        else if(this.state.showSearch){
            var query = this.state.query
            var searchFavs = []
            favs.forEach(function(item, index){
                item.title.search(query) != -1 ? searchFavs.push(item): null
            })

            searchFavs.forEach(function(item, index){
                var img = <div key={index}>
                    <img src={item.url} alt={item.title} key={'trending-' + index}/>
                    <br/>
                    <label>{item.title}</label>
                    <br/>
                    <button onClick={ !item.fav ? addFavFunction:removeFavFunction} data-id={item.id}>{item.fav ? 'UN-FAV':'FAV'}</button>
                    <hr/>
                </div>
                arrayGifs.push(img)
            })
        }
        
        return <div className='home'>
            <h1>Your favs</h1>
        <br/>
        <form onSubmit={this.submitForm}>
            <InputContainerStyled>
                <input type='text' onChange={this.handleChange}/>
            </InputContainerStyled>
        </form>
            {arrayGifs}
        </div>
    }
}

const mapStateToProps = (state) => {
    const {
      trendingGifs,
      searchGifs,
      query
    } = state
    
    return {
      trendingGifs,
      searchGifs,
      query
    }
  }  

const mapDispatchToProps = (dispatch) => {
    const { getTrendingGifs } = getTrendingGifsActions.creators
    const { getSearchGifs } = getTrendingGifsActions.creators
    const { addFav } = getTrendingGifsActions.creators
    const { removeFav } = getTrendingGifsActions.creators
    return bindActionCreators({
        getTrendingGifs,
        getSearchGifs,
        addFav,
        removeFav
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Favs)