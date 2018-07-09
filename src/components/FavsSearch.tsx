import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { filter_favs as filter_favs_action } from '../actions/gifs';

class FavsSearch extends React.Component<any> {
    public onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        return this.props.filter_favs(term);
    }

    public render() {
        return <input type='text'
                onChange={this.onSearch}
                placeholder='Search in your favorites...' />;
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({
        filter_favs: filter_favs_action,
    }, dispatch);
}
export default connect(null, mapDispatchToProps)(FavsSearch);