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
    
    // setTimeout(()=>{
    //   this.getDataGiphy(),
    //   3000
    // })

    // donde q=ryan+gosling parametro que va a buscar y limt = cantidad a mostrar
    const url = 'http://api.giphy.com/v1/gifs/trending?&api_key=STKCOqnN3DKDQJRPbv5il9egmGwZqRSn&limit=25';
    axios.get(url)
    .then((resultsGiphy) => {
      this.setState({
        dataGiphy:resultsGiphy
      })
    })
  }
  
  // getDataGiphy = () =>{
  //   alert('me recargue');
  //   // donde q=ryan+gosling parametro que va a buscar y limt = cantidad a mostrar
  //   const url = 'http://api.giphy.com/v1/gifs/trending?q=ryan+gosling&api_key=STKCOqnN3DKDQJRPbv5il9egmGwZqRSn&limit=25';
  //   axios.get(url)
  //   .then((resultsGiphy) => {
  //     this.setState({
  //       dataGiphy:resultsGiphy
  //     })
  //   })
  // }

  render(){
    return(
        <section className="list-giphy">
          <form>
            <input 
              className="input-search"
              type="text" 
              placeholder="Search Giphy"/>
          </form>
          
          {
            listGiphy.map((giphy,index) => {
              return(
                <ListGiphy 
                  key={index}
                  urlGiphy={giphy.images.downsized.url}
                  description={giphy.title}
                />
              )
            })
          }
        </section>      
    )
  }
  componentWillUpdate(nextProps, nextState){
    nextState.dataGiphy.data.data.forEach((giphys,index) => {
      listGiphy.push(giphys);
    })
    console.log(listGiphy);
  }
};

