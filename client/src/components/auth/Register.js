import React, { Fragment, useState } from 'react'
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import PropTypes from 'prop-types'
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { register } from '../../actions/auth'



const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        contact: '',
        dob: '',
        gender: ''

    });
    const { name, email, password, password2, contact, dob, gender } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger')
        } else {
            register({ name, email, password, contact, dob, gender })
        }
    }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }
    // return (
    //   <Fragment>
    //       <h1 className="large text-primary">Sign Up</h1>
    //   <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
    //   <form className="form" onSubmit={e=> onSubmit(e)}>
    //     <div className="form-group">
    //       <input type="text" placeholder="Name" name="name" value={name} onChange={e=>onChange(e)} />
    //     </div>
    //     <div className="form-group">
    //       <input type="email" placeholder="Email Address" name="email" value={email} onChange={e=>onChange(e)} />
    //       <small className="form-text"
    //         >This site uses Gravatar so if you want a profile image, use a
    //         Gravatar email</small
    //       >
    //     </div>
    //     <div className="form-group">
    //       <input
    //         type="password"
    //         placeholder="Password"
    //         name="password"
    //         value={password} onChange={e=>onChange(e)} 
    //         // minLength="6"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <input
    //         type="password"
    //         placeholder="Confirm Password"
    //         name="password2"
    //         value={password2} onChange={e=>onChange(e)} 
    //         // minLength="6"
    //       />
    //     </div>
    //     <input type="submit" className="btn btn-primary" value="Register" />
    //   </form>
    //   <p className="my-1">
    //     Already have an account? <Link to="/login">Sign In</Link>
    //   </p>
    //   </Fragment>
    // )
    return (
        <div className="container1">
            <div className="flex-container">
                <div className="row full">
                    <div className="col-md-12">
                        <div className="form-container">

                            <div className="row sgnUp ">
                                <div className="col-md-6 right-divider pdding">
                                    <h3 className="lead-text mn-txt">
                                        Signup Here
                                    </h3>
                                    <div className="icon-soc-fb">
                                        <FaFacebookF />
                                    </div>
                                    <div className="icon-soc-gg">
                                        <FaGoogle />
                                    </div>
                                </div>
                                <div className="left-divider">
                                    <div className="col-md-6">
                                        <form className="form" onSubmit={e => onSubmit(e)}>
                                            <div className="form-group2">
                                                <label htmlFor="name">Name :</label>
                                                <input type="text" placeholder="Ex:- Baljeet Singh" name="name" value={name} className="form-control sgnUp" onChange={e => onChange(e)} />
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="email">Email-ID:</label>
                                                <input required name="email" placeholder="Ex:- baljeetsingh@gmail.com" value={email} type="email" className="form-control sgnUp" onChange={e => onChange(e)} />
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="mob-number">Mobile-No.:</label>
                                                <input required id="mob-number" placeholder="Ex:- 9670826753" type="text" name="contact" value={contact} className="form-control sgnUp" onChange={e => onChange(e)} />
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="dob">Date of Birth:</label>
                                                <input required id="dob" type="date" className="form-control sgnUp" name="dob" value={dob} onChange={e => onChange(e)} />

                                            </div>
                                            <div className="form-check form-check-inline rd">
                                                <input required className="form-check-input" type="radio" id="Male" name="gender" value="Male" onChange={e => onChange(e)} />
                                                <label className="form-check-label" htmlFor="Male">Male</label>
                                            </div>
                                            <div className="form-check form-check-inline rd">
                                                <input required className="form-check-input" type="radio" id="Female" name="gender" value="Female" onChange={e => onChange(e)} />
                                                <label className="form-check-label" htmlFor="Female">Female</label>
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="password">Password :</label>
                                                <input required id="password" name="password" value={password} placeholder="Ex:-Baljeet@1234" type="password" className="form-control sgnUp" onChange={e => onChange(e)} />
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="password">Re-Password :</label>
                                                <input required id="password2" name="password2" value={password2} placeholder="Ex:-Baljeet@1234" type="password" className="form-control sgnUp" onChange={e => onChange(e)} />
                                            </div>
                                            <div className="form-group2">
                                                <input required type="submit" value="Register" className="btn-primary btnn form-submit sub-btn sgnUp" />
                                            </div>
                                            <div>
                                                <small className="form-text text-muted link-text">Already a User?
                                                </small>
                                                <span className="signuptext"><Link to="/login">Sign-In</Link></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
};
Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register)
