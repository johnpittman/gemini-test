export function selectBalance(state) {
  return state.global.transactions?.balance;
}

export function selectTransactions(state) {
  return state.global.transactions?.transactions;
}

