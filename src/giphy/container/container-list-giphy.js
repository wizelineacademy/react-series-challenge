import  React,{ Component } from 'react';
import axios from 'axios';
import ListGiphy from '../components/list-giphy';
import Search from '../components/search';
// import ContainerModal from '../../modal/container/container-modal';
// import Modal from '../../modal/component/modal';

const GphApiClient = require('giphy-js-sdk-core');
const client = GphApiClient('STKCOqnN3DKDQJRPbv5il9egmGwZqRSn');

const listGiphy = [];
export default class ContainerListGiphy extends Component{
  state = {
    dataGiphy:{},
    modalVisible:false,
    colorHeart:'#777171',
    isFavorite:false,
    colorHeart:'gray'
  }

  handleCloseModal = ()=>{
    this.setState({
      modalVisible:false
    })
  }
  handleOpenModal = () =>{
    this.setState({
      modalVisible:true
    })
  }
  favorites = () =>{
    // alert('te gusta');
    this.setState({
      isFavorite:!this.state.isFavorite,
      colorHeart:this.state.isFavorite ? 'red' : 'gray'
    })
  }
  componentDidMount(){
    // donde q=ryan+gosling parametro que va a buscar y limt = cantidad a mostrar
    const url = 'http://api.giphy.com/v1/gifs/trending?&api_key=STKCOqnN3DKDQJRPbv5il9egmGwZqRSn&limit=25';
    axios.get(url)
    .then((resultsGiphy) => {
      this.setState({
        dataGiphy:resultsGiphy
      })
    })


    // prueba
    client.trending("gifs", {})
    .then((response) => {
      console.log(response, 'search')
    })
    .catch((err) => {

    })
    // fin prueba
  }
  
  render(){
    return(
      <section className="list-giphy container">
        <Search/>
          {
            listGiphy.map((giphy,index) => {
              return(
                <ListGiphy 
                  key={index}
                  urlGiphy={giphy.images.downsized.url}
                  description={giphy.title}
                  openModal={this.handleOpenModal}
                  modalVisible={this.state.modalVisible}
                  handleCloseModal={this.handleCloseModal}
                  handleOpenModal={this.handleOpenModal}
                  dataGiphyModal={listGiphy}
                  favorites={this.favorites}
                  colorHeart={this.state.colorHeart}
                />
              )
            })
          }
          {/* {
            this.state.modalVisible && 
            <ContainerModal>
              <Modal/>
            </ContainerModal>
          } */}
      </section>      
    )
  }
  componentWillUpdate(nextProps, nextState){
    nextState.dataGiphy.data.data.forEach((giphys,index) => {
      listGiphy.push(giphys);
    })
  }
};

