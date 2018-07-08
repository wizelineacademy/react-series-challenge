import React, {Component} from 'react'

class GifContainer extends Component{
    render(){
        return <div>
                    <img src={this.props.url} alt={this.props.title} key={'trending-' + this.props.id}/>
                    <br/>
                    {this.props.isFav === -1 ? '':<img alt={'fav' + this.props.title} key={'fav' + this.props.id} src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.png'/>}
                    <br/>
                    <label>{this.props.title}</label>
                    <br/>
                    {
                        this.props.isFav === -1 ? 
                        <button onClick={this.props.clickFuncion} data-id={this.props.id}>{this.props.textButton}</button>
                        :
                        null
                    }
                    
                    <hr/>
                </div>
    }
}

export default GifContainer