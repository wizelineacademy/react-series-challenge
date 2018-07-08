import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import getTrendingGifsActions from '../../actions/trendingGifs'
import { InputContainerStyled } from './searchForm.styled';
import GifContainer from '../GifContainer'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            query:'',
            showTrendings:true
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
            getTrendingGifs,
          } = this.props;
        var query = this.state.query
        if(query === ''){
            getTrendingGifs()
        }
        else{
            getSearchGifs(query)
        }
    
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
        
        addFav(id)
        
    }

    removeFav = (event) =>{
        const {
            removeFav,
          } = this.props
        
        var id = event.target.getAttribute('data-id')
        removeFav(id)
    }

    render(){
        console.log('render home')
        console.log(this.props.trendingGifs.trendingGifs)
        const trendingGifs = this.props.trendingGifs.trendingGifs
        const favs = this.props.trendingGifs.favs
        const addFavFunction = this.addFav
        var arrayGifs = []
        trendingGifs.forEach(function(item, index){
            let isFav = favs.findIndex((obj => obj.id === item.id))
            arrayGifs.push(<GifContainer key={item.id} url={item.url} alt={item.alt} id={item.id} isFav={isFav} title={item.title}  clickFuncion={addFavFunction} textButton='Add to favs' />)
        })
        
        return <div className='home'>
        <h1>Trending</h1><br/>
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
      query
    } = state
    
    return {
      trendingGifs,
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