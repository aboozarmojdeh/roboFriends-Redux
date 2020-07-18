import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
  searchField: "",
};

export const searchRobots = (state = initialState, action = {}) => {
    // console.log(action.type)
    // console.log(action.payload)
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    //   return Object.assign({}, state, {searchField: action.payload})

    default:
      return state;
  }
};
