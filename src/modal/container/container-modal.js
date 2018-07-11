import React,{ Component } from 'react';
import { createPortal } from 'react-dom';

export default class ContainerModal extends Component{
  render(){
    return createPortal(
      this.props.children,
      document.getElementById('modal-giphy')
    )
  }
}