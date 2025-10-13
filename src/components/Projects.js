import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Food Delivery Platform Backend',
      description: 'Developed a robust backend with role-based access for Admin and Customer. Created RESTful APIs for restaurant, food item CRUD, address, and order management. Used Spring Security with JWT for authentication and authorization.',
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'JPA', 'Swagger'],
      image: 'fas fa-utensils',
      github: 'https://github.com/sumitpatait/Food-Delivery-Backend',
      demo: '#'
    },
    {
      id: 2,
      title: 'Therapist Appointment Booking App',
      description: 'Built a full-stack platform enabling patients to book and manage therapy sessions with 99% success rate in testing. Developed 15+ secure RESTful APIs with JWT authentication and role-based access control.',
      technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'Razorpay', 'Postman'],
      image: 'fas fa-calendar-check',
      github: 'https://github.com/sumitpatait/Therapist-Appointment-App',
      demo: '#'
    },
    {
      id: 3,
      title: 'Student Management System',
      description: 'A comprehensive CRUD system for managing student records, grades, and academic information. Built with full-stack architecture featuring frontend and backend components with modern web technologies.',
      technologies: ['JavaScript', 'CSS', 'HTML', 'Node.js', 'Express.js', 'Database'],
      image: 'fas fa-user-graduate',
      github: 'https://github.com/sumitpatait/Students-CRUD-',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-content">
          <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '2rem' }}>
            Here are some of my recent projects that showcase my skills and experience
          </p>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <i className={project.image}></i>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Technologies:</strong> {project.technologies.join(', ')}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
