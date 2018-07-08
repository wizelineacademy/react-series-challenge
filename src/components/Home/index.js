import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getTrendingGifsActions from '../../actions/trendingGifs'

class Home extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getTrendingGifs()
    }

    render(){
        const trendingGifs = this.props.trendingGifs.trendingGifs
        var arrayGifs = []
        if(trendingGifs.length > 0){
            trendingGifs.forEach(function(item, index){
                arrayGifs.push(<img src={item.images["fixed_height_still"].url} key={'trending-' + index}/>)
            })
        }
        return <div className='home'>
            {arrayGifs}
        </div>
    }
}


const mapStateToProps = (state) => {
    const {
      trendingGifs,
    } = state
    
    return {
      trendingGifs,
    }
  }  

const mapDispatchToProps = (dispatch) => {
    const { getTrendingGifs } = getTrendingGifsActions.creators
    
    return bindActionCreators({
        getTrendingGifs,
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)