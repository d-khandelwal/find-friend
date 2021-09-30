// styles
import "./styles.scss"

// custom components
import PageHelmet from "../../components/pageHelmet";
import SearchComponent from "../../components/searchComponent";
import FriendDataComponent from "../../components/friendDataComponent"
import { searchFriend } from "../../actions"
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const { searchFriendList } = useSelector((state) => state.commonFriendReducer);
  const dispatch = useDispatch();

  return (
    <>
      <PageHelmet title="Search a friend" />
      <div className="page-wrapper">
        <div className="find-container">
          <div className="header-box">
            <h1 className="heading">Friends List</h1>
            <div className="search-box">
              <SearchComponent
                value={searchFriendList}
                onChange={(e) => dispatch(searchFriend(e.target.value))}
              />
            </div>
          </div>

          <FriendDataComponent />

        </div>
      </div>
    </>
  )
}
export default Home;