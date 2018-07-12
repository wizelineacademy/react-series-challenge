import React from 'react';
import GiphyList from './GiphyList';
import {bindActionCreators} from "redux";
import appActions from "../actions";
import {connect} from "react-redux";

const ListadoFavoritos = (props) => {

    props.setView(appActions.enums.viewType.FAVORITES);

    return (
        <React.Fragment>
            <p>En este lugar puedes ver tus giphies favoritos</p>
            <GiphyList/>
        </React.Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {
    const {setView} = appActions.creators;
    return bindActionCreators({setView}, dispatch);
};

export default connect(null, mapDispatchToProps)(ListadoFavoritos);
