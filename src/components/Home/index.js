import React, {Component} from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestSearchGifs } from "../../giphyClient/actions";

class Home extends Component{

    componentDidMount(){
        this.props.requestSearchGifs()
    }
    
    render(){
        var imgTags = []
        if(this.props.data.data != undefined){
            const gifs = this.props.data.data
            gifs.forEach(function(item, index){
                console.log(item)
                imgTags.push(<img alt='description' key={'gif' + index} src={item.images['original'].url} />)
            })
        }
        

        return  <div className='home'>
            <h1>Home page</h1>
            {imgTags}
        </div>
    }
}


const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestSearchGifs }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
