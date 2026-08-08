import { useState } from "react";

const services = [
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Our Families",
    text: "Meet the families that make up our Jamtali community.",
    button: "View Families",
    action: "families",
  },
  {
    icon: "🩸",
    title: "Blood Donors",
    text: "Find voluntary blood donors when someone needs help.",
    button: "Find Donor",
    action: "blood",
  },
  {
    icon: "🤝",
    title: "JYDA Club",
    text: "Meet our members and explore our community initiatives.",
    button: "Explore Club",
    action: "club",
  },
  {
    icon: "📷",
    title: "Photo Gallery",
    text: "Beautiful places, people and memories from our community.",
    button: "View Gallery",
    action: "gallery",
  },
  {
    icon: "🎭",
    title: "Cultural Program",
    text: "Celebrating our traditions, events and cultural programs.",
    button: "View Programs",
    action: "culture",
  },
  {
    icon: "💚",
    title: "Donation",
    text: "Support JYDA and contribute to our community activities.",
    button: "Support Us",
    action: "donation",
  },
];

function Home({ openPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span>JYDA</span>
            <small>Jamtali Youth Development Association</small>
          </a>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#community" onClick={closeMenu}>Community</a>

            <button
              onClick={() => {
                openPage("gallery");
                closeMenu();
              }}
            >
              Gallery
            </button>

            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <div className="nav-actions">
            <button
              className="donate-btn"
              onClick={() => openPage("donation")}
            >
              Donate
            </button>

            <button
              className={`menu-button ${menuOpen ? "menu-active" : ""}`}
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-fallback"></div>

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1800&q=85"
        >
          <source src="/videos/drone.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-badge">
            JAMTALI • KHAGRACHARI
          </div>

          <h1>
            Together for a
            <span>Better Jamtali.</span>
          </h1>

          <p>
            Jamtali Youth Development Association brings our community
            together through unity, culture, compassion and social development.
          </p>

          <div className="hero-buttons">
            <a href="#community" className="primary-btn">
              Explore JYDA
            </a>

            <a href="#about" className="outline-btn">
              Our Story
            </a>
          </div>
        </div>

        <a href="#about" className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          ↓
        </a>
      </section>

      <section className="about" id="about">
        <p className="section-label">WHO WE ARE</p>

        <h2>
          One Village.
          <br />
          One Community.
        </h2>

        <p className="about-text">
          JYDA is a youth-led community organization from Jamtali,
          Khagrachari. We believe that working together can create a
          stronger, kinder and more connected community.
        </p>

        <div className="about-values">
          <div>
            <strong>Unity</strong>
            <span>Growing together</span>
          </div>

          <div>
            <strong>Service</strong>
            <span>Helping our community</span>
          </div>

          <div>
            <strong>Culture</strong>
            <span>Celebrating our identity</span>
          </div>
        </div>
      </section>

      <section className="community-section" id="community">
        <div className="section-heading">
          <div>
            <p className="section-label">DISCOVER JYDA</p>
            <h2>Our Community</h2>
          </div>

          <p>
            Explore the people, activities and services that make our
            community special.
          </p>
        </div>

        <div className="cards">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <div className="card-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <button onClick={() => openPage(service.action)}>
                {service.button} <span>→</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <div>
          <p>JAMTALI • KHAGRACHARI</p>

          <h2>
            Small community.
            <span>Big heart.</span>
          </h2>
        </div>
      </section>

      <section className="contact" id="contact">
    <p className="section-label">GET IN TOUCH</p>

    <h2>Connect with JYDA.</h2>

    <p className="contact-intro">
      Have a question, community idea or want to get involved?
      Connect with JYDA.
    </p>

    <div className="contact-grid">

      <div className="contact-card">
        <div>📍</div>
        <span>LOCATION</span>
        <strong>Jamtali</strong>
        <p>Khagrachari Hill District, Bangladesh</p>
        <a
          href="https://maps.app.goo.gl/CKHvK82erUu4z6DF6"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link map-link"
        >
          View on Google Maps →
        </a>
      </div>

      <div className="contact-card">
        <div>✉️</div>
        <span>EMAIL</span>
        <strong>Email Us</strong>
        <p>
          <a href="mailto:teamjyda.com" className="contact-link">
            teamjyda.com
          </a>
        </p>
      </div>

      <div className="contact-card">
        <div>🌐</div>
        <span>SOCIAL</span>
        <strong>Facebook</strong>
        <p>
          <a
            href="https://www.facebook.com/profile.php?id=100023091262669"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Visit JYDA Facebook Page
          </a>
        </p>
      </div>

    </div>
  </section>
    </>
  );
}

export default Home;
