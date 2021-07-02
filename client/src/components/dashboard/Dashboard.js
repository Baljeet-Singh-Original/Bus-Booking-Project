import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile, deleteAccount } from '../../actions/profile'
import { Link } from 'react-router-dom'
// import DashboardActions from './DashboardActions'
// import Experience from './Experience'
import Buses from './Buses'
// const DashboardActions = () => {
//     return (
//         <div className='dash-buttons'>
//             <Link to='/edit-profile' className='btn btn-light'>
//                 <i className='fas fa-user-circle text-primary' /> Edit Profile
//         </Link>
//             <Link to='/add-experience' className='btn btn-light'>
//                 <i className='fab fa-black-tie text-primary' /> Add Experience
//         </Link>
//             <Link to='/add-buses' className='btn btn-light'>
//                 <i className='fas fa-graduation-cap text-primary' /> Add buses
//         </Link>
//         </div>
//     );
// };

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
            <Fragment><p>You don't have booked any buses.</p>
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
