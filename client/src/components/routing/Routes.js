import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../../App.css';
import Login from '../auth/Login'
import Register from '../auth/Register'
import Alert from '../layout/Alert'
import Dashboard from '../dashboard/Dashboard'
// import CreateProfile from '../profile-forms/CreateProfile'
// import EditProfile from '../profile-forms/EditProfile'
// import AddExperience from '../profile-forms/AddExperience'
// import Addbuses from '../profile-forms/Addbuses'
// import Profiles from '../profiles/Profiles'
import Profile from '../layout/Profile'
// import Posts from '../posts/Posts'
// import Post from '../post/Post'
import NotFound from '../layout/NotFound'
import About from '../layout/About'
import PrivateRoute from '../routing/PrivateRoute'
import BookBus from '../layout/BookBus'
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
        {/* <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} /> */}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/profile" component={Profile} />
        {/* <PrivateRoute exact path="/book/" component={BookBus} /> */}
        {/* <PrivateRoute exact path="/book/home" component={PaymentTab} /> */}
        <PrivateRoute exact path="/book/menu1" component={SeatSelection} />
        <PrivateRoute exact path="/book/menu2" component={PaymentTab} />
        <PrivateRoute exact path="/book/ticket" component={TicketPage} />
        {/* <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-buses" component={Addbuses} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} /> */}
        <Route component={NotFound} />
      </Switch>
    </section>

  )
}

export default Routes