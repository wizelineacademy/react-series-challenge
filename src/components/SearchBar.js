import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import appActions from "../actions";
import {connect} from "react-redux";

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'filter': props.filter
        };

        this.handleClick = this.handleClick.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }

    handleClick(event) {

        event.preventDefault();

        const {
            updateFilter,
            getGiphies
        } = this.props;

        updateFilter(this.state.filter);
        getGiphies();

    }

    setFilter(event) {
        this.setState({
            'filter': event.target.value
        });
    }

    render() {

        return (
            <form onSubmit={this.handleClick}>
                <input onChange={this.setFilter} value={this.state.filter}/>
                <input type="submit" value="Actualizar"/>
            </form>
        );
    }

}

const mapStateToProps = (state) => {
    const {filter} = state;
    console.log(state);
    return {filter};
};

const mapDispatchToProps = (dispatch) => {
    const {
        updateFilter,
        getGiphies
    } = appActions.creators;

    return bindActionCreators({
        updateFilter,
        getGiphies,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
