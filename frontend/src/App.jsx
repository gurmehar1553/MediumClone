import { BrowserRouter as Router, Routes, Route, useLocation, Outlet, Navigate } from 'react-router-dom'
import Home from './routes/Home'
import NavBar from './components/NavBar'
import Articles from './routes/Articles'
import Profile from './routes/Profile'
import ComposeArticle from './routes/ComposeArticle'
import Login from './routes/Login'
import Signup from './routes/Signup'
import {useContext} from 'react'
import AuthContext from './utils/AuthProvider'


function PrivateRoutes(){
  const location = useLocation()
  const {auth,authLoading} = useContext(AuthContext);

  if(authLoading){
    return <div> Not Logged in </div>
  }
  return auth ? <Outlet />: <Navigate to='/login' state={{ path: location.pathname}}  replace />
}

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/profile' element={<Profile/>} exact /> 
            <Route path='/compose' element={<ComposeArticle />} exact />
          </Route>
          <Route path='/' element={<Home/>} exact />
          <Route path='/articles' element={<Articles/>} exact />
          <Route path='/login' element={<Login />} exact />
          <Route path='/signup' element={<Signup />} exact />
      </Routes>
    </Router>
  )
}

export default App
