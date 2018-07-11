import React from 'react';
import SearchBar from './SearchBar'
import GiphyList from './GiphyList';
import {bindActionCreators} from "redux";
import appActions from "../actions";
import {connect} from "react-redux";

const ListadoGeneral = (props) => {

    props.setView(appActions.enums.viewType.SEARCH);

    return (
        <React.Fragment>
            <p>En este lugar puedes ver y buscar giphies</p>
            <SearchBar/>
            <GiphyList/>
        </React.Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {
    const {setView} = appActions.creators;
    return bindActionCreators({setView}, dispatch);
};

export default connect(null, mapDispatchToProps)(ListadoGeneral);
