import React from 'react';

// Components
import Search from "./../Search/Search";
import Menu from  './../Sidebar/Sidebar';

const UI = ({ favoritesList, handleClick, gitFilter, handleChange, inrernalData }) => {

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
          <button onClick={() => {handleClick(v.id)}}>Eliminar de mis favoritos</button>
        </div>
      );
    })
  }

    return(
        <div>
          <Menu />
          <div>
            <form onSubmit={gitFilter}>
              <span>Escribe el nombre de un gif</span>
              <input
                  id="search"
                  type="text"
                  value={inrernalData.searchField}
                  onChange={(e) => { handleChange(e, 'searchForm.searchField'); }}
              />
              <button type="submit">Realizar busqueda</button>
            </form>
          </div>
          {gifCatalog}
        </div>
    );
};

export default UI;

