import * as React from 'react';
import {connect} from 'react-redux';
import { fetch_gifs } from '../actions/gifs';
import { bindActionCreators, ActionCreator, Dispatch } from 'redux';

import * as API from '../api';
import GIFList from './presentational/GIFList';
import { IGIF } from '../types/gif';

interface IHomeViewProps {
    fetch_gifs: ActionCreator<any>
}

interface IHomeViewState {
    gifs: IGIF[]
}
class HomeView extends React.Component<IHomeViewProps, IHomeViewState> {
    public state = {
        gifs: []
    }
    public componentDidMount() {
        API.getTrending().then(({data}) => this.setState({gifs: data.data}));
        // API.search("GOOGLE").then(({data}) => console.log(data));
    }
    public render() {
        return (<div>
            <h1>Home View!</h1>
            <GIFList gifs={this.state.gifs} />
        </div>);
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
      fetch_gifs,
    }, dispatch);
};
export default connect(null, mapDispatchToProps)(HomeView);