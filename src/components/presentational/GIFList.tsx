import * as React from 'react';
import { IGIF } from '../../types';

import FavButton from './FavButton';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { toggle_favorite } from '../../actions/gifs';

import {_div, _gif_div, _gif_title} from './GIFList.style'

interface IGIFListProps {
    gifs: IGIF[],
    favs: IGIF[],
    onToggleFavorite: any
}
class GIFList extends React.Component<IGIFListProps, any> {
    public render() {
        const props = this.props;
        const { gifs, onToggleFavorite, favs } = props;
        return (
        <_div>
            { gifs ?
                gifs.map(gif => {
                    const callback = onToggleFavorite.bind(null, gif);
                    const active = favs[gif.id];
                    return (
                    <_gif_div key={gif.id}>
                        <_gif_title>
                            <small>{gif.title}</small>
                            <FavButton onAddFavorite={callback} active={active} />
                        </_gif_title>
                        <img src={gif.images.fixed_height.url} />
                    </_gif_div>);
                })
            :   <h2>No GIFs found!</h2>  }
        </_div>);
    }
}

function mapStateToProps(state: any) {
    return { favs: {...state.favs} }
}
function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({
        onToggleFavorite: toggle_favorite
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(GIFList);