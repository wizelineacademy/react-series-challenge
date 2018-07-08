import React from "react";

const SearchUI = ({ handleChange, inrernalData, handleSubmit }) => {

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
    </div>
  );
};

export default SearchUI;