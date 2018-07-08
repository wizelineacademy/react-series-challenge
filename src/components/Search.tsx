import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { search_trending, fetch_gifs as fetch_gifs_action } from '../actions/gifs';

class Search extends React.Component<any> {
    public onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        const { search, fetch_gifs } = this.props;

        // Search bar is cleared
        if (term.length === 0 || !term) fetch_gifs();

        // Only search with at least 3 chars
        if (term.length >= 3) return search(term);
    }

    public render() {
        const { query} = this.props;
        return <input onChange={this.onSearch}
                    value={query}
                    type='text'
                    placeholder='Search...' />;
    }
}
function mapStateToProps(state: any) {
    return { query: state.search }
}
function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({
        fetch_gifs: fetch_gifs_action,
        search: search_trending,
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);