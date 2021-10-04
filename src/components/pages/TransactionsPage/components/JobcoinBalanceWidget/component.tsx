import * as React from "react";

import SectionCard from "../../../../core/SectionCard";

import styles from "./style.module.css";

interface JobcoinBalanceWidgetProps {
  className?: string;
  balance: number | string;
}

function JobcoinBalanceWidget(props: JobcoinBalanceWidgetProps) {
  let className = styles.JobcoinBalanceWidget;

  if (props.className) {
    className += ` ${props.className}`;
  }
  
  return (
    <SectionCard
      className={className}
      contentClassName={styles.Content}
      centerHeader
      title="Jobcoin Balance"
    >
      {props.balance}
    </SectionCard>
  );
}

export default JobcoinBalanceWidget;
