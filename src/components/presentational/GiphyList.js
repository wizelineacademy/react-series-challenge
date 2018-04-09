import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
`;

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
  position: relative;
  text-align: -webkit-match-parent;
  width: 29%;
  height: 250px;
  border: 1.5px solid lightgrey;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 8px;
  
  @media (max-width: 1024px) {
    width: 42%;
  }

  @media (max-width: 615px) {
    width: 90%;
  }
`;

export const GiphyListFullItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  width: 100%;
  height: 290px;
  font-weight: bold;
  font-size: 1.25em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GiphyListItemHeader = styled.header`
  
  width: 100%;
  height: 15%;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid lightgray;
  @media (max-width: 600px) {
    
  }
`;

export const GiphyListItemBody = styled.section`
  
  width: 100%;
  height: 75%;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 600px) {
    
  }

  img {
    width: 100%;
    height: 100%
  }
`;

export const GiphyListItemFooter = styled.footer`
  
  width: 100%;
  height: 10%;
  font-size: 1.2em;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  border-top: 1px solid lightgray;
  @media (max-width: 600px) {
    
  }
`;

export const GiphyLinkFavorite = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

export const GiphyHeartFavorite = styled.span`
  background-color: ${props => props.color ? props.color : 'lightgray'};
  display: inline-block;
  height: 15px;
  margin: 0 10px;
  position: relative;
  top: 3px;
  transform: rotate(-45deg);
  width: 15px;


  &:before, &:after {
    content: '';
    background-color: ${props => props.color ? props.color : 'lightgray'};
    border-radius: 50%;
    height: 15px;
    position: absolute;
    width: 15px;
  }

  &:before {
    top: -7.5px;
    left: 0;
  }

  &:after {
    left: 7.5px;
    top: 0;
  }
`;



const GiphyListPager = styled.ul`
  position:relative;
  list-style: none;
  display: ${props => props.visible ? '-webkit-box' : 'none'};
  display: ${props => props.visible ? '-moz-box' : 'none'};
  display: ${props => props.visible ? '-ms-flexbox' : 'none'};
  display: ${props => props.visible ? '-webkit-flex' : 'none'};
  -webkit-flex-flow: row wrap;
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-flow: row wrap;
  justify-content: center;
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


const Link = styled(NavLink)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
  &:hover {
    outline-width: 0;
  }

  &:active {
    outline-width: 0;
  }
`;

const Item = ({source, clickAdd2Favorites = () =>  { }}) => {
  /*eslint no-script-url:0*/
  return (
    <GiphyListItem source={source}>
      <GiphyListItemHeader>
        <h3>{source.title}</h3>
      </GiphyListItemHeader>
      <GiphyListItemBody>
        <Link to={`/gifs/${source.id}`}>
          <img src={source.images.fixed_width.url} alt={source.title} />
        </Link>
      </GiphyListItemBody>
      <GiphyListItemFooter>
        <GiphyLinkFavorite href='javascript:void(0)' onClick={(el) => {
          clickAdd2Favorites(source, el.target);
        }} >
          {source.isFavorite === true
              ? <span>Remove from my favorites</span> 
              : <span>Send to my favorites</span>}
          <GiphyHeartFavorite color={source.isFavorite ? 'tomato' : 'lightgray'} />
        </GiphyLinkFavorite>
      </GiphyListItemFooter>
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
  const { dataSource, clickAdd2Favorites } = props;

  const renderItems = ({data, fetching}) => {
    if (!fetching) {
      if (data.length > 0) {
        return data.map((giphyItem) => {
          return <Item 
            source={giphyItem}
            key={giphyItem.id}
            clickAdd2Favorites={clickAdd2Favorites} />;
        });
      } else {
        return <GiphyListFullItem>Not found gifs ...</GiphyListFullItem>;
        
      }
    } else {
      return <GiphyListFullItem>Loading gifs ...</GiphyListFullItem>;
    }
  };
  
  return (
    <MainContainer>
      <GiphyListContainer>
        {renderItems(dataSource)}
      </GiphyListContainer>
      <GiphyListPager visible={!dataSource.fetching && dataSource.data.length > 0}>
        <GiphyListPagerButton label='First' onClick={props.onClickFirstPage} />
        <GiphyListPagerButton label='Previous' onClick={props.onClickPreviousPage} />
        <GiphyListPagerItem>
          <div>
              Current page: 
              <strong> {dataSource.pagination.offset} / {dataSource.pagination.pages}</strong>
          </div>
        </GiphyListPagerItem>
        <GiphyListPagerButton label='Next' onClick={props.onClickNextPage} />
        <GiphyListPagerButton label='Last' onClick={props.onClickLastPage} />
      </GiphyListPager>
    </MainContainer>
  );
};

export default GiphyList;
