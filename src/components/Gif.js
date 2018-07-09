import React, {Component} from "react";
import { addFav, withdrawFav} from "../Containers/FavPage/action"
import { connect } from 'react-redux'

class Gifs extends Component{

    componentDidMount(){
        const { gif} = this.props;
    }

    

    render(){

        const click=()=>{
            if(this.props.gif.length!==0){
                console.log("len diferente de 0");
                
                var fav;
                this.props.gif.map((image)=>{
                    image.id===this.props.id?fav=true:fav=false;
                });
                fav?this.props.addFav({id:this.props.id,url:this.props.url,favorite:false}):this.props.withdrawFav(this.props.id);
            }else{
                this.props.addFav({id:this.props.id,url:this.props.url,favorite:false});
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