import React from 'react';
import './App.css';
import img1 from '../src/about.jpg';
import off1 from '../src/Special Offer1.png'
// import off2 from '../src/Special Offer (1).png';
import off3 from '../src/Special Offer (2).png';


function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header">
        <div className="brand">
          {/* <span id="br">Vertex Web Designs</span> */}
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h2><i>Elevate Your Business Online</i></h2>
          <p><i><b>Building attractive, responsive, and modern websites for a lasting online presence.</b></i></p>
          {/* <button className="cta-button">View Our Work</button> */}
        </div>
      </section>
      <section className="offers-section">
  <div className="slider">
    <div className="slider-wrapper">
      <img src={off1} alt="Offer 1" />
      <img src={off3} alt="Offer 3" />
      <img src={off1} alt="Offer 1" />
      <img src={off3} alt="Offer 3" />
    
    </div>
  </div>
</section>

      {/* About Section */}
    {/* About Section */}
<section className="about-section" id="about">
  <h3>About Us</h3>
  <div className="about-container">
    <div className="about-text">
      <p>
        At <span className="brand-highlight">Vertex Web Designs</span>, we bring creativity and expertise to the digital world.
        Our mission is to help businesses establish a powerful online presence with beautifully designed and responsive websites.
      </p>
      <p>
        From <strong>eye-catching visuals</strong> to <strong>customized solutions</strong>, we deliver excellence tailored to your unique needs. 
        Let us turn your vision into reality and elevate your brand to the next level.
      </p>
      <ul className="about-list">
        <li>📌 Stunning, responsive designs</li>
        <li>📌 Tailored web development solutions</li>
        <li>📌 Dedicated customer support</li>
        <li>📌 SEO-optimized strategies</li>
      </ul>
    </div>
    <div className="about-image">
      <img src= {img1} alt="About Us" />
    </div>
  </div>
</section>

{/* Services Section */}
<section className="services" id="services">
  <h3 className="section-title">Our Services</h3>
  <p className="section-subtitle">
    Affordable solutions tailored to meet your needs, ensuring quality and maximum features within your budget.
  </p>
  <div className="service-cards">
    <div className="card">
      <h4>Portfolio Websites</h4>
      <p>
        Showcase your work with stunning, responsive portfolio websites. Perfect for artists, freelancers, and professionals.
      </p>
      <ul>
        <li>Custom design that reflects your style</li>
        <li>SEO-optimized for better visibility</li>
        <li>Fast loading and mobile-friendly</li>
      </ul>
    </div>
    <div className="card">
      <h4>E-commerce Websites</h4>
      <p>
        Launch your online store with maximum features at affordable rates. Ideal for small and medium businesses.
      </p>
      <ul>
        <li>Customizable product listings</li>
        <li>Secure checkout options</li>
        <li>Budget-friendly pricing plans</li>
      </ul>
    </div>
    <div className="card">
      <h4>Comprehensive Solutions</h4>
      <p>
        From concept to launch, we provide end-to-end web solutions tailored to meet your unique business goals.
      </p>
      <ul>
        <li>Consultation and strategy</li>
        <li>Content creation and SEO</li>
        <li>Ongoing support and updates</li>
      </ul>
    </div>
  </div>
</section>
<div className="sticky-icons">
  <a href="tel:+918921451177" className="icon call-icon" title="Call Us">
    <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="Call"/>
  </a>
  <a href="https://wa.me/+918921451177" target="_blank" rel="noreferrer" className="icon whatsapp-icon" title="WhatsApp">
    <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" alt="WhatsApp" />
  </a>
</div>


     {/* Contact Section */}
<section className="contact-section" id="contact">
  <h3>Contact Us</h3>
  <div className="contact-content">
    <p><b><i>Have a project in mind ? <br></br> We’d love to collaborate and bring your vision to life!</i></b></p><br></br>
    <p>Email: <a href="mailto:vertexwebsites00@gmail.com">vertexwebsites00@gmail.com</a></p>
    <p>Phone: <a href="tel:+918921451177">+91 8921451177</a></p>
  </div>
  <div className="contact-cta">
    {/* <button className="cta-button">Get in Touch</button> */}
  </div>
  <div className="contact-extras">
    {/* <div className="social-links">
     
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> | 
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
    </div> */}
    {/* <div className="contact-form">
      <h4>Quick Message</h4>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div> */}
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
  <div className="footer-social">
    <div className="social-links">
    <p>Follow us on:</p>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img className="icon" src="https://img.icons8.com/color/50/000000/instagram-new.png" alt="Instagram" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <img className="icon" src="https://img.icons8.com/color/50/000000/facebook.png" alt="Facebook" />
      </a>
    </div>
  </div>
  <p>&copy; 2024 Vertex Web Designs. All Rights Reserved.</p>
</footer>

    </div>
  );
}

export default Portfolio;
