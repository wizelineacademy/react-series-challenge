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
        //this.props.getTrendingGifs()
        //this.props.getSearchGifs()
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

    render(){
        const trendingGifs = this.props.trendingGifs.trendingGifs
        const searchGifs = this.props.trendingGifs.searchGifs
        var arrayGifs = []
        if(trendingGifs !== undefined){
            if(trendingGifs.length > 0){
                trendingGifs.forEach(function(item, index){
                    arrayGifs.push(<img src={item.images["original"].url} key={'trending-' + index}/>)
                })
            }
        }
        if(searchGifs !== undefined){
            if(searchGifs.length > 0){
                searchGifs.forEach(function(item, index){
                    arrayGifs.push(<img src={item.images["original"].url} key={'trending-' + index}/>)
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
    return bindActionCreators({
        getTrendingGifs,
        getSearchGifs
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)