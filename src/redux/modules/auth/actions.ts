import { setAuthUser, removeAuthUser } from "../../../utils/auth";

export const LOGIN = "LOGIN";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGOUT = "LOGOUT";
export const LOGOUT_ERROR = "LOGOUT_ERROR";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const loginAction = (params: { address: string }) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        address: params.address,
      },
    });

    setAuthUser(params.address);
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    removeAuthUser();

    dispatch({
      type: LOGOUT_SUCCESS,
    });
  };
};
