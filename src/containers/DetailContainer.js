import {connect} from "react-redux";
import Detail from "../components/Detail";

const mapStateToProps = ({favorites, trending}) => ({
  favorites: favorites.original,
  trending
});

const DetailContainer = connect(
  mapStateToProps
)(Detail);

export default DetailContainer;
