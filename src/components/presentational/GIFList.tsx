import * as React from 'react';
import { IGIF } from '../../types/gif';
import styled from 'styled-components';

import FavButton from './FavButton';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators, Action } from 'redux';
import { toggle_favorite } from '../../actions/gifs';
import { ActionFunctionAny } from 'redux-actions';

interface IGIFListProps {
    gifs: IGIF[],
    favs: IGIF[],
    onToggleFavorite: any
}

const _div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

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
                    <div style={{position: 'relative'}} key={gif.id}>
                        <FavButton onAddFavorite={callback} active={active} />
                        <img src={gif.images.fixed_height.url} />
                    </div>);
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