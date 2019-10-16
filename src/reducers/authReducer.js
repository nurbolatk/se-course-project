import { SIGNIN, LOGOUT, REQUEST_SIGNIN } from "../actions";

const initial = {
  id: null,
  email: "",
  isFetching: false,
  roles: [],
  firstName: "",
  lastName: ""
};

const authReducer = (state = initial, action) => {
  switch (action.type) {
    case REQUEST_SIGNIN:
      return {
        ...state,
        isFetching: true
      };
    case SIGNIN:
      console.log(action);
      return {
        ...state,
        ...action.data,
        isFetching: false
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authReducer;
