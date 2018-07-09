import * as React from 'react';
import { IGIF } from '../../types';
import styled from 'styled-components';

import FavButton from './FavButton';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { toggle_favorite } from '../../actions/gifs';

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

const _gif_div = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: 1em;
`;
const _gif_title = styled.p`
    position: absolute;
    top: 0px;
    min-height: 32px;
    text-align: center;
    background-color: rgba(0,0,0, 0.5);
    color: #FFF;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    small { padding: 1em; text-align: center; }
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