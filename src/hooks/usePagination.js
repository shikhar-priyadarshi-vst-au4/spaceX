import {useMemo} from "react";
const LEFT_PAGE = "LEFT_PAGE";
const RIGHT_PAGE = "RIGHT_PAGE";

// interface PaginationHookProps{
//   totalCount : number,
//   pageSize : number,
//   siblingCount : number,
//   currentPage : number
// }

const range = (start, end) => {
  const length = end - start + 1;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};


export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage = 1
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(+totalCount / +pageSize);

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
	
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, RIGHT_PAGE, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, LEFT_PAGE, ...rightRange];
    }
     
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, LEFT_PAGE, ...middleRange, RIGHT_PAGE, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange || [];
};