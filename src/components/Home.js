import React, { Component } from "react";
import { GiftContainer }  from '../styled_component/Home.styled'

class Home extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        data: 300,
        principal: 'temperature',
      };
    }
  
  
    render() {
      const { data, principal } = this.state;
  
      return (
        <GiftContainer>
          <h3>{data}</h3>
          <span>{principal}</span>
        </GiftContainer>

      );
    }
  }
  
export default Home;