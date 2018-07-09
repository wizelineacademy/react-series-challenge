import { bindActionCreators } from 'redux';
import search from '../../actions/search'
import { connect } from 'react-redux';
import { debounce } from '../../utils'
import React from 'react'
import './index.css'

const SearchBar = ({ placeholder, onSearch }) => {
    /**
     * 
     */
    const debouncedInput = debounce(onSearch, 250)
    const onInput = event => debouncedInput(event.target.value);
    /**
     * 
     */
    return(
        <section className="bar" >
            <input className="search" type="search" placeholder={placeholder} onInput={onInput} />
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    /**
     * 
     */
    const { getSearch: onSearch } = search.creators
    /**
     * 
     */
    return bindActionCreators({ onSearch }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar) 