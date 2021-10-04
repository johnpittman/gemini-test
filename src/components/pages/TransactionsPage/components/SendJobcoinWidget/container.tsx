import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Component from "./component";
import { selectCoinAddress } from "../../../../../redux/modules/auth/selectors";
import {
  retrieveTransactionsAction,
  sendCoinsAction,
} from "../../../../../redux/modules/transactions/actions";

function SendJobcoinWidgetContainer(props) {
  let dispatch = useDispatch();
  let senderAddress = useSelector(selectCoinAddress);

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

  return <Component {...props} onSendCoins={handleSendCoins} />;
}

export default SendJobcoinWidgetContainer;
