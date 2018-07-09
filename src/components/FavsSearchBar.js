import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import favSearchBarActions from '../actions/favsSearchBar';

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

class FavsSearchBar extends Component {
    render() {
        const { value, favsSearchBarInput } = this.props;
        return (
            <Wrapper>
                <Input
                    type='text'
                    placeholder='Search'
                    value={value}
                    onChange={
                        (e) => {
                            const { value } = e.target;
                            favsSearchBarInput(value);
                        }
                    }
                />
            </Wrapper>
        );
    }

    componentWillUnmount() {
        const { favsSearchBarInput } = this.props;
        favsSearchBarInput('');
    }
}

const mapStateToProps = (state) => {
    const { favsSearchBar } = state;
    const { value } = favsSearchBar;
    return { value };
};

const mapDispatchToProps = (dispatch) => {
    const { favsSearchBarInput } = favSearchBarActions.creators;

    return bindActionCreators({ favsSearchBarInput }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FavsSearchBar);
