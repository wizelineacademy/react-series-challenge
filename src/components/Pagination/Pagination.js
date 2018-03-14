import React from 'react';
import { PaginationButton } from './style';

const Pagination = ({ pagination, searchTerm, searchGifs, getTrendingGifs }) => {
  if (!pagination) {
    return null;
  }
  const { offset, total_count, count } = pagination;
  const totalPages = parseInt(total_count / count + 1, 10);
  const actualPage = parseInt(offset / count + 1, 10);
  let clickHanlder;

  if (!actualPage) {
    return null;
  }

  if (searchTerm) {
    clickHanlder = (page) => searchGifs({ page, searchTerm })
  } else {
    clickHanlder = (page) => getTrendingGifs(page) 
  }

  return (
    <div>
      { actualPage >= 4 && <PaginationButton onClick={() => clickHanlder(actualPage - 4)}>{ actualPage - 3 }</PaginationButton> }
      { actualPage >= 3 && <PaginationButton onClick={() => clickHanlder(actualPage - 3)}>{ actualPage - 2 }</PaginationButton> }
      { actualPage >= 2 && <PaginationButton onClick={() => clickHanlder(actualPage - 2)}>{ actualPage - 1 }</PaginationButton> }
      <PaginationButton active>{ actualPage }</PaginationButton>
      { actualPage < totalPages - 1 && <PaginationButton onClick={() => clickHanlder(actualPage)}>{ actualPage + 1 }</PaginationButton> }
      { actualPage < totalPages - 2 && <PaginationButton onClick={() => clickHanlder(actualPage + 1)}>{ actualPage + 2 }</PaginationButton> }
      { actualPage < totalPages - 3 && <PaginationButton onClick={() => clickHanlder(actualPage + 2)}>{ actualPage + 3 }</PaginationButton> }
    </div>
  )
}

export default Pagination