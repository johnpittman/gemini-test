import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { injectReducerBulk } from "redux-reducers-injector";

import Component from "./component";
import { selectBalance } from "../../../redux/modules/transactions/selectors";
import { selectCoinAddress } from "../../../redux/modules/auth/selectors";
import {
  retrieveTransactionsAction,
  sendCoinsAction,
} from "../../../redux/modules/transactions/actions";
import { getAccountBalanceOverTime } from "./store/selectors";
// import store from "./store";

// Resets app state so for the sake of this test just adding at app init
// injectReducerBulk(store);

function TransactionPageContainer() {
  let dispatch = useDispatch();
  let balance = useSelector(selectBalance);
  let senderAddress = useSelector(selectCoinAddress);
  let transactions = useSelector(getAccountBalanceOverTime);

  let handleSendCoins = async (params) => {
    await dispatch(
      sendCoinsAction({
        fromAddress: senderAddress,
        toAddress: params.destAddress,
        amount: params.amount,
      })
    );

    // Repull data instead of wiring up optimistic data updates
    dispatch(
      retrieveTransactionsAction({
        address: senderAddress,
      })
    );
  };

  useEffect(() => {
    dispatch(
      retrieveTransactionsAction({
        address: senderAddress,
      })
    );
  }, [dispatch, senderAddress]);

  return (
    <Component
      balance={balance}
      transactions={transactions}
      onSendCoins={handleSendCoins}
    />
  );
}

export default TransactionPageContainer;
