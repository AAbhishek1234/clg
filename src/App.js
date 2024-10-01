import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home'
import ApplicationForm from './component/ApplicatonForm';
import ExpertCall from './component/ExpertCall'
import Admin from './pages/Admin'
function App() {
  return (
    <>
    <Router>
      <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/ApplicationForm' element={<ApplicationForm/>}/>
    <Route path='/ExpertCall' element={<ExpertCall/>}/>
    <Route path='/Admin'element={<Admin/>}/>
    </Routes>
        </Router>
    </>
  )
}

export default App