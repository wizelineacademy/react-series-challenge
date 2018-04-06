import React, { Component } from 'react';
import { HomeContainer } from './Home.styled';
import { GiphyList, InputSearch, ErrorWatcher } from '../../presentational';
import { connect } from 'react-redux';
import trendingGifsActions from '../../../actions/trendingGifs';
const { creators } = trendingGifsActions;
const { getTrendingGifsRequested } = creators;
class Home extends Component {
  componentDidMount () {
    const { getTrendingGifsRequested } = this.props;
    getTrendingGifsRequested();
  }

  render() {
    const {trendingGifs, getTrendingGifsRequested} = this.props;
    return (
      <HomeContainer>
        {/* {JSON.stringify(trendingGifs, null, 2)} */}
        <InputSearch placeholder='Search images ...' />
        <GiphyList 
          dataSource={trendingGifs}
          onClickFirstPage={() => getTrendingGifsRequested({offset:1})}
          onClickPreviousPage={() => getTrendingGifsRequested({movePrevious:true})}
          onClickNextPage={() => getTrendingGifsRequested({moveNext:true})}
          onClickLastPage={() => getTrendingGifsRequested({moveLast:true})} />
        <ErrorWatcher visible={trendingGifs.error !== ''}>{trendingGifs.error}</ErrorWatcher>
      </HomeContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const {trendingGifs} = state;

  return {
    trendingGifs
  };
};

export default connect(mapStateToProps, { getTrendingGifsRequested })(Home);
