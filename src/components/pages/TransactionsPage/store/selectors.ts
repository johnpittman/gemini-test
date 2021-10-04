import { createSelector } from "reselect";
import dayjs from "dayjs";
import { selectCoinAddress } from "../../../../redux/modules/auth/selectors";
import { selectTransactions } from "../../../../redux/modules/transactions/selectors";

export const handleAccountBalanceOverTime = (coinAddress, transactions) => {
  let result: {
    timestamp: string;
    balance: number;
  }[] = [];

  if (transactions) {
    let balance = 0;

    transactions.forEach((transaction, index) => {
      let amount = parseFloat(transaction.amount);

      if (transaction.toAddress === coinAddress) {
        balance += amount;
      } else {
        balance -= amount;
      }

      result.push({
        timestamp: dayjs(transaction.timestamp).format("YYYY-MM-DD HH:mm:ss"),
        balance: balance,
      });
    });
  }

  return result;
};

export const getAccountBalanceOverTime = createSelector(
  [selectCoinAddress, selectTransactions],
  handleAccountBalanceOverTime
);
