import  React,{ Component } from 'react';
import axios from 'axios';
import ListGiphy from '../components/list-giphy';
import Search from '../components/search';
// import ContainerModal from '../../modal/container/container-modal';
import Modal from '../../modal/component/modal';
import ContainerModal from '../../modal/container/container-modal';

// const listGiphy = [];
export default class ContainerListGiphy extends Component{
  state = {
    // los objetos no tiene map
    dataGiphy:[],
    modalVisible:false,
    isFavorite:false,
    colorHeart:'gray',
    selectedGIF:{}
  }
  handleCloseModal = ()=>{
    this.setState({
      modalVisible:false
    })
  }
  // this.state.datos -> []
  // this.state.datos -> [ 1 ]
  // this.state.selectedGIF -> {} -> objeto - 123
  // this.state.selectedGIF -> { image: '', ... } -> objeto - 456
  handleOpenModal = (index) =>{
    this.setState({
      modalVisible:true,
      selectedGIF:this.state.dataGiphy[index]// item de un arreglo de objetos
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
        dataGiphy:resultsGiphy.data.data
      })
    })
  }
  
  render(){
    return(
      <section className="list-giphy container">
        <Search/>
          {
            this.state.dataGiphy.map((giphy,index) => {
              return(
                <ListGiphy 
                  key={index}
                  urlGiphy={giphy.images.downsized.url}
                  description={giphy.title}
                  handleOpenModal={()=> this.handleOpenModal(index)}
                />
              )
            })
          }
          {
            this.state.modalVisible && 
              <ContainerModal >
                <Modal 
                  favorites={this.favorites}
                  handleCloseModal={this.handleCloseModal}
                  colorHeart={this.state.colorHeart}
                  GIF={this.state.selectedGIF}
                />
              </ContainerModal>
          }
      </section>      
    )
  }
  // componentWillUpdate(nextProps, nextState){
  //   nextState.dataGiphy.data.data.forEach((giphys,index) => {
  //     listGiphy.push(giphys);
  //   })
  // }
};

