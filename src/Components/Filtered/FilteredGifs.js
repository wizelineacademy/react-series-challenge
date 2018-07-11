import React from "react";
import Item from "../Gifs/Item";
import FilteredErrorBoundary from "./FilteredErrorBoundary";
import { ContainerStyled } from "../../theme/Container.styled";

const FilteredGifs = ({ fetching, data, error }) => (
  <FilteredErrorBoundary>
    <ContainerStyled>
      {error ? (
        <p>{error.message}</p>
      ) : !fetching && data && data.length ? (
        data.map(item => <Item key={item.id} item={item} />)
      ) : (
        <p>Cargando...</p>
      )}
    </ContainerStyled>
  </FilteredErrorBoundary>
);

export default FilteredGifs;
