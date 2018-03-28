import React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import SVG from "../SVG";
import { connect } from 'react-redux';
import { MenuButton } from "./Menu.styled";
import menu from '../../actions/menu';

export class MenuComponent extends React.Component {
  render() {
    var items = null;
    if (this.props.menu.show)
    {
      items = [
        <Link to="/favorites" className="favorite" key="favorite">{SVG.HeartFill}</Link>,
        <Link to="/" className="trending" key="trending">{SVG.Fire}</Link>
      ];
    }
    return (
      <MenuButton>
        <b onClick={()=>{this.props.menuToggle()}}>+</b>
        {items}
      </MenuButton>
    );
  }
};


const mapStateToProps = (state) => {
  return {
    menu: state.menu
  };
};

const mapDispatchToProps = (dispatch) => {
  
  return bindActionCreators({
    menuToggle: menu.creators.menuToggle
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
