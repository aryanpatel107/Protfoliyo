import React, { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5089/api/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [text, setText] = useState("");

  // Contact form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const fullText = "Full Stack Developer";

  // Typing animation
  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Scroll to section
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Submit contact form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setFormMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Unable to submit your message."
        );
      }

      setFormMessage(
        data.message || "Your message has been submitted successfully."
      );

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setFormMessage(
        "Unable to connect to backend. Please make sure the backend is running."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="container nav-container">

          <div className="logo">
            Aryan<span>.dev</span>
          </div>

          <nav className="nav-links">
            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("skills")}>
              Skills
            </button>

            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </nav>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <main>

        <section className="hero">
          <div className="container hero-container">

            <div className="hero-content">

              <div className="availability">
                <span className="status-dot"></span>
                Available for opportunities
              </div>

              <p className="hero-small-title">
                HELLO, I'M
              </p>

              <h1>
                Aryan <span>Patel</span>
              </h1>

              <h2 className="typing">
                {text}
                <span className="cursor">|</span>
              </h2>

              <p className="hero-description">
                I build secure, scalable and high-performance web
                applications using modern technologies. I enjoy turning
                complex problems into clean and intuitive digital
                experiences.
              </p>

              <div className="hero-buttons">

                <button
                  className="primary-btn"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                  <span>→</span>
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </button>

              </div>

              <div className="social-buttons">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>

              </div>

            </div>

            {/* Developer Card */}
            <div className="hero-visual">

              <div className="code-card">

                <div className="code-header">
                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <p>developer.js</p>
                </div>

                <div className="code-body">

                  <p>
                    <span className="purple">const</span>{" "}
                    <span className="blue">developer</span> = {"{"}
                  </p>

                  <p className="indent">
                    <span className="green">name</span>:{" "}
                    <span className="orange">"Aryan Patel"</span>,
                  </p>

                  <p className="indent">
                    <span className="green">role</span>:{" "}
                    <span className="orange">
                      "Full Stack Developer"
                    </span>,
                  </p>

                  <p className="indent">
                    <span className="green">skills</span>: [
                  </p>

                  <p className="double-indent">
                    <span className="orange">"React"</span>,
                  </p>

                  <p className="double-indent">
                    <span className="orange">".NET Core"</span>,
                  </p>

                  <p className="double-indent">
                    <span className="orange">"SQL Server"</span>
                  </p>

                  <p className="indent">],</p>

                  <p className="indent">
                    <span className="green">passion</span>:{" "}
                    <span className="orange">
                      "Clean Code"
                    </span>
                  </p>

                  <p>{"};"}</p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section">

          <div className="container">

            <div className="section-heading">
              <span>01.</span>
              <h2>About Me</h2>
              <div className="heading-line"></div>
            </div>

            <div className="about-grid">

              <div className="about-text">

                <h3>
                  Building digital experiences
                  <span> with purpose.</span>
                </h3>

                <p>
                  I'm a passionate Full Stack Developer focused on
                  building reliable and scalable web applications.
                  I enjoy working across both frontend and backend
                  technologies.
                </p>

                <p>
                  My approach combines clean architecture,
                  responsive UI design, strong security practices
                  and optimized database solutions to create
                  applications that are both beautiful and
                  maintainable.
                </p>

                <div className="about-stats">

                  <div>
                    <strong>3+</strong>
                    <span>Projects</span>
                  </div>

                  <div>
                    <strong>5+</strong>
                    <span>Technologies</span>
                  </div>

                  <div>
                    <strong>100%</strong>
                    <span>Passion</span>
                  </div>

                </div>

              </div>

              <div className="about-card">

                <div className="about-card-icon">
                  {"</>"}
                </div>

                <h3>My Development Philosophy</h3>

                <p>
                  "Write code that is simple to understand,
                  easy to maintain and built to scale."
                </p>

                <div className="philosophy-list">

                  <div>
                    <span>✓</span>
                    Clean & Maintainable Code
                  </div>

                  <div>
                    <span>✓</span>
                    Secure Architecture
                  </div>

                  <div>
                    <span>✓</span>
                    Performance Focused
                  </div>

                  <div>
                    <span>✓</span>
                    Responsive Design
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section skills-section">

          <div className="container">

            <div className="section-heading">
              <span>02.</span>
              <h2>Skills & Technologies</h2>
              <div className="heading-line"></div>
            </div>

            <p className="section-description">
              Technologies and tools I use to build modern
              full-stack applications.
            </p>

            <div className="skills-grid">

              <div className="skill-card">
                <div className="skill-icon react-icon">⚛</div>

                <div className="skill-info">
                  <h3>React</h3>
                  <p>Frontend Development</p>

                  <div className="progress">
                    <span style={{ width: "90%" }}></span>
                  </div>

                  <div className="skill-percent">90%</div>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon dotnet-icon">C#</div>

                <div className="skill-info">
                  <h3>ASP.NET Core</h3>
                  <p>Backend Development</p>

                  <div className="progress">
                    <span style={{ width: "85%" }}></span>
                  </div>

                  <div className="skill-percent">85%</div>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon sql-icon">DB</div>

                <div className="skill-info">
                  <h3>SQL Server</h3>
                  <p>Database Management</p>

                  <div className="progress">
                    <span style={{ width: "88%" }}></span>
                  </div>

                  <div className="skill-percent">88%</div>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon api-icon">API</div>

                <div className="skill-info">
                  <h3>REST API</h3>
                  <p>API Development</p>

                  <div className="progress">
                    <span style={{ width: "82%" }}></span>
                  </div>

                  <div className="skill-percent">82%</div>
                </div>
              </div>

            </div>

            <div className="technology-list">

              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Entity Framework</span>
              <span>JWT</span>
              <span>Git</span>

            </div>

          </div>

        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section">

          <div className="container">

            <div className="section-heading">
              <span>03.</span>
              <h2>Featured Projects</h2>
              <div className="heading-line"></div>
            </div>

            <p className="section-description">
              A selection of projects I've built using modern
              development technologies.
            </p>

            <div className="project-grid">

              <article className="project-card">

                <div className="project-top">
                  <div className="folder-icon">📁</div>

                  <div className="project-links">
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  </div>
                </div>

                <h3>Mess Management System</h3>

                <p>
                  A complete SQL-based mess billing and management
                  system designed to simplify member management,
                  billing and reporting.
                </p>

                <div className="project-tech">
                  <span>ASP.NET</span>
                  <span>SQL Server</span>
                  <span>React</span>
                </div>

              </article>

              <article className="project-card">

                <div className="project-top">
                  <div className="folder-icon">📁</div>

                  <div className="project-links">
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  </div>
                </div>

                <h3>JWT Authentication API</h3>

                <p>
                  Secure REST API implementing JWT authentication,
                  authorization and role-based access control.
                </p>

                <div className="project-tech">
                  <span>.NET Core</span>
                  <span>JWT</span>
                  <span>SQL Server</span>
                </div>

              </article>

              <article className="project-card">

                <div className="project-top">
                  <div className="folder-icon">📁</div>

                  <div className="project-links">
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  </div>
                </div>

                <h3>EF Core CRUD Application</h3>

                <p>
                  Full CRUD application using Entity Framework Core
                  with validation, database relationships and
                  SQL Server integration.
                </p>

                <div className="project-tech">
                  <span>ASP.NET MVC</span>
                  <span>EF Core</span>
                  <span>SQL Server</span>
                </div>

              </article>

            </div>

          </div>

        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="section contact-section">

          <div className="container">

            <div className="contact-wrapper">

              <div className="contact-content">

                <div className="section-heading">
                  <span>04.</span>
                  <h2>Let's Work Together</h2>
                </div>

                <p>
                  Have a project in mind or want to discuss an
                  opportunity? I'd love to hear from you.
                </p>

                <div className="contact-details">

                  <div>
                    <span>✉</span>

                    <div>
                      <small>Email</small>

                      <strong>
                        aryanpatel769892@gmail.com
                      </strong>
                    </div>
                  </div>

                  <div>
                    <span>⌘</span>

                    <div>
                      <small>GitHub</small>

                      <strong>
                        github.com/aryanpatel107
                      </strong>
                    </div>
                  </div>

                </div>

              </div>

              {/* CONTACT FORM */}
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="input-row">

                  <div className="input-group">

                    <label>Your Name</label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Aryan Patel"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="input-group">

                    <label>Email Address</label>

                    <input
                      type="email"
                      name="email"
                      placeholder="aryanpatel769892@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>

                <div className="input-group">

                  <label>Message</label>

                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Message"}
                  <span>→</span>
                </button>

                {formMessage && (
                  <p className="form-message">
                    {formMessage}
                  </p>
                )}

              </form>

            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="container footer-container">

          <div>

            <div className="logo">
              Aryan<span>.dev</span>
            </div>

            <p>
              Building digital experiences with code.
            </p>

          </div>

          <div className="footer-links">

            <a
              href="https://github.com/aryanpatel107"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aryan-patel-79732b378"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="copyright">
          © 2026 Aryan Patel. Built with React.
        </div>

      </footer>

    </div>
  );
}

export default App;