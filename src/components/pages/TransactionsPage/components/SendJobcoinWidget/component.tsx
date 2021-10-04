import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import SectionCard from "../../../../core/SectionCard";

import styles from "./style.module.css";

interface SendJobcoinWidgetProps {
  className?: string;
  onSendCoins: (params: { destAddress: string; amount: string }) => any;
}

function SendJobcoinWidget(props: SendJobcoinWidgetProps) {
  const [destAddress, setDestAddress] = useState("");
  const [amount, setamount] = useState("");

  let className = styles.SendJobcoinWidget;

  if (props.className) {
    className += ` ${props.className}`;
  }

  let canSend = () => {
    return amount && destAddress;
  };

  let handleAddressChange = (event) => {
    setDestAddress(event.target.value);
  };

  let handleAmountChange = (event) => {
    setamount(event.target.value);
  };

  let handleFormSubmit = (event) => {
    event.preventDefault();

    props.onSendCoins({
      destAddress,
      amount,
    });
  };

  return (
    <SectionCard
      className={className}
      centerHeader
      title="Send Jobcoin"
    >
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Jobcoin Address"
          variant="outlined"
          sx={{
            height: 28,
            width: "100%",
          }}
          onChange={handleAddressChange}
        />
        <TextField
          label="Amount to Send"
          variant="outlined"
          sx={{
            height: 28,
            width: "100%",
            marginTop: 6,
          }}
          onChange={handleAmountChange}
        />
        <Button
          variant="contained"
          disabled={!canSend()}
          sx={{
            height: 28,
            width: "100%",
            marginTop: 6,
            textTransform: "capitalize",
          }}
          onClick={handleFormSubmit}
        >
          Send Jobcoins
        </Button>
      </form>
    </SectionCard>
  );
}

export default SendJobcoinWidget;
