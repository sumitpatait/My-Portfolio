import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div>
            <img 
              src="/profile-photo.jpg" 
              alt="Sumit Patait - About" 
              className="about-image"
            />
          </div>
          <div className="about-text">
            <p>
              I'm a passionate software developer specializing in Full Stack Development with expertise 
              in Java, Spring Boot, React.js, and modern web technologies. I have hands-on experience 
              in building robust backend services and intuitive frontend applications.
            </p>
            <p>
              My journey in technology started with a strong foundation in Computer Engineering, 
              and I've continued to expand my skills through practical projects and internships. 
              I love creating efficient solutions that solve real-world problems and improve user experiences.
            </p>
            <p>
              I'm currently pursuing advanced computing skills and have solved 50+ coding problems 
              across various platforms. I believe in continuous learning and staying updated with 
              the latest technologies and best practices in software development.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#1f2937' }}>Education</h3>
              <p><strong>Post Graduate Diploma in Advanced Computing</strong></p>
              <p>Institute for Advanced Computing and Software Development (CDAC), Pune</p>
              <p><em>February 2025 - August 2025</em></p>
              <br />
              <p><strong>Bachelor of Engineering in Computer Engineering</strong></p>
              <p>Sir Visvesvaraya Institute of Technology (SVIT), Nashik</p>
              <p><em>July 2020 - June 2024</em></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
