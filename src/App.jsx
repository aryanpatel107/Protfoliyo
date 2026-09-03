import "./App.css";

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <h2>Aryan.dev</h2>

        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <main>

        <section className="hero">
          <p>Hello 👋</p>

          <h1>
            I'm Aryan Patel
          </h1>

          <h2>Full Stack Developer</h2>

          <p>
            This is my first deployment practice project.
            I'm learning how to deploy a React application
            from GitHub to the internet.
          </p>

          <a
            className="button"
            href="#projects"
          >
            View Projects
          </a>
        </section>


        <section id="about" className="section">
          <h2>About Me</h2>

          <p>
            I am learning React, JavaScript, ASP.NET Core,
            SQL Server and modern web development.
          </p>
        </section>


        <section id="skills" className="section">

          <h2>Skills</h2>

          <div className="cards">

            <div className="card">
              <h3>React</h3>
              <p>Frontend development</p>
            </div>

            <div className="card">
              <h3>JavaScript</h3>
              <p>Web development</p>
            </div>

            <div className="card">
              <h3>ASP.NET Core</h3>
              <p>Backend development</p>
            </div>

            <div className="card">
              <h3>SQL Server</h3>
              <p>Database management</p>
            </div>

          </div>

        </section>


        <section id="projects" className="section">

          <h2>Projects</h2>

          <div className="cards">

            <div className="card">
              <h3>Mess Management</h3>
              <p>
                Management system for mess operations.
              </p>
            </div>

            <div className="card">
              <h3>JWT Authentication API</h3>
              <p>
                Secure authentication API.
              </p>
            </div>

            <div className="card">
              <h3>Deployment Demo</h3>
              <p>
                My first GitHub to Vercel deployment.
              </p>
            </div>

          </div>

        </section>

      </main>


      <footer>
        <p>
          © 2026 Aryan Patel
        </p>

        <p>
          Deployed with Vercel
        </p>
      </footer>

    </div>
  );
}

export default App;