import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🚀 Interview Questions</h3>
          <p>
            Complete guide with examples & best practices for frontend
            developers
          </p>
        </div>

        <div className="footer-section">
          <h4>Topics Covered</h4>
          <ul>
            <li>JavaScript Fundamentals</li>
            <li>React.js & Hooks</li>
            <li>Next.js & SSR</li>
            <li>Redux & State Management</li>
            <li>System Design</li>
            <li>Coding Challenges</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Interview Preparation</li>
            <li>Code Examples</li>
            <li>Best Practices</li>
            <li>Performance Tips</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-info">
          {/* <p>&copy; 2025 Interview Questions. All rights reserved.</p> */}
          <p>
            Created with ❤️ by <span className="author-name">nvramani</span>
          </p>
        </div>
        {/* 
        <div className="footer-social">
          <a
            href="https://github.com/nvramani"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span>🐙 GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/nvramani"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span>💼 LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/nvramani"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span>🐦 Twitter</span>
          </a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;
