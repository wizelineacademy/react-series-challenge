import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getTrendingGifsActions from '../../actions/trendingGifs'
import { InputContainerStyled } from './searchForm.styled';

class SearchForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            query:''
        }
    }

    submitForm = (event) =>{
        event.preventDefault()
        const {
            getSearchGifs
          } = this.props;
        this.props.getSearchGifs()
    }

    
    handleChange = (event) => {
        const { value } = event.target;
        this.setState({query:value });
    }

      
    render(){
        return <form onSubmit={this.submitForm}>
            <InputContainerStyled>
                <input onChange={this.handleChange}/>
            </InputContainerStyled>
            <button>Search</button>
        </form>
    }
}

const mapStateToProps = (state) => {
    const {
      searchGifs,
      query
    } = state
    
    return {
      searchGifs,
      query
    }
  }  

  const mapDispatchToProps = (dispatch) => {
    const { getSearchGifs } = getTrendingGifsActions.creators
    return bindActionCreators({
        getSearchGifs
    }, dispatch)
  }
  


export default SearchForm