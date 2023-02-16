import axios from "axios";

const URL='/api/'

let token = null
const localToken = window.localStorage.getItem("authToken")
const setToken = (jwt) =>{
    token = `bearer ${jwt}`
    window.localStorage.setItem("authToken",jwt)
}

if(localToken){
    setToken(localToken)
}

async function postLogin(data){
    const response = await axios.post(URL+'loginSignup',data)
    return response.data
}
async function verifyAuth(){
    const verification = await axios.get(URL+'loginSignup',{headers:{Authorization: token}})
    return verification.data
}
async function postSignUp(data){
    const res = await axios.post(URL + 'loginSignup/signup',data)
    return res.data
}
async function getAllPosts(){
    const res = await axios.get(URL + 'posts/')
    return res.data
}

export { 
    postLogin,
    verifyAuth,
    setToken,
    postSignUp,
    getAllPosts,
}