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
        <div className="hero-content">
          <h1>Welcome to ExistentAIl!</h1>
        <p className="slogan">Mapping the molecular path back to health.</p>
        <p className="description">
        At ExistenTAIL, we’re decoding the molecular routes from illness to recovery. Our technology, <b>Recovr</b>, models how cells regain healthy function, uncovering the key drivers of biological restoration.
      </p>
        </div>
        
      </section>

      <section id="about" className="section about">
        <div className="about-content">
        <h2>About Us</h2>
      <p>
      Team ExistenTAIL was founded by researchers who met in an AI for Biology course at Georgia Tech. What began as a collaborative project predicting molecular binding within disordered protein regions evolved into a shared vision to bridge biology and AI.
    </p>
      <p>
      Our founders bring diverse expertise:
      </p>
      <p>
<b>Aarushi G.</b> leads biological modeling and data interpretation. <br />
<b>Aarushi B.</b> engineers scalable systems that bring our ideas to life. <br />
<b>Anna</b> contributes deep expertise in genetics and bioinformatics. <br />
<b>Kason</b> designs the mathematical and machine learning foundations that guide our models.
</p>
      <p>
Together, they form an interdisciplinary team committed to uncovering the molecular pathways back to health.
      </p>
        </div>
      
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
