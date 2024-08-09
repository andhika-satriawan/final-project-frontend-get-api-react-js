import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Register = () => {
    // buat state
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    // state untuk navigasi
    const navigate = useNavigate()

    // state untuk validasi
    const [validation, setValidation] = useState([])

    // function register
    const registerHandler = async (e) => {
        e.preventDefault();

        // inisialisasi formData
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("password_confirmation", passwordConfirmation);

        // send data ke server
        await axios.post('http://final_project_backend_andhika.test/api/register', formData)
            .then(() => {
                // jika sukses, redirect ke halaman login
                navigate("/")
            })
            .catch((error) => {
                // jika gagal, tampilkan error
                setValidation(error.response.data)
            })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-body">
                            <h3 className="fw-bold mb-3">FORM REGISTER</h3>
                            <hr />
                            <form onSubmit={registerHandler}>
                                <div className="row">
                                    <div className="mb-3 row">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Name</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                            {
                                                validation.name && (
                                                    <div className="alert alert-danger">
                                                        {validation.name[0]}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
                                        <label htmlFor="password_confirmation" className="col-sm-4 col-form-label">Password Confirmation</label>
                                        <div className="col-sm-8">
                                            <input type="password" className="form-control" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-4 col-form-label"></label>
                                        <div className="col-sm-8">
                                            <button type="submit" className="btn btn-md btn-success">Register</button>
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

export default Register