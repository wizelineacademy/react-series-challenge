import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import gifs from '../../../actions/gifs'
import searchicon from './searchicon.png'


const Input = styled.input`
    width: 300px;
    margin:0 auto;
    box-sizing: border-box;
    border: 2px solid #ccc;
    font-weight:bold;
    border-radius: 4px;
    outline:none;
    border-radius:1em;
    font-size: 16px;
    background-color: white;
    background-image: url(${searchicon});
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    &:focus{
        width: 100%;
        background-color:rgba(63,191,127,0.8);
        color:#fff;
        
    }
`

class SearchBar extends Component{
    onChangeSearch(e){
        this.props.setQuery(e.target.value)
    }
    render(){
        return(
            <form onSubmit={
                (e)=>{
                    e.preventDefault();
                   
                   const {query, searchFunction} = this.props
                   
                   searchFunction(query)
                }
            }>
                <Input onChange={this.onChangeSearch.bind(this)} value={this.props.query} type="text" placeholder="Buscar (Enter)"/>
            </form>
       )
    }
}
const querySelector = state =>{
    return state.giphyReducer.query
}
const mapStateTopProps = state =>({
    query:querySelector(state)
})
const { creators } = gifs
const { setQuery } = creators
const mapDispatchToProps = dispatch =>({
   
    setQuery(query){
        dispatch(setQuery(query))
    },
})

export default connect(mapStateTopProps,mapDispatchToProps)(SearchBar)