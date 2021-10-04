import { api } from "../../../utils/api";

export const RETRIEVE_TRANSACTIONS = "RETRIEVE_TRANSACTIONS";
export const RETRIEVE_TRANSACTIONS_ERROR = "RETRIEVE_TRANSACTIONS_ERROR";
export const RETRIEVE_TRANSACTIONS_SUCCESS = "RETRIEVE_TRANSACTIONS_SUCCESS";

export const SEND_COINS = "SEND_COINS";
export const SEND_COINS_ERROR = "SEND_COINS_ERROR";
export const SEND_COINS_SUCCESS = "SEND_COINS_SUCCESS";

export const retrieveTransactionsAction = (params: { address: string }) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: RETRIEVE_TRANSACTIONS,
      });

      const fetchResp = await fetch(api(`/addresses/${params.address}`));
      const parsedResp = await fetchResp.json();

      dispatch({
        type: RETRIEVE_TRANSACTIONS_SUCCESS,
        payload: parsedResp,
      });
    } catch (err) {
      dispatch({
        type: RETRIEVE_TRANSACTIONS_ERROR,
        payload: {
          error: err,
        },
      });
    }
  };
};

export const sendCoinsAction = (params: {
  fromAddress: string;
  toAddress: string;
  amount: string;
}) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SEND_COINS,
      });

      await fetch(
        api(
          `/transactions?fromAddress=${params.fromAddress}&toAddress=${params.toAddress}&amount=${params.amount}`
        ),
        {
          method: "post",
        }
      );

      dispatch({
        type: SEND_COINS_SUCCESS,
        payload: {
          amount: params.amount,
        },
      });
    } catch (err) {
      dispatch({
        type: SEND_COINS_ERROR,
        payload: {
          error: err,
        },
      });
    }
  };
};
