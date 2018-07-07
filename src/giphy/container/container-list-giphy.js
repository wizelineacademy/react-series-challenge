import  React,{ Component } from 'react';
import axios from 'axios';
import ListGiphy from '../components/list-giphy';

// const GphApiClient = require('giphy-js-sdk-core')
// client = GphApiClient('STKCOqnN3DKDQJRPbv5il9egmGwZqRSn');
const listGiphy = [];
export default class ContainerListGiphy extends Component{
  state = {
    dataGiphy:{}
  }
  componentDidMount(){
    // donde q=ryan+gosling parametro que va a buscar y limt = cantidad a mostrar
    const url = 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=STKCOqnN3DKDQJRPbv5il9egmGwZqRSn&limit=10';
    axios.get(url)
      .then((resultsGiphy) => {
        this.setState({
          dataGiphy:resultsGiphy
        },()=>{
          console.log(
            // this.state.dataGiphy.data,
            // this.state.dataGiphy.data.data[0].images.downsized.url
          );
        })
      })
  }
 
  render(){
    // if( listGiphy.length === 0 ) return <div />
    return(
      <React.Fragment>
        <div>
          {
            listGiphy.map((giphy,index) => {
              return(
                <ListGiphy 
                  key={index}
                  urlGiphy={giphy.images.downsized.url}
                />
              )
            })
          }
        </div>
      </React.Fragment>
      
    )
  }
  componentWillUpdate(nextProps, nextState){
    nextState.dataGiphy.data.data.forEach((giphys,index) => {
      listGiphy.push(giphys);
    })
  }
};

