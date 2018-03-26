import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import trending from '../../actions/trending';

class TrendingList extends React.Component {
  constructor (props){
    super(props);
    props.getTrendingRequested();
  }

  render() {
    const {
      trending,
    } = this.props;

    const {
      fetching,
      ...resTrending,
    } = trending;

    return (
      <div>
        {
          fetching ?
         'Loading...' :
          resTrending.data && resTrending.data.length > 0 ?
            resTrending.data.map((key, idx) => (
            <div key={key.id}>
                <img src={key.images.fixed_height_still.url} />
              </div>
            )) : <span></span>
        }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {
    trending,
  } = state;

  return {
    trending,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { getTrendingRequested } = trending.creators;

  return bindActionCreators({
    getTrendingRequested,
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TrendingList);
