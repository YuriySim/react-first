import React from 'react';

import { getPagesArray } from '../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {
  const pagesArray = getPagesArray(totalPages);

  return (
    <div className="blog__pagination">
      {pagesArray.map((p, index) =>
        <span
          key={ index }
          className={
            page === p
              ? 'blog__pagination-btn blog__pagination-btn_active'
              : 'blog__pagination-btn'
          }
          onClick={() => changePage(p)}
        >
          {p}
        </span>
      )}
    </div>
  );
};

export default Pagination;
