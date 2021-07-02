import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Landing from './Landing'
import SeatSelection from './SeatSelection/SeatSelection'
import PaymentTab from './PaymentTab/PaymentTab'
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import PropTypes from 'prop-types'

const BookBus = (setAlert) => {
    return (
        <div className="container">
            {/* <div> */}
            {/* <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
                    <a href="/#" className="navbar-brand Company-Log" >UT</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-3">
                        <ul className="navbar-nav ml-auto nav-flex-icons ic">
                            <li className="nav-item">
                                <a href="/#" className="nav-link waves-effect waves-light" ><i className="fa fa-user user"></i></a>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link waves-effect waves-light">Sign-Out</a>
                            </li>
                        </ul>
                    </div>
                </nav> */}
            {/* </div> */}
            <div>
                <ul className="nav nav-pills">
                    {/* <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="/book/home">Select Bus</a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link " data-toggle="pill" href="/book/menu1">Select Seat</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="/book/menu2">Payment</a>
                    </li>
                </ul>

                <div className="tab-content">
                    {/* <div className="tab-pane container active mn-box" id="home"><Landing /></div> */}
                    <div className="tab-pane container fade mn-box" id="menu1"><SeatSelection /></div>
                    <div className="tab-pane container fade mn-box" id="menu2"><PaymentTab /></div>
                </div>
            </div>

        </div>
    )
}



BookBus.propTypes = {
    setAlert: PropTypes.func.isRequired,
    // searchBuses: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert })(BookBus)