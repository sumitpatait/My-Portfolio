import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Sumit Patait. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
          Built with React and lots of ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
