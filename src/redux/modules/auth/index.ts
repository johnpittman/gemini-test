import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actions";
import { getAuthUser } from "../../../utils/auth";

const createInitialState = () => {
  return {
    address: getAuthUser(),
  };
};

export default function authReducer(state = createInitialState(), action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        address: action.payload.address,
      };
    case LOGOUT_SUCCESS:
      return createInitialState();
    default:
      return state;
  }
}
