import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <div className="centered-text-container">
        <div className="centered-text">Adil Muhammad</div>
        <div className="sub-text">Software Engineer</div>
        <div className="button-container">
          <a href="path/to/your/resume.pdf" className="button" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="https://www.linkedin.com/in/adilmuhammad0272" className="button" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/adilmuhammad6422" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
          <Link to="/about" className="button">About</Link>
          <Link to="/contact" className="button">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
