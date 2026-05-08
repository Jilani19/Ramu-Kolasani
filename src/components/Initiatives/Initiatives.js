import "./Initiatives.css";

import heroImage from "../../assets/images/hero.png";

function Initiatives() {
  return (
    <section className="initiatives-page">

      <div className="initiatives-container">

        {/* =========================
            HERO SECTION
        ========================= */}

        <div className="initiatives-hero">

          <div className="initiatives-overlay"></div>

          <div className="initiatives-hero-content">

            {/* LEFT */}

            <div className="initiatives-left">

              <span className="initiatives-tag">
                Public Welfare Programs
              </span>

              <h1>
                Empowering Communities Through
                Development & Innovation
              </h1>

              <p>
                Dedicated initiatives focused on education,
                healthcare, women empowerment, digital growth,
                employment opportunities, sustainable infrastructure,
                smart governance, and citizen-first welfare programs
                designed to improve the quality of life across
                urban and rural communities.
              </p>

              <div className="hero-highlight-grid">

                <div className="hero-highlight-card">

                  <h3>850+</h3>

                  <p>
                    Villages Connected Through
                    Smart Infrastructure Projects
                  </p>

                </div>

                <div className="hero-highlight-card">

                  <h3>1.2M+</h3>

                  <p>
                    Citizens Benefited From
                    Welfare & Development Programs
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="initiatives-right">

              <img
                src={heroImage}
                alt="Leader"
              />

            </div>

          </div>

        </div>

        {/* =========================
            PRIORITY PROGRAMS
        ========================= */}

        <div className="priority-section">

          <div className="priority-card">

            <h3>AI Development Mission</h3>

            <p>
              Technology-driven governance systems,
              AI-powered public services, and smart
              digital infrastructure development.
            </p>

          </div>

          <div className="priority-card">

            <h3>Women Safety Network</h3>

            <p>
              Women protection initiatives,
              emergency support systems,
              and empowerment-focused programs.
            </p>

          </div>

          <div className="priority-card">

            <h3>Youth Startup Program</h3>

            <p>
              Startup incubation, innovation labs,
              digital skill training, and career
              development opportunities for youth.
            </p>

          </div>

          <div className="priority-card">

            <h3>Green Energy Projects</h3>

            <p>
              Renewable energy systems,
              environmental sustainability,
              and eco-friendly infrastructure projects.
            </p>

          </div>

        </div>

        {/* =========================
            FEATURED INITIATIVES
        ========================= */}

        <div className="section-header">

          <span>Featured Initiatives</span>

          <h2>
            Key Welfare Programs
          </h2>

        </div>

        <div className="initiatives-grid">

          <div className="initiative-card">

            <h3>Digital Education Mission</h3>

            <p>
              Establishing AI-enabled smart classrooms,
              digital laboratories, scholarship assistance,
              and advanced technology-driven education systems
              to improve learning opportunities for students
              across rural and urban regions.
            </p>

          </div>

          <div className="initiative-card">

            <h3>Healthcare Accessibility</h3>

            <p>
              Expanding healthcare accessibility through
              mobile medical units, free healthcare camps,
              emergency support services, and affordable
              treatment facilities for underserved communities.
            </p>

          </div>

          <div className="initiative-card">

            <h3>Women Empowerment Programs</h3>

            <p>
              Empowering women through entrepreneurship
              support, skill training programs, financial
              assistance initiatives, and self-employment
              development opportunities.
            </p>

          </div>

          <div className="initiative-card">

            <h3>Youth Employment Drive</h3>

            <p>
              Creating career opportunities through
              employment drives, startup incubation,
              digital skill training, and youth-focused
              entrepreneurship programs.
            </p>

          </div>

          <div className="initiative-card">

            <h3>Smart Village Development</h3>

            <p>
              Modern roads, digital connectivity,
              clean water infrastructure, and
              sustainable village development projects
              improving rural quality of life.
            </p>

          </div>

          <div className="initiative-card">

            <h3>Green Environment Mission</h3>

            <p>
              Renewable energy systems, tree plantation
              initiatives, eco-friendly infrastructure,
              and sustainable environmental protection projects.
            </p>

          </div>

        </div>

        {/* =========================
            IMPACT DASHBOARD
        ========================= */}

        <div className="impact-section">

          <div className="section-header">

            <span>Impact Dashboard</span>

            <h2>
              Transforming Lives Across Communities
            </h2>

          </div>

          <div className="impact-grid">

            <div className="impact-card">

              <h3>1.2M+</h3>

              <p>
                Citizens Benefited
              </p>

            </div>

            <div className="impact-card">

              <h3>850+</h3>

              <p>
                Villages Connected
              </p>

            </div>

            <div className="impact-card">

              <h3>300K+</h3>

              <p>
                Scholarships Distributed
              </p>

            </div>

            <div className="impact-card">

              <h3>500+</h3>

              <p>
                Healthcare Camps
              </p>

            </div>

          </div>

        </div>

        {/* =========================
            DEVELOPMENT PROGRESS
        ========================= */}

        <div className="progress-section">

          <div className="section-header">

            <span>Development Progress</span>

            <h2>
              Ongoing Development Activities
            </h2>

          </div>

          <div className="progress-wrapper">

            <div className="progress-item">

              <div className="progress-title">

                <span>Smart Roads</span>

                <span>92%</span>

              </div>

              <div className="progress-bar">
                <div className="progress-fill fill-92"></div>
              </div>

            </div>

            <div className="progress-item">

              <div className="progress-title">

                <span>Healthcare Access</span>

                <span>87%</span>

              </div>

              <div className="progress-bar">
                <div className="progress-fill fill-87"></div>
              </div>

            </div>

            <div className="progress-item">

              <div className="progress-title">

                <span>School Modernization</span>

                <span>95%</span>

              </div>

              <div className="progress-bar">
                <div className="progress-fill fill-95"></div>
              </div>

            </div>

          </div>

        </div>

        {/* =========================
            FUTURE ROADMAP
        ========================= */}

        <div className="roadmap-section">

          <div className="section-header">

            <span>Future Vision</span>

            <h2>
              Roadmap Towards Smart Communities
            </h2>

          </div>

          <div className="roadmap-grid">

            <div className="roadmap-card">

              <h3>2026</h3>

              <p>
                AI Smart Schools Expansion
              </p>

            </div>

            <div className="roadmap-card">

              <h3>2027</h3>

              <p>
                Digital Village Connectivity
              </p>

            </div>

            <div className="roadmap-card">

              <h3>2028</h3>

              <p>
                Green Energy Infrastructure
              </p>

            </div>

            <div className="roadmap-card">

              <h3>2030</h3>

              <p>
                Fully Smart Public Services
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Initiatives;