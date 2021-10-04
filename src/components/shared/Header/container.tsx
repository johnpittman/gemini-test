import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Component from "./component";
import { logoutAction } from "../../../redux/modules/auth/actions";
import { selectCoinAddress } from "../../../redux/modules/auth/selectors";

function LoginPageContainer() {
  let dispatch = useDispatch();
  let senderAddress = useSelector(selectCoinAddress);

  let handleLogout = () => {
    console.log('logout');
    
    dispatch(logoutAction());
  };

  return <Component senderName={senderAddress} onLogout={handleLogout} />;
}

export default LoginPageContainer;
