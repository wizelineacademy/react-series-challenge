import  React,{ Component } from 'react';
import axios from 'axios';
import ListGiphy from '../components/list-giphy';
import Search from '../components/search';
// import ContainerModal from '../../modal/container/container-modal';
import Modal from '../../modal/component/modal';

const listGiphy = [];
export default class ContainerListGiphy extends Component{
  state = {
    dataGiphy:{},
    modalVisible:false,
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
                />
              )
            })
          }
          {
          this.state.modalVisible && 
          <Modal 
            favorites={this.favorites}
            handleCloseModal={this.handleCloseModal}
            colorHeart={this.state.colorHeart}
            listGiphy={listGiphy}
          />
          }
      </section>      
    )
  }
  componentWillUpdate(nextProps, nextState){
    nextState.dataGiphy.data.data.forEach((giphys,index) => {
      listGiphy.push(giphys);
    })
  }
};

