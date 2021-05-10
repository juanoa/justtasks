import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import {DashboardScreen} from "../components/tasks/dashboardScreen";
import {Navbar} from "../components/ui/navbar";
import {Example} from "../components/example";

export const DashboardRouter = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route
          exact
          path="/"
          component={DashboardScreen}
        />
        <Route
          exact
          path="/example"
          component={Example}
        />
        <Redirect to='/'/>
      </Switch>
    </>
  )
}