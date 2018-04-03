import React from 'react';
// import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const GiphyListContainer = styled.ul`
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: space-around;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  @media (max-width: 800px) {
    justify-content: space-around;
  }
`;

const GiphyListItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  width: 450px;
  height: 400px;
  border: 1px solid;
  margin-right: 20px;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    width: 100%;
    &:last-of-type a {
      border-bottom: none;
    }
  }

  & a.active {
    background: tomato;
    color: white;
  }
`;

const GiphyListItemHeader = styled.h3`
  
  @media (max-width: 600px) {
    
  }
  
`;

// const Link = styled(NavLink)`
//   text-decoration: none;
//   color: white;
//   &:hover {
//     background: #EF9800;
//     outline-width: 0;
//   }

//   &:active {
//     outline-width: 0;
//   }
// `;

const GiphyList = (props) => {
  const { dataSource } = props;
  console.log('​GiphyList -> dataSource', dataSource);

  const Item = ({source}) => {
    return (
      <GiphyListItem source={source}>
        <header>
          <GiphyListItemHeader>{source.title}</GiphyListItemHeader>
        </header>
      </GiphyListItem>
    );
  };

  const renderItems = (data) => {
    return data.map((giphyItem) => {
      return <Item source={giphyItem} key={giphyItem.id} />;
    })
  };
  
  return (
    <GiphyListContainer>
      {renderItems(dataSource.data)}
    </GiphyListContainer>
  );
};

export default GiphyList;
