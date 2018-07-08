import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import searchBarActions from '../actions/searchBar';
import gifListActions from '../actions/gifList';

const Wrapper = styled.div`
background: skyblue;
display: block;
height: 25px;
width: 100%;
`;

const Input = styled.input`
background: white;
float: right;
height: 20px;
border: 1px solid black;
border-radius: 5px;
`;

class HomeSearchBar extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeSearchBar);
