import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'sumitpatait2001@gmail.com',
      link: 'mailto:sumitpatait2001@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91-9373396364',
      link: 'tel:+919373396364'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/sumit-patait',
      link: 'https://linkedin.com/in/sumit-patait'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'github.com/sumit-patait',
      link: 'https://github.com/sumit-patait'
    },
    {
      icon: 'fas fa-code',
      title: 'LeetCode',
      value: 'leetcode.com/Sumit-Patait',
      link: 'https://leetcode.com/Sumit-Patait'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Kopargaon, Maharashtra, India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-content">
          <p style={{ fontSize: '1.1rem', marginBottom: '3rem' }}>
            I'm always interested in new opportunities and exciting projects. Let's connect!
          </p>
          
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <h3>{info.title}</h3>
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  {info.value}
                </a>
              </div>
            ))}
          </div>

          <div className="resume-download">
            <h3 style={{ marginBottom: '1rem' }}>Download My Resume</h3>
            <a 
              href="/sumit.patait Resume.pdf" 
              className="resume-button"
              download="sumit.patait Resume.pdf"
            >
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
