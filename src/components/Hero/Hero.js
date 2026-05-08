import "./Hero.css";

import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero-wrapper" id="home">

      <div className="hero-box">

        {/* =========================
            HERO TOP SECTION
        ========================= */}

        <div className="hero-top">

          {/* LEFT CONTENT */}

          <div className="hero-left">

            <div className="hero-text-bg">
                <div className="leader-tag">

  <strong>
    RAMU KOLASANI
  </strong>

  <span>
    VISIONARY YOUTH LEADER
  </span>

</div>

              <h1>
                Service to People
              </h1>

              <h2>
                is My <span>Duty</span>
              </h2>

            </div>

            <div className="hero-buttons">

              <button className="join-btn">
                Join the Movement
              </button>

              <button className="touch-btn">
                Get in Touch
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="hero-right">
            <img
              src={heroImage}
              alt="Political Leader"
            />
          </div>

        </div>

        {/* =========================
            HERO BOTTOM SECTION
        ========================= */}

        <div className="hero-bottom">

          {/* LEFT COLUMN */}

          <div className="bottom-card">

            <h3>Latest Updates</h3>

            <div className="update-item">
              <h4>AI-Based Rural Education Program Launched</h4>
              <p>June 18, 2026</p>
            </div>

            <div className="update-item">
              <h4>Smart Healthcare Vans Introduced</h4>
              <p>June 10, 2026</p>
            </div>

            <a href="/">
              Read More →
            </a>

          </div>

          {/* CENTER COLUMN */}

          <div className="bottom-card">

            <h3>Our Achievements</h3>

            <div className="achievement-grid">

              <div className="achievement-box">
                <h2>850+</h2>
                <p>Villages Connected</p>
              </div>

              <div className="achievement-box">
                <h2>1.2M+</h2>
                <p>Citizens Benefited</p>
              </div>

              <div className="achievement-box">
                <h2>300K+</h2>
                <p>Scholarships Distributed</p>
              </div>

              <div className="achievement-box">
                <h2>500+</h2>
                <p>Healthcare Camps</p>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <div className="bottom-card">

            <h3>Public Welfare</h3>

            <div className="welfare-grid">

              <div className="welfare-box">

                <img
                  src="https:https://india.un.org/sites/default/files/styles/featured_image/public/2022-02/UN0122069%20-%20Copy.jpeg?itok=cKNQOHvK"
                  alt="Education"
                />

                <p>Digital Education Mission</p>

              </div>

              <div className="welfare-box">

                <img
                  src="https://riddhisiddhicharitabletrust.org/static/images/Womens-Empowerment/Womens-Empowerment.webp"
                  alt="Women Empowerment"
                />

                <p>Women Empowerment Drive</p>

              </div>

              <div className="welfare-box">

                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
                  alt="Healthcare"
                />

                <p>Healthcare Accessibility</p>

              </div>

              <div className="welfare-box">

                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309"
                  alt="Medical Camps"
                />

                <p>Medical Mega Camps</p>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            VISION SECTION
        ========================= */}

        <div className="vision-section">

          <div className="vision-left">

            <span className="section-tag">
              Leadership Vision
            </span>

            <h2>
              Building a Stronger &
              Smarter Future For Every Citizen
            </h2>

            <p>
              Focused on transparent governance,
              digital development, quality education,
              healthcare accessibility, women empowerment,
              and sustainable infrastructure growth for
              future generations.
            </p>

            <div className="vision-points">

              <div className="vision-item">
                ✓ Transparent Governance
              </div>

              <div className="vision-item">
                ✓ Youth Employment Programs
              </div>

              <div className="vision-item">
                ✓ Smart Village Development
              </div>

              <div className="vision-item">
                ✓ Healthcare Accessibility
              </div>

            </div>

          </div>

          <div className="vision-right">

            <div className="vision-card">
              <h3>24/7</h3>
              <p>Citizen Support System</p>
            </div>

            <div className="vision-card">
              <h3>850+</h3>
              <p>Development Projects</p>
            </div>

            <div className="vision-card">
              <h3>1.2M+</h3>
              <p>People Impacted</p>
            </div>

            <div className="vision-card">
              <h3>300K+</h3>
              <p>Students Supported</p>
            </div>

          </div>

        </div>

        {/* =========================
            DEVELOPMENT PROJECTS
        ========================= */}

        <div className="projects-section">

          <div className="projects-header">

            <span className="section-tag">
              Development Projects
            </span>

            <h2>
              Transforming Communities Through Action
            </h2>

          </div>

          <div className="projects-grid">

            <div className="project-card">
              <h3>Smart Roads Initiative</h3>

              <p>
                Modern infrastructure projects improving
                transportation and connectivity across
                urban and rural communities.
              </p>
            </div>

            <div className="project-card">
              <h3>Digital Education Mission</h3>

              <p>
                Smart classrooms, digital labs,
                scholarships, and modern learning
                opportunities for students.
              </p>
            </div>

            <div className="project-card">
              <h3>Healthcare Expansion</h3>

              <p>
                Mobile healthcare services, free
                medical camps, and accessible treatment
                facilities for every citizen.
              </p>
            </div>

            <div className="project-card">
              <h3>Women Empowerment Programs</h3>

              <p>
                Skill training initiatives, startup
                support, and financial assistance for
                women-led communities.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
