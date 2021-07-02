import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCurrentProfile, removeBus } from '../../actions/profile'


const Profile = ({ getCurrentProfile, removeBus, auth: { user } }) => {
    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])
    return (
        <Fragment>
            <div className="profile-grid my-1">
                <div className="profile-top bg-primary p-2">
                    <h3 className="x-large">{user && user.company}</h3>
                    <h1 className="large"><i className="fas fa-user"></i> {user && user.name}</h1>
                    <div className="icons my-1">
                        <h3>
                            <i className="fas fa-globe fa-2x" />  {user && user.email}
                        </h3>
                        <h3>
                            <i className="fas fa-phone fa-2x" />  {user && user.contact}
                        </h3>
                    </div>
                </div>
                <div className="profile-exp bg-white p-2">
                    <h2 className="text-primary">Booked  Buses</h2>
                    <ul>
                        {user && user.ticket.length > 0 ? (<Fragment>
                            {user.buses.map(bus => (
                                <li key={bus._id}>

                                    <div className="container1">
                                        <div className="card">
                                            <div className="box">
                                                <div className="content">
                                                    <h2>01</h2>
                                                    <h3>{bus.name}</h3>
                                                    <h3>{bus.company}</h3>
                                                    <span> <h1>Stops:- </h1> <strong> [{bus.stops}] </strong> </span>
                                                    <span><h1>Bus Id:- </h1>{bus._id}</span>
                                                    <button className="btn btn-danger" onClick={() => removeBus(bus._id)}>Delete Bus</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div></li>
                            ))}
                        </Fragment>) : (<h4>No Tickets Found.</h4>)}</ul>
                </div>
            </div>
        </Fragment>
    )
}



Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    removeBus: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile, removeBus })(Profile)
