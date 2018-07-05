import React, {Component} from "rect";

class Gif extends Component{
    liked =(like)=>{
        if (like) {
            return <p>Liked</p>
        } else {
            return <p>Not Liked</p>
        }
    };
    render(){
        return(
            <>
                <img src={this.props.src}/>
                {this.liked(this.props.liked)}
            </>
        );
    }
}
export default Gif;