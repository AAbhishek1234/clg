import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Harayana.css'; // Import your CSS file
import Navbar from '../component/Navbar'
function Harayana() {
  const navigate = useNavigate(); // Initialize useNavigate

  const universities = [
    { name: "Kurukshetra University", img: '/Images/kurukshetra.jpg', url: '/kurukshetrauniversity' },
    { name: "Maharshi Dayanand University", img: '/Images/MDU.png', url: '/mdu' },
    { name: "Echelon Institute of Technology", img: '/Images/echelon.webp', url: '/echelon' },
    { name: "Guru Jambheshwar University of Science and Technology", img: '/Images/guru jamesh.jpg', url: '/gurujameshar' },
    { name: "Deenbandhu Chhotu Ram University of Science and Technology", img: '/Images/deenbandhu.jpeg', url: '/deenbandhu' },
    { name: "YMCA University of Science and Technology", img: '/Images/ymca.jpeg', url: '/ymca' },
    { name: "Bhagat Phool Singh Mahila Vishwavidyalaya (BPSMV)", img: '/Images/bhagat phool.jpg', url: '/bhagatphool' },
    { name: "Chaudhary Devi Lal University", img: '/Images/ch devi.jpg', url: '/chaudharydevi' },
    { name: "Manav Rachna International Institute of Research and Studies", img: '/Images/manav rachna.webp', url: '/manavrachna' },
    { name: "Lingaya’s Vidyapeeth", img: '/Images/lingayas.jpg', url: '/lingyas' },
  ];

  const handleCardClick = (url) => {
    navigate(url); // Navigate to the specified URL
  };

  return (
    <>
    <Navbar/>
    <div className="hr-container">
      <h3 className="hr-heading" style={{fontWeight:"bold"}}>Universities and Colleges in Haryana</h3>
      <div className="hr-card-container">
        {universities.map((uni, index) => (
          <div key={index} className="hr-card" onClick={() => handleCardClick(uni.url)}> {/* Add onClick handler */}
            <img src={uni.img} alt={uni.name} className="hr-card-image" />
            <h4 className="hr-card-title">{uni.name}</h4>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Harayana;


