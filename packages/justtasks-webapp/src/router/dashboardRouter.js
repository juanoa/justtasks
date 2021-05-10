import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import {DashboardScreen} from "../components/tasks/dashboardScreen";
import {Navbar} from "../components/ui/navbar";

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
        <Redirect to='/'/>
      </Switch>
    </>
  )
}