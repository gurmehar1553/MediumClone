import React, {useState} from 'react'
import {postSignUp} from '../server/server'
import {useNavigate} from 'react-router-dom'

export default function Signup() {
    const [email,setEmail] = useState()
    const [cPassword,setCPassword] = useState()
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()

    const navigate = useNavigate()

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }
    function handlePassChange(e){
        setPassword(e.target.value)
    }
    function handleCPassChange(e){
        setCPassword(e.target.value)
    }
    function handleEmailChange(e){
        setEmail(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault()

        if(cPassword !== password){
            alert("Passwords Dont match!!")
            return
        }

        const dataObject = {
            username,
            password,
            email,
        }
        console.log(dataObject)
        const res = await postSignUp(dataObject)
        !res.status && alert(res.message)

        if(res.status){
            navigate('/login', { replace:true })
        }
    }

    return (
        <main className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>SignUp</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Username</label>
                                    <input onChange={handleUsernameChange} value={username} type="text" className="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input onChange={handleEmailChange} value={email} type="email" className="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input onChange={handlePassChange} value={password} type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Confirm Password</label>
                                    <input onChange={handleCPassChange} value={cPassword} type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary">SignUp</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
