import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DasboardLayout from "./layouts/DasboardLayout";
import AuthRoute from "./shared/AuthRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Redirect exact from="/dashboard" to="/dashboard/transactions" />
        <Route path="/login">
          <LoginPage />
        </Route>
        <AuthRoute path="/dashboard">
          <DasboardLayout />
        </AuthRoute>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
