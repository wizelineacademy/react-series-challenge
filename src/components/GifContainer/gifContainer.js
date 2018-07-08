import React, {Component} from 'react'
import {AddFavButton, RemoveFavButton} from '../ActionButtons'
import heart from '../../assets/heart.png'
import plus from '../../assets/plus.png'
import remove from '../../assets/remove.png'

class GifContainer extends Component{
    render(){
        // let actionButton 
        // if(this.props.isFav === -1){
        //     actionButton  = this.props.action === 'add' ? <AddFavButton data-id={this.props.id}/>: <RemoveFavButton data-id={this.props.id}/>
        // }
        return <div>
                    <img src={this.props.url} alt={this.props.title} key={'trending-' + this.props.id}/>
                    <br/>
                    {this.props.isFav === -1 ? '':<img alt={'fav' + this.props.title} key={'fav' + this.props.id} src={heart}/>}
                    <br/>
                    <label>{this.props.title}</label>
                    <br/>
                    
                    {
                        this.props.isFav === -1 ? 
                        <button className='btn-action' onClick={this.props.clickFuncion} data-id={this.props.id}>
                            {
                                this.props.action === 'add' ? 
                                <div><img src={plus} alt='add to favs' data-id={this.props.id} height={100} /><br/><label>Add to favs</label></div>:
                                <div><img src={remove} alt='remove from favs' data-id={this.props.id} height={100}/><br/><label>Remove</label></div>
                            }
                        </button>
                        :
                        null
                    }
                    
                    <hr/>
</div>
    }
}

export default GifContainer