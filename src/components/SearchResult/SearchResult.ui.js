import React from "react";

// Components
import Search from './../Search/Search';
import Menu from './../Sidebar/Sidebar';

const SearchUI = ({ data, favorites, favoritesList, handleClick }) => {
  let gifCatalog;

  if (Object.keys(data).length) {
    gifCatalog = data.data.map((v) => {
      const index = v.id;
      const check = (favoritesList || []).some(({ id }) => id === index);

      return (
        <div key={index} className="row">
          <div className="col">
            <div className="gif">
              <div className="product-image">
                <img src={v.images.fixed_height_small.url} alt="" />
              </div>
            </div>
          </div>
          {
            (!check ?
              <button onClick={(e) => { favorites(e, { url: v.images.fixed_height_small.url, id: v.id, title: v.title }) }}>
                Agregar a favoritos
              </button> :
              <button onClick={() => { handleClick(v.id) }}>Eliminar de mis favoritos</button>
            )
          }
          <span>{(check ? 'favorito' : '')}</span>
        </div>
      );
    })
  }

  return (
    <div>
      <Menu />
      <Search />
      {gifCatalog}
    </div>
  );
};

export default SearchUI;