import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Wrapper, Input } from './SearchBar.style';
import searchBarActions from '../actions/searchBar';
import gifListActions from '../actions/gifList';

class SearchBar extends Component {
    render() {
        const { searchBarInput, value, getTrendingGifs } = this.props;
        return (
            <Wrapper>
                <Input
                    type='text'
                    placeholder='Search'
                    value={value}
                    onChange={
                        (e) => {
                            const { value } = e.target;
                            if (value.length) {
                                searchBarInput(value);
                            } else {
                                searchBarInput(value);
                                getTrendingGifs();
                            }
                        }
                    }
                />
            </Wrapper>
        );
    }

    componentWillUnmount() {
        const { searchBarInput } = this.props;
        searchBarInput('');
    }
}

const mapStateToProps = (state) => {
    const { searchBar } = state;
    const { value } = searchBar;
    return { value };
};

const mapDispatchToProps = (dispatch) => {
    const { searchBarInput } = searchBarActions.creators;
    const { getTrendingGifs } = gifListActions.creators;

    return bindActionCreators({ searchBarInput, getTrendingGifs }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
