import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile, deleteAccount } from '../../actions/profile'
import { Link } from 'react-router-dom'
const Dashboard = ({ auth: { user }, profile: { profile, loading } }) => {

    return (<Fragment>
        <h1 className="large text-primary">Welcome To Dashboard</h1>
        <p className="lead">
            <i className="fas fa-user"></i> Hello {user && user.name}. Nice To Meet You!!</p>
        {profile !== null ? (
            <Fragment>
                <div className="my-2">
                    <button className="btn btn-danger" onClick={() => deleteAccount()}>
                        <i className="fas fa-user-minus"></i> Delete Account
                    </button>
                </div> </Fragment>
        ) : (
            <Fragment>
                <Link to='/' className="btn btn-primary my-1"> Book Bus</Link> </Fragment>
        )}
    </Fragment>
    )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard)
