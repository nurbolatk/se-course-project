import { SIGNIN, LOGOUT } from "../actions";

const initial = {};

const authReducer = (state = initial, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        ...action.data
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authReducer;
