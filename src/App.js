import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import Loder from './component/Loder';
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
import IitDelhi from './component/IitDelhi';
import LadyShri from './component/LadyShri';
import ShriRam from './component/ShriRam'
import GuruGovind from './component/GuruGovind';
import NationalLaw from './component/NationalLaw';
import JawaharLal from './component/JawaharLal'
import IndraGandhi from './component/IndraGandhi';
import MDU from './component/MDU';
import Echelon from './component/Echelon';
import GuruJamesh from './component/GuruJamesh';
import DeenBandhu from './component/DeenBandhu';
import Ymca from './component/Ymca';
import BhagatPhool from './component/BhagatPhool';
import ChaudharyDevi from './component/ChaudharyDevi';
import ManavRachna from './component/ManavRachna';
import Lingays from './component/Lingays';
import Rajsthan from './component/Rajsthan';
import RajsthanUniversity from './component/RajsthanUniversity';
function App() {
  return (
    <>
    {/* <Loder/> */}
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
    <Route path='/colleges/iit-delhi' element={<IitDelhi/>}/>
    <Route path='/colleges/lady-shri-ram-college' element={<LadyShri/>}/>
    <Route path='/colleges/shri-ram-college-of-commerce' element={<ShriRam/>}/>
    <Route path='/colleges/guru-gobind-singh-indraprastha-university' element={<GuruGovind/>}/>
    <Route path='/colleges/national-law-university' element={<NationalLaw/>}/>
    <Route path='/colleges/jawahar-lal-nehru-university'element={<JawaharLal/>}/>
    <Route path='/colleges/indira-gandhi-national-open-university' element={<IndraGandhi/>}/>
    <Route path='/mdu' element={<MDU/>}/>
    <Route path='/echelon' element={<Echelon/>}/>
    <Route path='/gurujameshar'element={<GuruJamesh/>}/>
    <Route path='/deenbandhu'element={<DeenBandhu/>}/>
    <Route path='/ymca'element={<Ymca/>}/>
    <Route path='/bhagatphool' element={<BhagatPhool/>}/>
    <Route path='/chaudharydevi' element={<ChaudharyDevi/>}/>
    <Route path='/manavrachna' element={<ManavRachna/>}/>
    <Route path='/lingyas' element={<Lingays/>}/>
    <Route path='/colleges/Rajasthan' element={<Rajsthan/>}/>
    <Route path='/rajsthanuniversity' element={<RajsthanUniversity/>}/>
    </Routes>
        </Router>
    </>
  )
}

export default App