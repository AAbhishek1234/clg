import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home'
import ApplicationForm from './component/ApplicatonForm';
import ExpertCall from './component/ExpertCall'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'

function App() {
  return (
    <>
    <Router>
      <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/ApplicationForm' element={<ApplicationForm/>}/>
    <Route path='/ExpertCall' element={<ExpertCall/>}/>
    <Route path='/admin/dashboard'element={<AdminDashboard/>}/>
    <Route path='/Login' element={<Login/>}/>
 
    </Routes>
        </Router>
    </>
  )
}

export default App