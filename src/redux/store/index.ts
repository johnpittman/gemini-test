import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createInjectStore } from "redux-reducers-injector";
import thunk from "redux-thunk";

import authReducer from "../modules/auth";
import transactionsReducer from "../modules/transactions";

const reducers = {
  global: {
    auth: authReducer,
    transactions: transactionsReducer,
  },
};

const middleware = composeWithDevTools(applyMiddleware(thunk));

const configureStore = () => {
  // Use this to avoid front-loading all reducers for large scale apps.
  return createInjectStore(reducers, {}, middleware);
};

const store = configureStore();

export default store;
