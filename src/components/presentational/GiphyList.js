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
  position:relative;
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
  background: #ff9800;
  height: 50px;
  width:101%;
  margin-left: -15px;

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
  height: 50px;
  
  @media (max-width: 1024px) {
    width: 46%;
  }

  @media (max-width: 600px) {
    width: 97%;
  }
  & div {
    margin-top: 20px;
    font-size: 1.25em;
  }
`;

const Button = styled.button`
  font-size: 1em;
  margin: .6em;
  padding: 0.25em 1em;
  border-radius: 3px;
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
      <Button onClick={onClick}>{label}</Button>
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
    <div>
      <GiphyListContainer>
        {renderItems(dataSource.data)}
      </GiphyListContainer>
      <GiphyListPager>
        <GiphyListPagerButton label='First' onClick={props.onClickFirstPage} />
        <GiphyListPagerButton label='Previous' onClick={props.onClickPreviousPage} />
        <GiphyListPagerItem>
          <div>Current page: <strong> {dataSource.pagination.offset}</strong></div>
        </GiphyListPagerItem>
        <GiphyListPagerButton label='Next' onClick={props.onClickNextPage} />
        <GiphyListPagerButton label='Last' onClick={props.onClickLastPage} />
      </GiphyListPager>
    </div>
  );
};

export default GiphyList;
