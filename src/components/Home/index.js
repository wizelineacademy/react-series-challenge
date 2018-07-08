import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import getTrendingGifsActions from '../../actions/trendingGifs'
import { InputContainerStyled } from './searchForm.styled';

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
          } = this.props;
        var query = this.state.query
        if(query == ''){ 
            this.setState({showTrendings:true})
        }
        else{
            this.setState({showTrendings:false})
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
        const trendingGifs = this.props.trendingGifs.trendingGifs
        const searchGifs = this.props.trendingGifs.searchGifs
        const favs = this.props.trendingGifs.favs
        const addFavFunction = this.addFav
        const removeFavFunction = this.removeFav
        var arrayGifs = []
        if(trendingGifs.length > 0 && this.state.showTrendings){
            trendingGifs.forEach(function(item, index){
                
                let isFav = favs.findIndex((obj => obj.id === item.id))
                var img = <div key={index}>
                    <img src={item.url} alt={item.title} key={'trending-' + index}/>
                    <br/>
                    {isFav == -1 ? '':<img alt={'fav' + item.title} key={'fav' + index} src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.png'/>}
                    <br/>
                    <label>{item.title}</label>
                    <br/>
                    {
                        isFav == -1 ? 
                        <button onClick={addFavFunction} data-id={item.id}>FAV</button>
                        :
                        null
                    }
                    
                    <hr/>
                </div>
                arrayGifs.push(img)
            })
        }
        
        if(searchGifs.length > 0 && !this.state.showTrendings ){
            searchGifs.forEach(function(item, index){
                let isFav = favs.findIndex((obj => obj.id === item.id))
                var img = <div key={index}>
                    <img src={item.url} alt={item.title} alt='gif' key={'search-' + index}/>
                    <br/>
                    <label>{item.title}</label>
                    <br/>
                    {
                        isFav == -1 ? 
                        <button onClick={addFavFunction} data-id={item.id}>FAV</button>
                        :
                        null
                    }
                    <hr/>
                </div>
                arrayGifs.push(img)
            })
        }
        
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