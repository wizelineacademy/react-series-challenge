import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/presentational/Header';
import Menu from './components/presentational/Menu';
import { TrendingGiphys, Favorites } from './components/pages';

const sections = [
  { route: 'trending-giphy', title: 'Trending' , inMenu: true, component: TrendingGiphys },
  { route: 'favorites', title: 'My favorites' , inMenu: true, component: Favorites },
];

const Wrapper = styled.div`
    display: flex;  
  `;

class App extends Component {
  renderRoutes(sections) {
    return sections.map(section => {
      return (
        <Route path={`/${section.route}`} component={section.component} key={section.route} />
      );
    });
  }


  render() {
    return (
      <div>
        <Header />
        <Wrapper>
          <Menu items={sections.filter(section => section.inMenu)} />
          <Switch>
            {this.renderRoutes(sections)}
          </Switch>
        </Wrapper>
      </div>
    );
  }
}

export default App;
