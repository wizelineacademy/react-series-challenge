import React, {Component} from 'react'
import {AddFavButton, RemoveFavButton} from '../ActionButtons'
import heart from '../../assets/heart.png'

class GifContainer extends Component{
    render(){
        let actionButton 
        if(this.props.isFav === -1){
            if(this.props.action === 'add'){
                actionButton = <AddFavButton  id={this.props.id}/>
            }
            else{
                actionButton = <RemoveFavButton  id={this.props.id}/>
            }
        }
        return <div>
                    <img src={this.props.url} alt={this.props.title} key={'trending-' + this.props.id}/>
                    <br/>
                    {this.props.isFav === -1 ? '':<img alt={'fav' + this.props.title} key={'fav' + this.props.id} src={heart}/>}
                    <br/>
                    <label>{this.props.title}</label>
                    <br/>
                    {actionButton}
                    <hr/>
</div>
    }
}

export default GifContainer