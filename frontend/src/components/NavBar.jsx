import React, {useContext, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AuthContext from '../utils/AuthProvider'


function LogOut(){

    const {setAuth,setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    function handleLogout(){
        window.localStorage.removeItem("authToken")
        setAuth(false)
        setUser(null)
        setToken('')
        navigate('/', { replace:true })
    }
    

    return(
        <ul className="navbar-nav">
            <li className="nav-item">
                <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
            </li>
        </ul>
    )
}
function LogIn(){
    return(
    <ul className="navbar-nav">
        <li className="nav-item">
            <Link className='nav-link btn btn-primary' to={'/login'} >Login</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link btn btn-outline-primary' to={'/signup'}>SignUp</Link>
        </li>
    </ul>
    )
}

export default function NavBar() {

    const {auth} = useContext(AuthContext)
    useEffect(()=>{},[auth])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container'>
            <div className='d-flex justify-content-between w-100'>
                <div className=''>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className='nav-link' to={'/'} >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to={'/articles'}>Articles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to={'/profile'}>Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to={'/compose'}>Write New</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    {auth? <LogOut/>:<LogIn/>}
                </div>
            </div>
        </div>
    </nav>
  )
}
