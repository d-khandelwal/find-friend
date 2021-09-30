// Action: Add friend
export const addFriend = (data) => {
  return {
    type: "ADD_FRIEND",
    payload:
    {
      id: new Date().getTime().toString(),
      data: data,
      fav: false
    }
  }
}
// Action: Favourite friend
export const addToFavourite = (id) => {
  return {
    type: "ADD_TO_FAV",
    payload: id
  }
}
// Action: Delete friend
export const deleteFriend = (id) => {
  return {
    type: "DELETE_FRIEND",
    payload: id
  }
}
// Action: Search friend
export const searchFriend = (value) => {
  return {
    type: "SEARCH_FRIEND",
    payload: value
  }
}