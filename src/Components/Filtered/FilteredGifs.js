import React from "react";
import Item from "../Gifs/Item";

const FilteredGifs = ({ fetching, data, error }) => (
  <div>
    {error ? (
      <p>{error}</p>
    ) : (
      <div>
        {!fetching && data && data.length ? (
          data.map(item => <Item key={item.id} item={item} />)
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    )}
  </div>
);

export default FilteredGifs;
