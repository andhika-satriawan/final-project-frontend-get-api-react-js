import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    // state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [validation, setValidation] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home')
        }
    }, [])

    // function login
    const loginHandler = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        // send data to server
        await axios.post('http://final_project_backend_andhika.test/api/login', formData)
            .then((response) => {
                navigate('/home')
                // console.log("token", response.data.token);
                localStorage.setItem("token", response.data.token)
            })
            .catch((error) => {
                setValidation(error.response.data)
            })
    }

    return (
        <div className="container full-height center-form">
            <div className="row justify-content-center">
                <div className="col-md-8 mx-auto">
                    <div className="card border-1 rounded shadow-sm">
                        <div className="card-body">
                            <h3 className="fw-bold mb-3">FORM LOGIN</h3>
                            <hr />
                            {
                                validation.message && (
                                    <div className="alert alert-danger">
                                        {validation.message}
                                    </div>
                                )
                            }
                            <form onSubmit={loginHandler}>
                                <div className="row">
                                    <div className="mb-3 row">
                                        <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            {
                                                validation.email && (
                                                    <div className="alert alert-danger">
                                                        {validation.email[0]}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="password" className="col-sm-4 col-form-label">Password</label>
                                        <div className="col-sm-8">
                                            <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
                                            {
                                                validation.password && (
                                                    <div className="alert alert-danger">
                                                        {validation.password[0]}
                                                    </div>
                                                )
                                            }

                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-4 col-form-label"></label>
                                        <div className="col-sm-8">
                                            <button type="submit" className="btn btn-md btn-success">Login</button>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-4 col-form-label"></label>
                                        <div className="col-sm-8">
                                            <NavLink to="/register">Belum punya akun silahkan daftar</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login