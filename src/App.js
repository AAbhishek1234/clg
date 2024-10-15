import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home'
//import Navbar from './component/Navbar'
import ApplicationForm from './component/ApplicatonForm';
import ExpertCall from './component/ExpertCall'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import DelhiUniversity from './component/DelhiUniversity';
import Harayana from './component/Harayana';
import Kurukshetra from './component/Kurukshetra';
import DelhiUni from './component/DelhiUni';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import Jamia from './component/Jamia';
import DeenDayal from './component/DeenDayal'
function App() {
  return (
    <>
    <Router>
      {/* <Navbar/> */}
      <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/ApplicationForm' element={<ApplicationForm/>}/>
    <Route path='/ExpertCall' element={<ExpertCall/>}/>
    <Route path='/admin/dashboard'element={<AdminDashboard/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/delhiuniversity'element={<DelhiUniversity/>}/>
    <Route path='/harayana'element={<Harayana/>}/>
    <Route path='/kurukshetrauniversity'element={<Kurukshetra/>}/>
    <Route path='/delhiuniversityi'element={<DelhiUni/>}/>
    <Route path='/colleges/jamia-millia-islamia' element={<Jamia/>}/>
    <Route path='colleges/deen-dayal-upadhyaya' element={<DeenDayal/>}/>
    </Routes>
        </Router>
    </>
  )
}

export default App