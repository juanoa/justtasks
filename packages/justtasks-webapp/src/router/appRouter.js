import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom'

import {DashboardRouter} from './dashboardRouter'
import {LoginScreen} from '../components/auth/loginScreen'
import {RegisterScreen} from '../components/auth/registerScreen'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/login"
            component={LoginScreen}
          />
          <Route
            exact
            path="/register"
            component={RegisterScreen}
          />
          <Route
            path="/"
            component={DashboardRouter}
          />
          <Redirect to='/login' />
        </Switch>
      </div>
    </Router>
  )
}