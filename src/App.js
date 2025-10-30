import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/logo.png" alt="Company Logo" />
          </div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="section home">
        <h1>Welcome to Our Company</h1>
        <p>We provide innovative solutions that make a difference.</p>
      </section>

      <section id="about" className="section about">
        <h2>About Us</h2>
        <p>
          We are a passionate team dedicated to delivering exceptional products
          and services. Our mission is to make technology simple and impactful
          for everyone.
        </p>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <p>Have questions or want to work with us? Reach out below.</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>© 2025 My Company. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
