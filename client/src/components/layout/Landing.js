import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchBuses } from '../../actions/profile'

const Landing = () => {
    const [user, exp1] = useState('')
    const [formData, setFormData] = useState({
        start: '',
        end: '',
        date: ''

    });
    const { start, end, date } = formData;
    const handleToCity = e => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
        localStorage.setItem("destination", e.target.value)
    }
    const handleFromCity = e => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
        localStorage.setItem("start", e.target.value)
    }
    const handleDate = e => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
        localStorage.setItem("date", e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const handleSubmit = bId => {
            localStorage.setItem("selectedBusId", bId)
        }
        searchBuses({ start, end }).then((busData) => {
            exp1(<div>
                <h2 className="text-primary">Buses</h2>
                <ul>
                    {busData && busData.length > 0 ? (<Fragment>
                        {busData.map(bus => (
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
                                                <Link to="/book/menu1" className="btn btn-primary" onClick={(bId) => { handleSubmit(bus._id) }} >Book Bus</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div></li>
                        ))}
                    </Fragment>) : (<h4>No Buses Found.</h4>)}</ul>
            </div>)
        })
    }


    return (
        <div>
            <div className="rdc">
                <div className="main-container">
                    <form className="form-inline" onSubmit={e => onSubmit(e)}>
                        <input type="text" placeholder="From" name="start" data-style="btn-new" className="selectpicker" value={start} onChange={e => { handleFromCity(e) }} />

                        <input type="text" name="end" placeholder="Destination" data-style="btn-new" className="selectpicker" value={end} onChange={e => { handleToCity(e) }} />

                        <input type="date" name="date" value={date} onChange={e => { handleDate(e) }} />
                        <input type="submit" className=" btn btn-success" value="Search" />
                    </form>
                    <div className="temp1">
                        Are you a New User ?
                        <Link to="/register"> Sign-In</Link>
                    </div>
                </div>
            </div>
            <div className="tickets">{user}</div>
        </div>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
    searchBuses: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { searchBuses })(Landing)
