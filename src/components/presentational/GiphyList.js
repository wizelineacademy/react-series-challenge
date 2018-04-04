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

  @media (max-width: 800px) {
    justify-content: space-around;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const GiphyListItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  width: 31%;
  height: 250px;
  border: 1px solid;
  margin-right: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 1024px) {
    width: 46%;
  }

  @media (max-width: 600px) {
    width: 97%;
  }
`;

const GiphyListItemHeader = styled.h3`
  
  @media (max-width: 600px) {
    
  }
  
`;

const GiphyListPager = styled.ul`
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: space-around;

  @media (max-width: 800px) {
    justify-content: space-around;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const GiphyListPagerItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  
  @media (max-width: 1024px) {
    width: 46%;
  }

  @media (max-width: 600px) {
    width: 97%;
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

const Item = ({source}) => {
  return (
    <GiphyListItem source={source}>
      <header>
        <GiphyListItemHeader>{source.title}</GiphyListItemHeader>
      </header>
    </GiphyListItem>
  );
};

const GiphyListPagerButton = ({label, onClick}) => {
  return (
    <GiphyListPagerItem>
      <button onClick={onClick}>{label}</button>
    </GiphyListPagerItem>
  );
};

const GiphyList = (props) => {
  const { dataSource } = props;

  const renderItems = (data) => {
    return data.map((giphyItem) => {
      return <Item source={giphyItem} key={giphyItem.id} />;
    })
  };
  
  return (
    <GiphyListContainer>
      {renderItems(dataSource.data)}
      <GiphyListPager>
        <GiphyListPagerButton label='First' onClick={props.onClickFirstPage} />
        <GiphyListPagerButton label='Previous' onClick={props.onClickPreviousPage} />
        <GiphyListPagerButton label='Next' onClick={props.onClickNextPage} />
        <GiphyListPagerButton label='Last' onClick={props.onClickLastPage} />
      </GiphyListPager>
    </GiphyListContainer>
  );
};

export default GiphyList;
