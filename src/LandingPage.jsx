import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Our SaaS Product</h1>
        <p>Your solution for managing tasks efficiently.</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Feature 1: Easy to use</li>
          <li>Feature 2: Fast and reliable</li>
          <li>Feature 3: 24/7 Support</li>
        </ul>
      </section>
      <footer className="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;