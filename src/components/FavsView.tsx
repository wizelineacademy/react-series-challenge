import * as React from 'react';
import { IGIF } from '../types';
import GIFList from './presentational/GIFList';
import {connect} from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

interface IFavsView {
    gifs: IGIF[]
}

class FavsView extends React.Component<IFavsView, any> {
    public render() {
        return (<div>
            <h1 className="center">Your favorite GIFS</h1>
            <GIFList gifs={this.props.gifs} />
        </div>);
    }
}

function mapStateToProps(state: any) {
    const { favs } = state;
    const gifs = Object.keys(favs).map(key => favs[key]);

    return { gifs }
}
function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FavsView);