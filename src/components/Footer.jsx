import React from 'react';

const Footer = () => {
  return (
    <footer className=" p-10 footer flex justify-between items-center bg-zinc-900">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Kaddu. Kaddu rights reserved.</p>
        <div className="social-links">
        
        </div>
      </div>
    </footer>
  );
}

export default Footer;
