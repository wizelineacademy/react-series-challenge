import * as React from 'react';
import {connect} from 'react-redux';
import { fetch_gifs } from '../actions/gifs';
import { bindActionCreators, ActionCreator, Dispatch } from 'redux';

import * as API from '../api';
import GIFList from './presentational/GIFList';
import { IGIF } from '../types/gif';

interface IHomeViewProps {
    fetch_gifs: ActionCreator<any>
    gifs: IGIF[]
}

class HomeView extends React.Component<IHomeViewProps, any> {
    public componentDidMount() {
        this.props.fetch_gifs();
    }
    public render() {
        return (<div>
            <h1 className="center">Trending GIFS</h1>
            <GIFList gifs={this.props.gifs} />
        </div>);
    }
}

function mapStateToProps(state: any) {
    return { gifs: state.trending }
}
function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({
      fetch_gifs,
    }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);