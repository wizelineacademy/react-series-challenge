import React, {Component} from 'react';
import { connect } from 'react-redux';

import { ListGifStyled } from './ListGifs.styled'

class ListGifs extends Component {
    render() {
        const { dataSource } = this.props;

        switch(dataSource) {
            default:
            const { list } = this.props.trending;
            return (
                <ListGifStyled>
                {list.data.map(item => {
                    return <li key={item.id}>
                        <img src={item.images.preview_gif.url} alt={item.title} />
                    </li>;
                })}
            </ListGifStyled>
            );
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        trending: state.trending
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListGifs);
