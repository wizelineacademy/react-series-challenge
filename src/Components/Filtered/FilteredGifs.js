import React from "react";
import Item from "../Gifs/Item";
import FilteredErrorBoundary from "./FilteredErrorBoundary";

const FilteredGifs = ({ fetching, data, error }) => (
  <FilteredErrorBoundary>
    <div>
      {error ? (
        <p>{error.message}</p>
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
  </FilteredErrorBoundary>
);

export default FilteredGifs;
