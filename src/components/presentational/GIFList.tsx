import * as React from 'react';
import { IGIF } from '../../types/gif';
import styled from 'styled-components';

import FavButton from './FavButton';

interface IGIFListProps {
    gifs: IGIF[]
}

const _div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
function _create_item(gif: IGIF) {
    return <div style={{position: 'relative'}} key={gif.id}>
        <FavButton active={false} />
        <img src={gif.images.fixed_height.url} />
    </div>
}

const GifList = (props: IGIFListProps) => {
    return (
    <_div>
        {props.gifs.map(gif => _create_item(gif))}
    </_div>);
}

export default GifList;