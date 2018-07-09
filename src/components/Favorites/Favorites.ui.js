import React from 'react';

// Components
import Search from "./../Search/Search";
import Menu from  './../Sidebar/Sidebar';

const UI = ({ favoritesList }) => {

  let gifCatalog;

  if(favoritesList && Object.keys(favoritesList).length) {
    gifCatalog = favoritesList.map((v, i) => {
      const index = `${i}--${v.id}`;

      return(
        <div key={index} className="row">
          <div className="col">
            <div className="gif">
              <div className="product-image">
                <img src={v.url} alt=""/>
              </div>
            </div>
          </div>
          <button>Eliminar de mis favoritos</button>
        </div>
      );
    })
  }

    return(
        <div>
          <Menu />
          <Search />
          {gifCatalog}
        </div>
    );
};

export default UI;

