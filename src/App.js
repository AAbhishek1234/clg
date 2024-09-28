import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home'
import ApplicationForm from './component/ApplicatonForm';
function App() {
  return (
    <>
    <Router>
      <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/ApplicationForm' element={<ApplicationForm/>}/>
    </Routes>
        </Router>
    </>
  )
}

export default App