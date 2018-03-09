import React, {Component} from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: inline-block;
`
const ItemWrapper = styled.div`
  border: ${props => props.selected ? '1px solid blue;' : ''}  }
  border-radius: 3px;
  display: inline-block;
  margin: 10px;
  text-align: center;
  max-width: 300px;
  max-height: 400px;
`

const GroupWrapper = styled.div`
  margin: 0 10px
`

const Span = styled.span`
  font-size: 10px;
  color: gray;
`
const Button = styled.button`
  border-radius: 3px;
  color: #fff;
  background-color: #5cb85c;
  width: 100%
  display: block
  margin: 10px 0;

`

class ListGimphy extends Component {

  renderInfoMessage () {
    const message = this.props.selected 
      ? 'This Gimphy is save on favorites.To remove click on image'
      : 'Click on Gimphy to save it as favorite'

    return (
      <Span>{message}</Span>
    )
  }

  render () {
    return(
      <ItemWrapper selected={this.props.selected} >
        <GroupWrapper>
          <Image src={this.props.url} alt=""/>
          {this.renderInfoMessage()}
          <Button>View Gimphy detail</Button>
        </GroupWrapper>
      </ItemWrapper>
      
    )
  }
}

export default ListGimphy
