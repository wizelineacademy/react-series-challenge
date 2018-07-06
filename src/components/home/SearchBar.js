/**
 * SearchBar Component
 */

import React, { Component } from 'react';

/**
 * SearchBar Component becomes a class based component to handle its value state
 */

export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: ""
        }
    }

    onTermChange = (e) => {
        const targetElement = e.target;
        const newValue = targetElement.value;
        
        this.setState( () => {
            return { term: newValue }
        } );
    }

    render(){
        return (
            <section className="SearchBar">
                <input type="text" value={this.state.term} onChange={ this.onTermChange } placeholder="Search Giphy:" />
            </section>
        );
    };
}