const initialState = {
  list: [],
  searchFriendList: "",
  filteredList: []
}
const commonFriendReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FRIEND":
      const { id, data } = action.payload
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data
          }
        ]
      };
    case "DELETE_FRIEND":
      const newList = state.list.filter((elem) => elem.id !== action.payload)
      return {
        ...state,
        list: newList
      };
    case "ADD_TO_FAV":
      return {
        ...state,
        list: newFilteredList(state.list, action.payload),
      }
    case "SEARCH_FRIEND":
      const searchList = state.list.filter(elem => {
        return elem.data.toLowerCase().includes(action.payload.toLowerCase());
      })
      return {
        ...state,
        searchFriendList: action.payload,
        filteredList: searchList
      }
    default:
      return state;
  }
}

export default commonFriendReducer;


const newFilteredList = (items = [], favId) => {
  const existingFavList = items.find(
    item => item.id === favId
  );
  if (existingFavList) {
    return items.map(item =>
      item.id === favId
        ? { ...item, fav: !item.fav }
        : item
    );
  }
  return [...items, { ...favId, fav: false }];
};
