import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <img 
            src="/profile-photo.jpg" 
            alt="Sumit Patait - Full Stack Developer" 
            className="profile-image"
          />
          <h1>SUMIT PATAIT</h1>
          <p className="subtitle">Full Stack Developer & Software Engineer</p>
          <p className="subtitle">Building robust applications with Java, Spring Boot, React.js and modern technologies</p>
          <a 
            href="#contact" 
            className="cta-button"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
