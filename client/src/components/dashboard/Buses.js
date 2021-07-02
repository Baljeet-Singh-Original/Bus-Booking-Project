import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deletebuses } from '../../actions/profile'


const buses = ({ buses, deletebuses }) => {
    const busess = buses.map(edu => (

        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td>{edu.degree}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
                {edu.to === "" ? (
                    ' Now'
                ) : (
                    <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
                )}
            </td>
            <td>
                <button onClick={() => deletebuses(edu._id)} className='btn btn-danger'>Delete</button>
            </td>
        </tr>

    ))
    return (
        <Fragment>
            <h2 className="my-2">buses Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Institute</th>
                        <th>Degree</th>
                        <th>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{busess}</tbody>
            </table>
        </Fragment>
    )
}

buses.propTypes = {
    buses: PropTypes.array.isRequired,
    deletebuses: PropTypes.func.isRequired
}

export default connect(null, { deletebuses })(buses)
