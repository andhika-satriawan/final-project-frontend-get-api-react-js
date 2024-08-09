import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { NavLink } from "react-router-dom"

const HomeComponent = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const fetchData = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        try {
            const response = await axios.get('http://final_project_backend_andhika.test/api/user');
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
            if (error.response && error.response.status === 401) {
                // Tindakan jika token tidak valid
                localStorage.removeItem('token');
                navigate('/');
            }
        }
    };

    useEffect(() => {
        // cek jika token kosong, kembalikan ke halaman login
        if (!token) {
            navigate('/')
        }
        fetchData()
    }, [])

    // LOGOUT
    const logoutHandler = async () => {
        // set token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.post('http://final_project_backend_andhika.test/api/logout')
            .then(() => {
                localStorage.removeItem('token')
                navigate('/')
            })
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card border-0 rounded shadow-sm mt-2">
                        <div className="card-body clearfix">
                            <h3 className="text-center">Selamat datang <strong className='text-uppercase'>{user.name}</strong></h3>
                            <hr />
                            <button onClick={logoutHandler} className='btn btn-md btn-danger'>LOGOUT</button>
                            <NavLink to={'/tambah'} className="btn btn-md btn-success rounded shadow-sm mb-3 float-end">Tambah Data</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
