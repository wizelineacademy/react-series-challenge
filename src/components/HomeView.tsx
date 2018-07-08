import * as React from 'react';
import {connect} from 'react-redux';
import { fetch_gifs } from '../actions/gifs';
import { bindActionCreators, ActionCreator, Dispatch } from 'redux';

interface IHomeViewProps {
    fetch_gifs: ActionCreator<any>
}
class HomeView extends React.Component<IHomeViewProps> {
    public componentDidMount() {
        this.props.fetch_gifs();
    }
    public render() {
        return <h1>Home View!</h1>
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
      fetch_gifs,
    }, dispatch);
};
export default connect(null, mapDispatchToProps)(HomeView);