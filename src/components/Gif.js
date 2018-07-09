import React, {Component} from "react";
import { addFav, withdrawFav} from "../Containers/FavPage/action"
import { connect } from 'react-redux'

class Gifs extends Component{

    render(){
        const click=()=>{
            if(this.props.gif.length!==0){
                var fav=false;
                this.props.gif.map((image)=>{
                    if(image.id===this.props.id){
                        fav=true;
                    }
                });
                fav?this.props.withdrawFav(this.props.id):this.props.addFav({id:this.props.id,url:this.props.url});
            }else{
                this.props.addFav({id:this.props.id,url:this.props.url});
            }
            
        }

        return(
            <React.Fragment>
                <img alt="" src={this.props.url} key={this.props.id}/>
                <button onClick={()=>click()}>{"fav"}</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return{
    gif: state.fav.favGifs
  }}
  
  const mapDispatchToProps = {
    addFav,
    withdrawFav
  }

export default connect(mapStateToProps, mapDispatchToProps)(Gifs);