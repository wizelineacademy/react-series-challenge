import  React,{ Component } from 'react';
import axios from 'axios';

// const GphApiClient = require('giphy-js-sdk-core')
// client = GphApiClient('STKCOqnN3DKDQJRPbv5il9egmGwZqRSn');


export default class ContainerListGiphy extends Component{
  state = {
    dataGiphy:[]
  }
  componentDidMount(){
    this.getDataGiphy();
  }
  getDataGiphy = () =>{
    const url = 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=STKCOqnN3DKDQJRPbv5il9egmGwZqRSn&limit=5';
    axios.get(url)
      .then((resultsGiphy) => {
        this.setState({
          dataGiphy:resultsGiphy
        },()=>{
          console.log(this.state.dataGiphy);
        })
      })
  }

  render(){
    return(
      <div>
        Hola
      </div>
    )
  }
};
