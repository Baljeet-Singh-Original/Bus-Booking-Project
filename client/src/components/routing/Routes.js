import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../../App.css';
import Login from '../auth/Login'
import Register from '../auth/Register'
import Alert from '../layout/Alert'
import Dashboard from '../dashboard/Dashboard'
import Profile from '../layout/Profile'
import NotFound from '../layout/NotFound'
import About from '../layout/About'
import PrivateRoute from '../routing/PrivateRoute'
import PaymentTab from '../layout/PaymentTab/PaymentTab'
import SeatSelection from '../layout/SeatSelection/SeatSelection'
import TicketPage from '../layout/TicketPage/TicketPage'


const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/book/menu1" component={SeatSelection} />
        <PrivateRoute exact path="/book/menu2" component={PaymentTab} />
        <PrivateRoute exact path="/book/ticket" component={TicketPage} />
        <Route component={NotFound} />
      </Switch>
    </section>

  )
}

export default Routes