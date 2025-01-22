import React from "react";
import "./footer.css"; // You can create a custom CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Sri Ram Harshit. All rights
          reserved.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/Sriram-Harshit"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/sriram-harshit"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:your-email@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
