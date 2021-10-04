import React, {useEffect} from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import {DashboardScreen} from "../components/tasks/dashboardScreen";
import {ConfigurationScreen} from "../components/configuration/configurationScreen";
import {Navbar} from "../components/ui/navbar";
import {taskStartLoading} from "../actions/tasks";
import {useDispatch} from "react-redux";

export const DashboardRouter = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(taskStartLoading())
  }, []);

  return (
    <>
      <Navbar/>
      <Switch>
        <Route
          exact
          path="/home"
          component={DashboardScreen}
        />
        <Route
          exact
          path="/configuration"
          component={ConfigurationScreen}
        />
        <Redirect to='/home'/>
      </Switch>
    </>
  )
}