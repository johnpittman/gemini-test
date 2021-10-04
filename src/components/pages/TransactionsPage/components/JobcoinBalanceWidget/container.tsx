import React from "react";
import { useSelector } from "react-redux";

import Component from "./component";
import { selectBalance } from "../../../../../redux/modules/transactions/selectors";

function JobcoinBalanceWidgetContainer(props) {
  let balance = useSelector(selectBalance);

  return <Component {...props} balance={balance} />;
}

export default JobcoinBalanceWidgetContainer;
