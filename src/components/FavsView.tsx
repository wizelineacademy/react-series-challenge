import * as React from 'react';
import { IGIF } from '../types';
import GIFList from './presentational/GIFList';
import {connect} from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import FavsSearch from './FavsSearch';

import { _div_search } from './FavsView.style'

interface IFavsView {
    gifs: IGIF[]
}

class FavsView extends React.Component<IFavsView, any> {
    public render() {
        return (<div>
            <h1 className="center">Your favorite GIFS</h1>
            <_div_search>
                <FavsSearch />
            </_div_search>
            <GIFList gifs={this.props.gifs} />
        </div>);
    }
}

function filterFavs(favs: object, query: string) {
    const gifs = Object.keys(favs).map(key => favs[key]);

    // Don't filter if there is no query term
    if (!query || query.length === 0) return gifs;

    return gifs.filter((gif: IGIF) => gif.title.includes(query));
}

function mapStateToProps(state: any) {
    return { gifs: filterFavs(state.favs, state.filter_favs) }
}
function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FavsView);