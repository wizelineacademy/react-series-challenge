import React, {Component} from "react"; 
import {NavLink} from "react-router-dom";

    

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={
            tag:""
        }
    }

    render(){
        return(
            <ul>
                <li><NavLink to="/" activeClass="active">Home</NavLink></li>
                <li><NavLink to="/fav" activeClass="active">Favs</NavLink></li>
                <li>
                    <form onSubmit={this.props.search(this.state.tag)}>
                        <input type="text" name="busqueda" placeholder="Busqueda" onChange={event => this.setState({ tag: event.target.value })}/>
                        <input type="submit" value="Submit"/>
                    </form>
                </li>
            </ul>
    );
    }
    

}
export default Navbar;