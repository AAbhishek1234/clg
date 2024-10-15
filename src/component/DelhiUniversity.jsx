import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './DelhiUniversity.css'; // Import your CSS file
import Navbar from '../component/Navbar'
function DelhiUniversity() {
  const navigate = useNavigate(); // Initialize useNavigate

  const universities = [
    { name: "Delhi University", img: '/Images/du.webp', url: '/delhiuniversityi' },
    { name: "Jamia Millia Islamia", img: '/Images/jamia.jpg', url: '/colleges/jamia-millia-islamia' },
    { name: "Deen Dayal Upadhyaya College", img: '/Images/deendayal.jpg', url: '/colleges/deen-dayal-upadhyaya' },
    { name: "IIT Delhi", img: '/Images/iitdelhi.jpg', url: '/colleges/iit-delhi]' },
    { name: "Lady Shri Ram College for Women", img: '/Images/ladysrm.jpg', url: '/colleges/lady-shri-ram-college' },
    { name: "Shri Ram College of Commerce", img: '/Images/srcc.jpg', url: '/colleges/shri-ram-college-of-commerce' },
    { name: "Guru Gobind Singh Indraprastha University", img: '/Images/ggsi1.jpeg', url: '/colleges/guru-gobind-singh-indraprastha-university' },
    { name: "National Law University", img: '/Images/nlu1.jpg', url: '/colleges/national-law-university' },
    { name: "Jawaharlal Nehru University", img: '/Images/jnu.jpg', url: '/colleges/jawahar-lal-nehru-university' },
    { name: "Indira Gandhi National Open University", img: '/Images/ignou.jpg', url: '/colleges/indira-gandhi-national-open-university' },
  ];

  const handleCardClick = (url) => {
    navigate(url); // Navigate to the specified URL
  };

  return (
    <>
    <Navbar/>
    <div className="du-container">
      <h3 className="du-heading" style={{fontWeight:"bold"}}>Universities and Colleges in Delhi</h3>
      <div className="du-card-container">
        {universities.map((uni, index) => (
          <div key={index} className="du-card" onClick={() => handleCardClick(uni.url)}> {/* Add onClick handler */}
            <img src={uni.img} alt={uni.name} className="du-card-image" />
            <h4 className="du-card-title">{uni.name}</h4>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default DelhiUniversity;
