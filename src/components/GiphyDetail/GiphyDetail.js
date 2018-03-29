import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Giphy, Heart } from "./GiphyDetail.styled"
import giphy from '../../actions/giphy';
import favorites from '../../actions/favorites';
import SVG from "../SVG";

export class GiphyDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.addFavorite = this.addFavorite.bind(this);
  }
  componentDidMount()
  {
    if (this.props.match)
    {
      this.props.giphyRequest(this.props.match.params.giphy_id);
    }
  }
  addFavorite() {
    
    
    this.props.toggleFavorite({id:this.props.giphy.gif.id, image: this.props.giphy.gif.images.preview_gif.url});
  }
  formatDate(date)
  {
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      date = new Date(date);
      var month = months[date.getMonth()];
      var minutes = date.getMinutes();
      minutes = (minutes < 10 ? '0' : '') + minutes;
      var hours = date.getHours() % 12;
      hours = (hours === 0 ? 12 : hours);
      var am_pm = (date.getHours() < 12 ? 'AM' : 'PM');
      return month + ' ' + date.getDate() + ' ' + date.getFullYear() + ' ' + hours + ':' + minutes + ' ' + am_pm
  }
  render() {
    var isLoading = this.props.giphy.fetching;
    


    var details = null;
    
    if (!isLoading && this.props.giphy.gif.images)
    {
      var isFavorite = this.props.favorites.gifs[this.props.giphy.gif.id];
      details = (<Giphy>
        <h2>{this.props.giphy.gif.title}</h2>
        <div className="image">
          <img src={this.props.giphy.gif.images.original.url} alt={this.props.giphy.gif.title}/>
          <Heart onClick={this.addFavorite}>{isFavorite ? SVG.HeartFill : SVG.HeartEmpty}</Heart>
        </div>
        <span>{this.formatDate(this.props.giphy.gif.import_datetime)}</span>
      </Giphy>);
    }
    return (
      <div>
        {details}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    giphy: state.giphy,
    favorites: state.favorites
  };
};

const mapDispatchToProps = (dispatch) => {
  const { giphyRequest } = giphy.creators;
  const { toggleFavorite } = favorites.creators;
  return bindActionCreators({
    giphyRequest,
    toggleFavorite
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GiphyDetailComponent);
