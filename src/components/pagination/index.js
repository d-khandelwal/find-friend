// styles
import "./styles.scss"

import prevIcon from "../../assets/images/chevron-left.svg";
import nextIcon from "../../assets/images/chevron-right.svg";

function Pagination({
  friendsPerPage,
  totalFriends,
  paginate,
  maxPageNumberLimit,
  minPageNumberLimit,
  handleNextBtn,
  handlePrevBtn,
  currentPage }) {

  const pageNumber = [];
  const pages = totalFriends / friendsPerPage;
  for (let i = 1; i <= Math.ceil(pages); i++) {
    pageNumber.push(i);
  }

  let pageIncrementBtn = null;
  if (pages > maxPageNumberLimit) {
    pageIncrementBtn = <li className="page-item" onClick={handleNextBtn}>...</li>
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li className="page-item" onClick={handlePrevBtn}>...</li>
  }

  return (
    <>
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disable" : ""}`} onClick={() => handlePrevBtn()}>
            <img className="icon" src={prevIcon} alt="prev-icon" />
          </li>

          {pageDecrementBtn}

          {pageNumber.map(number => {
            if (number < maxPageNumberLimit + 1
              && number > minPageNumberLimit) {
              return (
                <li
                  key={number}
                  className={`page-item ${currentPage === number ? "active" : ""}`}
                  onClick={() => paginate(number)}
                >
                  {number}
                </li>
              )
            }
            else { return null; }
          }
          )}

          {pageIncrementBtn}

          <li className={`page-item ${currentPage === - 1 ? "disable" : ""}`} onClick={() => handleNextBtn()}>
            <img className="icon" src={nextIcon} alt="next-icon" />
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Pagination;