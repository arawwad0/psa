import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "components/global/Loader";

const ExpenseManager = lazy(() => import("routes/ExpenseManager"));
const CreateExpenseManager = lazy(() => import("routes/CreateExpenseManager"));

const App = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/create" component={CreateExpenseManager} />
        <Route path="/" component={ExpenseManager} />
      </Switch>
    </Suspense>
  </Router>
);
export default App;
