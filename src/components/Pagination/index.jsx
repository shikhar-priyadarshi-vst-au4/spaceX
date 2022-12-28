import React from "react";
import {usePagination} from "../../hooks/usePagination";
import "./pagination.css";

const LEFT_PAGE = "LEFT_PAGE";
const RIGHT_PAGE = "RIGHT_PAGE";

// interface PaginationProps {
//   onPageChanged: (nextIndex: number | string) => void,
//   totalCount: number,
//   siblingCount: number,
//   currentPage: number,
//   pageSize: number,
// }


const Pagination = (props) => {
  const {
    onPageChanged,
    totalCount = 0,
    siblingCount = 1,
    currentPage = 1,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });



  const onNext = () => {
    onPageChanged(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChanged(currentPage - 1);
  };

  console.log(paginationRange);

  const lastPage = paginationRange?.[paginationRange?.length - 1];

  if (paginationRange?.length < 2) {
    return null;
  }

  return (
    <ul
      className={"pagination my-1 justify-content-end"}
      data-testid="paginationid"
    >
      <li
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
        data-testid="leftarrow"
        onClick={currentPage === 1 ? () => {/* */} : onPrevious}
      >
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      {paginationRange?.map((pageNumber,index) => {
        if (pageNumber === LEFT_PAGE) {
          return <li key={index} className="page-item dots">
            <a className="page-link" href="#">{"..."}</a>
          </li>;
        }

        if (pageNumber === RIGHT_PAGE) {
          return <li key={index} className="page-item dots">
            <a className="page-link" href="#">{"..."}</a>
          </li>;
        }
        return (
          <li
            key={index}
            className={`page-item ${pageNumber === currentPage ? "active" : ""}` }
            onClick={() => onPageChanged(pageNumber)}
            data-testid={`pageitem${index}`}
          >
            <a className="page-link" href="#" data-testid={pageNumber === currentPage ? "onpage":''}>{pageNumber}</a>
          </li>
        );
      })}
      <li
        className={`page-item ${currentPage === lastPage ? "disabled" : ""}`}
        onClick={currentPage === lastPage ? () => {/* */} : onNext}
        data-testid="rgtarrow"
      >
        <a className="page-link" href="#">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;