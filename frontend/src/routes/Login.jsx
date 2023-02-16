import React, {useContext, useState} from 'react'
import {postLogin, setToken} from '../server/server'
import AuthContext from '../utils/AuthProvider'
import {useNavigate} from 'react-router-dom'

export default function Login() {

    const [username,setUsername] = useState()
    const [password,setPassword] = useState()

    const{setUser, setAuth} = useContext(AuthContext)
    const navigate = useNavigate()

    function handleUsernameChange(e){
        setUsername(e.target.value)
        console.log(username)
    }
    function handlePassChange(e){
        setPassword(e.target.value)
        console.log(password)
    }
    async function handleSubmit(e){
        e.preventDefault()

        console.log('defaultPrevented')

        const dataObject = {
            email:username,
            password
        }
        const res = await postLogin(dataObject) 
        !res.status && alert(res.message)

        if(res.status){
            console.log(res)
            setToken(res.token)
            setUser(res.user)
            setAuth(true)
            navigate('/profile', { replace:true })
        }
        setUsername('')
        setPassword('')
    }


    return (
        <main className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Login</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input onChange={handleUsernameChange} value={username} type="email" className="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input onChange={handlePassChange} value={password} type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
