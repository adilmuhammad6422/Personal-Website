import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="App">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>You can reach me via my LinkedIn profile.</p>
        <div className="button-container">
          <a href="https://www.linkedin.com/in/adilmuhammad0272" className="button" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
