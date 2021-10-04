import React from "react";
import { useSelector } from "react-redux";

import Component, { AuthRouteProps } from "./component";
import { selectCoinAddress } from "../../../redux/modules/auth/selectors";

function AuthRouteContainer(props: AuthRouteProps) {
  let senderAddress = useSelector(selectCoinAddress);

  return (
    <Component authorized={senderAddress} {...props}>
      {props.children}
    </Component>
  );
}

export default AuthRouteContainer;
