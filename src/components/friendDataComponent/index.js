import { useState } from "react";
// icons
import addIcon from "../../assets/images/icon-add.svg";
import StarIcon from "../../utils/starIcon";
import TrashIcon from "../../utils/trashIcon";

// custom components
import PrimaryButton from "../primaryButton";
import PrimaryInput from "../primaryInput";
import Pagination from "../pagination";

import { useDispatch, useSelector } from "react-redux";
import { addToFavourite, addFriend, deleteFriend } from "../../actions";

function FriendDataComponent() {
  const [inputData, setInputData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [friendsPerPage, setFriendsPerPage] = useState(4);
  const [pageNumberLimit] = useState(2);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(2);

  const dispatch = useDispatch();
  const { list, searchFriendList, filteredList } = useSelector((state) => state.commonFriendReducer);

  // for add friend
  const addUser = () => {
    if (inputData === "") {
      alert("Please enter some value");
      return
    }
    dispatch(addFriend(inputData), setInputData(""))
  }

  // get current page
  const indexOfLastFriend = currentPage * friendsPerPage;
  const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
  // const currentFriendPage = list.slice(indexOfFirstFriend, indexOfLastFriend);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  // next button
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  // prev button
  const handlePrevBtn = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }

    if (currentPage > 1 && ((currentPage - 1) % pageNumberLimit === 0)) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }

  // for search
  const toggleList = () => {
    if (searchFriendList === "") {
      const currentFriendPage = list.slice(indexOfFirstFriend, indexOfLastFriend);
      return currentFriendPage;
    }
    return filteredList
  }

  return (
    <>
      <div className="add-friend-box">
        <PrimaryInput
          className="add-input"
          type="text"
          placeholder="Enter your friend's name"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />
        <PrimaryButton
          className="add-btn"
          btnIcon={addIcon}
          onClick={addUser}
        />
      </div>
      {(toggleList().length)
        ?
        <div className="show-data">
          {toggleList().map((elem) => {
            return (
              <div key={elem.id} className="friend-card">
                <div className="friend-info">
                  <h3 className="friend-name">{elem.data}</h3>
                  <div className="label-text">is your friend</div>
                </div>
                <div className="btn-box">
                  <PrimaryButton
                    className={`warning favourite-btn ${elem.fav ? "favAdded" : ""}`}
                    svgIcon={<StarIcon />}
                    onClick={() => dispatch(addToFavourite(elem.id))}
                  />
                  <PrimaryButton
                    className="danger delete-btn"
                    svgIcon={<TrashIcon />}
                    onClick={() => dispatch(deleteFriend(elem.id))}
                  />
                </div>
              </div>
            )
          })}
        </div>
        :
        <p className="empty-state">No Data found!</p>
      }
      <Pagination
        friendsPerPage={friendsPerPage}
        totalFriends={list.length}
        paginate={paginate}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        handleNextBtn={handleNextBtn}
        handlePrevBtn={handlePrevBtn}
        currentPage={currentPage}
      />
    </>
  )
}
export default FriendDataComponent;