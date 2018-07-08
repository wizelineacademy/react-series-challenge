import React from "react";

const SearchUI = ({ handleChange, inrernalData, handleSubmit, data, favorites, favoritesList }) => {
  let gifCatalog;

  if(Object.keys(data).length) {
    gifCatalog = data.data.map((v) => {
      const index = v.id;
      const check = (favoritesList || []).some(({ id }) => id === index);

      return(
        <div key={index} className="row">
          <div className="col">
            <div className="gif">
              <div className="product-image">
                <img src={v.images.fixed_height_small.url} alt=""/>
              </div>
            </div>
          </div>
          <button onClick={(e) => {
                    favorites(e, {
                      url: v.images.fixed_height_small.url,
                      id: v.id
                    })
                  }}>
                  Agregar a favoritos
          </button>
          <span>{(check ? 'favorito' : '')}</span>
        </div>
      );
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Escribe el nombre de un gif</span>
        <input
            id="search"
            type="text"
            value={inrernalData.searchField}
            onChange={(e) => { handleChange(e, 'searchForm.searchField'); }}
        />
        <button type="submit">Realizar busqueda</button>
      </form>
      {gifCatalog}
    </div>
  );
};

export default SearchUI;