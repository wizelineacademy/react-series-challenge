import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import getTrendingGifsActions from '../../actions/trendingGifs'
import { InputContainerStyled } from './searchForm.styled';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            query:''
        }
    }

    componentDidMount(){
        const {
            getTrendingGifs,
          } = this.props
        getTrendingGifs()
    }

    submitForm = (event) =>{
        event.preventDefault()
        const {
            getSearchGifs,
          } = this.props;
        var query = this.state.query
        getSearchGifs(query)
    }

    
    handleChange = (event) => {
        const { value } = event.target;
        this.setState({query:value });
        this.props.trendingGifs.query = value
    }

    addFav = (event) =>{
        const {
            addFav,
          } = this.props
        
        var id = event.target.getAttribute('data-id')
        
        var exists = this.props.trendingGifs.favs.find(function(element){
            return element === id
        })

        if(exists === undefined){
            addFav(id)
        }
        
    }

    removeFav = (event) =>{
        const {
            removeFav,
          } = this.props
        
        var id = event.target.getAttribute('data-id')
        removeFav(id)
    }

    render(){
        const trendingGifs = this.props.trendingGifs.trendingGifs
        const searchGifs = this.props.trendingGifs.searchGifs
        const addFavFunction = this.addFav
        const removeFavFunction = this.removeFav
        var arrayGifs = []
        if(trendingGifs !== undefined){
            if(trendingGifs.length > 0){

                let gifFavs = this.props.trendingGifs.favs
                trendingGifs.forEach(function(item, index){
                    let exists = gifFavs.find(function(element){
                        return element === item.id
                    })

                    var img = <div key={index}>
                        <img src={item.images["original"].url} key={'trending-' + index}/>
                        <br/>
                        <button onClick={exists === undefined ? addFavFunction:removeFavFunction} data-id={item.id}>{exists === undefined ? 'FAV':'UN-FAV'}</button>
                    </div>
                    arrayGifs.push(img)
                })
            }
        }
        if(searchGifs !== undefined){
            if(searchGifs.length > 0){
                searchGifs.forEach(function(item, index){
                    var img = <div key={index}>
                        <img src={item.images["original"].url} key={'trending-' + index}/>
                        <br/>
                        <button onClick={addFavFunction} data-id={item.id}>Fav</button>
                    </div>
                    arrayGifs.push(img)
                })
            }
        }
        
        return <div className='home'>
            <form onSubmit={this.submitForm}>
            <InputContainerStyled>
                <input type='text' onChange={this.handleChange}/>
            </InputContainerStyled>
            <button>Search</button>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)