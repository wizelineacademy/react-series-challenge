import React from 'react';
import {bindActionCreators} from "redux";
import appActions from "../actions";
import {connect} from "react-redux";

const SearchBar = (props) => {

    const {getGiphies} = props;

    return (
        <div>
            <input/>
            <button onClick={getGiphies}>Actualizar</button>
        </div>
    );

};

const mapDispatchToProps = (dispatch) => {
    const {getGiphies} = appActions.creators;

    return bindActionCreators({
        getGiphies,
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
