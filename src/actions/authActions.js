import { REQUEST_SIGNIN, SIGNIN, LOGOUT } from ".";

export const signInAction = (userCredentials, history) => {
  return (dispatch, getState) => {
    dispatch({ type: REQUEST_SIGNIN });
    // make asyn call to server
    setTimeout(() => {
      const data = {
        email: userCredentials.email,
        firstName: "Oleg",
        lastName: "Ivanov",
        roles: ["ADMIN"],
        id: 1
      };
      dispatch({ type: SIGNIN, data: data });
      history.push("/");
    }, 600);
  };
};

export const logOutAction = dispatch => {
  return {
    logOut: history => {
      dispatch({ type: LOGOUT });
      history.push("/");
    }
  };
};
