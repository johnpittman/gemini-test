import React from "react";
import Button from "@mui/material/Button";

import logo from "../../../images/doge-logo.png";
import avatar from "../../../images/avatar.png";

import styles from "./style.module.css";

export interface HeaderProps {
  senderName: string;
  onLogout: () => void;
}

function Header(props: HeaderProps) {
  return (
    <header className={styles.Header}>
      <div className={styles.Left}>
        <img className={styles.Logo} src={logo} alt="logo" />
        <span className={styles.Sender}>{props.senderName}</span>
      </div>
      <div className={styles.Right}>
        <img className={styles.Avatar} src={avatar} alt="avatar" />
        <span className={styles.RightText}>Signed In</span>
        <Button
            variant="text"
            sx={{
              fontSize: 12,
              textTransform: 'capitalize',
              padding: 0
            }}
            onClick={props.onLogout}
          >
            Sign Out
          </Button>
      </div>
    </header>
  );
}

export default Header;
