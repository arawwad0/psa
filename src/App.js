import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from "components/global/Loader";

const ExpenseManager = lazy(() => import("routes/ExpenseManager"));

const App = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" component={ExpenseManager}/>
      </Switch>
    </Suspense>
  </Router>
);
export default App;
