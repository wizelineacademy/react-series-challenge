import React from "react";
import Item from "../Gifs/Item";

class FilteredGifs extends React.Component {
  render() {
    const { fetching, data, error } = this.props;
    return (
      <div>
        <h2>Búsqueda</h2>
        {error ? <p>{error}</p> : null}

        <div>
          {!fetching && data && data.length ? (
            <div>{data.map(item => <Item key={item.id} item={item} />)}</div>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
    );
  }
}

export default FilteredGifs;
