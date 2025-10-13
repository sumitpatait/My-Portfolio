import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer Intern',
      company: 'Emerging Technology, Nashik (Hybrid)',
      date: 'May 2023 - July 2023',
      description: 'Designed and developed backend services using Java (Spring Boot) with MySQL integration. Implemented RESTful APIs with secure authentication and authorization using JWT. Contributed to building frontend modules in React.js, ensuring seamless API integration. Optimized SQL queries and improved API response times by applying indexing and query tuning. Collaborated with senior developers in Agile sprints, debugging sessions, and code reviews. Gained hands-on experience in deploying applications, managing Git repositories, and documenting features.'
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="section-content">
          <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '2rem' }}>
            My professional journey in software development
          </p>
          <div className="experience-timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-content">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-description">{exp.description}</p>
                  <div className="experience-date">{exp.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
