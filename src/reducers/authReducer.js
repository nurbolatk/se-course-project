const initial = {
  id: 0,
  email: "noone@gmail.com"
};

const authReducer = (state = initial, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        id: 1,
        email: "oleg@gmail.com"
      };
    default:
      return state;
  }
};

export default authReducer;
