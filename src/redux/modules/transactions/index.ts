import {
  RETRIEVE_TRANSACTIONS,
  RETRIEVE_TRANSACTIONS_ERROR,
  RETRIEVE_TRANSACTIONS_SUCCESS,
  SEND_COINS,
  SEND_COINS_ERROR,
  SEND_COINS_SUCCESS,
} from "./actions";

import { LOGOUT_SUCCESS } from "../auth/actions";

const createInitialState = () => {
  return {
    balance: 0,
    transactions: null,
    retrieveError: null,
    sendError: null,
  };
};

export default function transactionsReducer(
  state = createInitialState(),
  action
) {
  switch (action.type) {
    case RETRIEVE_TRANSACTIONS:
      return {
        ...state,
        loadingTransactions: true,
        retrieveError: null,
      };
    case RETRIEVE_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loadingTransactions: false,
        retrieveError: null,
        balance: action.payload.balance,
        transactions: action.payload.transactions,
      };
    case RETRIEVE_TRANSACTIONS_ERROR:
      return {
        ...state,
        loadingTransactions: false,
        retrieveError: action.payload,
      };
    case SEND_COINS:
      return {
        ...state,
        sendingCoins: true,
        sendError: null,
      };
    case SEND_COINS_SUCCESS:
      return {
        ...state,
        sendingCoins: false,
        sendError: null,
      };
    case SEND_COINS_ERROR:
      return {
        ...state,
        sendingCoins: false,
        sendError: action.payload,
      };
    case LOGOUT_SUCCESS:
      return createInitialState();
    default:
      return state;
  }
}
