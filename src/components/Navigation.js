import React from "react";

const Navigation = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <a
            href="#fundamentals"
            onClick={(e) => handleNavClick(e, "#fundamentals")}
          >
            JavaScript
          </a>
        </li>
        <li>
          <a href="#react" onClick={(e) => handleNavClick(e, "#react")}>
            React.js
          </a>
        </li>
        <li>
          <a href="#nextjs" onClick={(e) => handleNavClick(e, "#nextjs")}>
            Next.js
          </a>
        </li>
        <li>
          <a href="#redux" onClick={(e) => handleNavClick(e, "#redux")}>
            Redux & Saga
          </a>
        </li>
        <li>
          <a
            href="#systemDesign"
            onClick={(e) => handleNavClick(e, "#systemDesign")}
          >
            System Design
          </a>
        </li>
        <li>
          <a href="#coding" onClick={(e) => handleNavClick(e, "#coding")}>
            Coding Tasks
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
