import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Header from "../../shared/Header";
import TransactionsPage from "../../pages/TransactionsPage";

import styles from "./style.module.css";

export interface TransactionPageProps {}

function DasboardLayout() {
  let { path } = useRouteMatch();

  return (
    <div className={styles.DasboardLayout}>
      <Header />
      <main className={styles.Content}>
        <Switch>
          <Route exact path={`${path}/transactions`}>
            <TransactionsPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default DasboardLayout;
