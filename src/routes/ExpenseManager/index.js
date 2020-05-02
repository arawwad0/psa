import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import { ActiveStateProvider } from "contexts/activeStat";

import Loader from "components/global/Loader";
import Navbar from "components/global/Navbar";

import styles from "./index.module.css";

const Overview = lazy(() => import("./Overview"));
const MyReports = lazy(() => import("./MyReports"));

const ExpenseManger = () => {
  const routes = [
    { text: "Overview", url: "/" },
    { text: "My Reports", url: "/my-reports" },
  ];

  return (
    <section>
      <h2 className={styles.title}>Expense Report Manager</h2>
      <Navbar routes={routes} />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <ActiveStateProvider>
              <Overview />
            </ActiveStateProvider>
          </Route>
          <Route path="/my-reports" component={MyReports} />
        </Switch>
      </Suspense>
    </section>
  );
};
export default ExpenseManger;
