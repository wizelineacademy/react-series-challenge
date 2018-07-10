import React, {
    Component
} from "react";
import {
    addFav,
    withdrawFav
} from "../Containers/FavPage/action"
import {
    connect
} from 'react-redux'

import {Wraper, ImgStyled} from "./Gif.style";

class Gifs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "Fav",
            fav: false
        }
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        if (this.props.gif.length > 0) {
            this.props.gif.map((image) => {
                if (image.id === this.props.id) {
                    this.setState({
                        fav: true,
                        buttonText: "NotFav"
                    });
                }
            });
        }
    }

    onClick() {
        if (this.props.gif.length > 0) {
            this.props.gif.map((image) => {
                if (image.id === this.props.id) {
                    this.setState({
                        fav: true
                    });
                }
            });
            if(this.state.fav){
                this.props.withdrawFav(this.props.id);
                this.setState({
                    fav: false,
                    buttonText:"Fav"
                });
            } else{ this.props.addFav({
                id: this.props.id,
                url: this.props.url
            });
            this.setState({
                fav: true,
                buttonText:"NotFav"
            });
            }
        } else {
            this.props.addFav({
                id: this.props.id,
                url: this.props.url
            });
            this.setState({
                fav: true,
                buttonText:"NotFav"
            });
        }

    }

    render() {
        return ( 
            < React.Fragment >
            <Wraper onClick = {this.onClick}>
                <ImgStyled src={require("./"+this.state.buttonText+".png")}   />
                <img 
                alt = ""
                src = {this.props.url}
                key = {this.props.id}
                />
                </Wraper>
            </ React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        gif: state.fav.favGifs
    }
}

const mapDispatchToProps = {
    addFav,
    withdrawFav
}

export default connect(mapStateToProps, mapDispatchToProps)(Gifs);