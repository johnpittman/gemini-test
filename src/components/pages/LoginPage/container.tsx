import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";

import Component from "./component";
import { loginAction } from "../../../redux/modules/auth/actions";
import { selectCoinAddress } from "../../../redux/modules/auth/selectors";

function LoginPageContainer() {
  let dispatch = useDispatch();
  let history = useHistory();
  let senderAddress = useSelector(selectCoinAddress);

  return senderAddress ? (
    <Redirect to="dashboard" />
  ) : (
    <Component
      onLogin={(address: string) => {
        dispatch(
          loginAction({
            address,
          })
        );

        history.push(`dashboard/transactions`);
      }}
    />
  );
}

export default LoginPageContainer;
