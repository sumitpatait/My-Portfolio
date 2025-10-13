import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      icon: 'fas fa-code',
      title: 'Programming Languages',
      skills: ['Java', 'C++', 'C#', 'JavaScript']
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Technologies',
      skills: ['Spring Boot', 'J2EE', 'Hibernate', 'Node.js', 'Express.js', '.NET', 'REST APIs', 'JWT']
    },
    {
      icon: 'fas fa-globe',
      title: 'Frontend Technologies',
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
    },
    {
      icon: 'fas fa-database',
      title: 'Database & Tools',
      skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Linux', 'Docker', 'Bash', 'VS Code']
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Coursework',
      skills: ['Data Structures', 'Algorithms', 'Operating Systems', 'DBMS', 'OOP', 'Computer Networks']
    },
    {
      icon: 'fas fa-users',
      title: 'Soft Skills',
      skills: ['Communication', 'Problem Solving', 'Teamwork', 'Critical Thinking', 'Agile Methodologies']
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-content">
          <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '2rem' }}>
            I work with a wide range of technologies and tools to deliver high-quality solutions
          </p>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <i className={category.icon}></i>
                </div>
                <h3 className="skill-title">{category.title}</h3>
                <ul className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
