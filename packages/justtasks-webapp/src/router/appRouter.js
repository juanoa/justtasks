import React, {useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

import {DashboardRouter} from './dashboardRouter'
import {LoginScreen} from '../components/auth/loginScreen'
import {RegisterScreen} from '../components/auth/registerScreen'
import {PublicRoute} from "./publicRoute";
import {PrivateRoute} from "./privateRoute";
import {startChecking} from "../actions/auth";
import {Loading} from "../components/ui/Loading";

export const AppRouter = () => {

  const dispatch = useDispatch()
  const {checking, uid} = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch]);

  if (checking) {
    return <Loading />
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={!!uid}
          />
          <PublicRoute
            exact
            path="/register"
            component={RegisterScreen}
            isAuthenticated={!!uid}
          />
          <PrivateRoute
            path="/"
            component={DashboardRouter}
            isAuthenticated={!!uid}
          />
          <Redirect to='/login' />
        </Switch>
      </div>
    </Router>
  )
}