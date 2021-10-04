import React from "react";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import SectionCard from "../../core/SectionCard";
import JobcoinBalanceWidget from "./components/JobcoinBalanceWidget";
import SendJobcoinWidget from "./components/SendJobcoinWidget";

import styles from "./style.module.css";

export interface TransactionPageProps {
  balance: string;
  transactions: any[];
}

function TransactionPage(props: TransactionPageProps) {
  return (
    <div className={styles.Page}>
      <div className={styles.SenderSections}>
        <JobcoinBalanceWidget className={styles.SenderWidget} />
        <SendJobcoinWidget className={styles.SenderWidget} />
      </div>
      <div className={styles.HistorySection}>
        {/* Refactor to app state component */}
        <SectionCard
          className={styles.HistorySectionCard}
          contentClassName={styles.HistorySectionCardContent}
          headerClassName={styles.HistorySectionCardHeader}
          title="Jobcoin History Graph"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={props.transactions || []}
              margin={{
                top: 5,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                name="Balance"
                type="monotone"
                dataKey="balance"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>
    </div>
  );
}

export default TransactionPage;
