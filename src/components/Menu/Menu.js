import React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import SVG from "../SVG";
import { connect } from 'react-redux';
import { MenuButton } from "./Menu.styled";
import menu from '../../actions/menu';

import TimeLine, { Event } from '../../test/reacnimation/React-nimation';
export class MenuComponent extends React.Component {
  	constructor(props)
  	{
		super(props);
		this.timeLine = new TimeLine(600);
		var effects = {
			favorite: [{
				time: {start: 200, duration: 200},
				value: {start: 35, end: 0},
				property: "y",
				ease: TimeLine.easeOutBack
			}, {
				time: {start: 200, duration: 200},
				value: {start: 0, end: 1},
				property: "opacity"
			},{
				time: 200,
				value: ['none', 'block'],
				property: 'display'
			}],
			trending: [{
				time: {start: 100, duration: 200},
				value: {start: 60, end: 0},
				property: "y",
				ease: TimeLine.easeOutBack
			}, {
				time: {start: 100, duration: 200},
				value: {start: 0, end: 1},
				property: "opacity"
			},{
				time: 200,
				value: ['none', 'block'],
				property: 'display'
			}]
		}
		this.timeLine.addEventListener(Event.CHANGE, 'refresh', this);
		this.timeLine.setEffects(effects);
  	}
	componentDidMount()
	{
		
	}
	componentWillUnmount()
	{
		this.timeLine.pause();
	}
	componentWillReceiveProps(props)
	{
		this.timeLine.direction = (props.menu.show ? 1 : -1);
		this.timeLine.play();
	}
	refresh()
	{
		this.forceUpdate();
	}
	render() {
		var favorite_style = this.timeLine.getEffect('favorite');
		var trending_style = this.timeLine.getEffect('trending');
		
		return (
		<MenuButton>
			<b onClick={()=>{this.props.menuToggle()}}>+</b>
			<Link 
				to="/favorites"
				className="favorite"
				style={favorite_style}
				onClick={()=>{this.props.menuToggle()}}
			>
				{SVG.HeartFill}
			</Link>
			<Link 
				to="/"
				className="trending"
				style={trending_style}
				onClick={()=>{this.props.menuToggle()}}
			>
				{SVG.Fire}
			</Link>
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
