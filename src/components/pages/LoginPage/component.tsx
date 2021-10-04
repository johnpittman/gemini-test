import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

import logo from "../../../images/doge-logo.png";

import styles from "./style.module.css";

export interface LoginPageProps {
  onLogin: (value: string) => void;
}

function LoginPage(props: LoginPageProps) {
  const [address, setAddress] = useState("");

  let handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  let handleFormSubmit = (event) => {
    event.preventDefault();
    
    props.onLogin(address);
  };

  return (
    <div className={styles.Page}>
      <div className={styles.LogoArea}>
        <img className={styles.Logo} src={logo} alt="logo" />
      </div>
      <div className={styles.LoginSection}>
        <div className={styles.LoginSectionHeader}>
          Welcome! Sign In With Your Jobcoin Address
        </div>
        <form className={styles.LoginSectionContent} onSubmit={handleFormSubmit}>
          <TextField
            id="outlined-basic"
            label="Jobcoin Address"
            variant="outlined"
            sx={{
              height: 34,
            }}
            onChange={handleAddressChange}
          />
          <Button
            variant="contained"
            sx={{
              height: 34,
              marginTop: 6,
            }}
            onClick={handleFormSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <div className={styles.BottomBuffer}></div>
    </div>
  );
}

export default LoginPage;
