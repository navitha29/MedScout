import React from 'react';
import './Apple.css';

function Apple() {
  return (
    <div className="apple-body">
      <header className="apple-header">
        <nav className="apple-navbar">
          <ul className="apple-nav-links">
            <li><a href="#mac">Mac</a></li>
            <li><a href="#ipad">iPad</a></li>
            <li><a href="#iphone">iPhone</a></li>
            <li><a href="#watch">Watch</a></li>
            <li><a href="#tv">TV</a></li>
            <li><a href="#music">Music</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </nav>
      </header>
      <main className="apple-main">
        <section className="apple-section apple-section-hero">
          <img src="path/to/your/image.jpg" alt="Hero" className="apple-hero-image" />
        </section>
        <section className="apple-section apple-section-secondary">
          <img src="path/to/your/second-image.jpg" alt="Secondary" className="apple-secondary-image" />
        </section>
        <section className="apple-section apple-section-tertiary">
          <img src="path/to/your/third-image.jpg" alt="Tertiary" className="apple-tertiary-image" />
        </section>
        {/* Add more sections as needed */}
      </main>
      <footer className="apple-footer">
        <div className="apple-footer-content">
          <p>© 2024 Apple Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Apple;
