import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import {DashboardScreen} from "../components/tasks/dashboardScreen";
import {ConfigurationScreen} from "../components/configuration/configurationScreen";
import {Navbar} from "../components/ui/navbar";

export const DashboardRouter = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route
          exact
          path="/dashboard"
          component={DashboardScreen}
        />
        <Route
          exact
          path="/configuration"
          component={ConfigurationScreen}
        />
        <Redirect to='/dashboard'/>
      </Switch>
    </>
  )
}