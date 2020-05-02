import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "components/global/Loader";

const Overview = lazy(() => import("./Overview"));
const MyReports = lazy(() => import("./MyReports"));

const ExpenseManger = () => {

  return(
  <section>
    <h2>Expense Report Manager</h2>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route path="/my-reports" component={MyReports} />
        </Switch>
      </Suspense>
  </section>
)};
export default ExpenseManger;
