import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListGifStyled } from './ListGifs.styled'

class ListGifs extends Component {
    render() {
        const { dataSource } = this.props;
        const { list } = this.props.giphy;
        if (!list) {
            return null;
        }
        switch (dataSource) {
            default:
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
        giphy: state.giphy
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListGifs);
