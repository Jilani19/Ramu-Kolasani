import "./About.css";

import leaderImage from "../../assets/images/hero.png";

function About() {
  return (
    <section className="about-page">

      <div className="about-container">

        {/* =========================
            TOP SECTION
        ========================= */}

        <div className="about-top">

          {/* LEFT IMAGE */}

          <div className="about-image-section">

            <img
              src={leaderImage}
              alt="Leader"
            />

            <h2>Ramu Kolasani</h2>

            <p>
              Dedicated Leader Serving the Community
            </p>

          </div>

          {/* RIGHT CONTENT */}

          <div className="about-content-section">

            <h1>Biography</h1>

            <p className="bio-text">
              John Kumar is a passionate dedicated
              leader committed to the service of the
              people and the development of our nation.
              With a background in technology and
              extensive experience in public service,
              he has consistently worked to improve
              the lives of citizens and bring about
              positive change.
            </p>

            <div className="about-info-grid">

              <div className="info-card">

                <h3>Education</h3>

                <p>
                  Bachelor’s degree in Computer Science
                  with strong expertise in innovation,
                  leadership, and technology-driven governance.
                </p>

              </div>

              <div className="info-card">

                <h3>Political Journey</h3>

                <p>
                  Years of dedicated public service focused
                  on infrastructure, healthcare, employment,
                  and citizen welfare.
                </p>

              </div>

              <div className="info-card">

                <h3>Achievements</h3>

                <p>
                  Successfully launched development projects
                  benefiting millions of citizens across regions.
                </p>

              </div>

              <div className="info-card">

                <h3>Vision & Mission</h3>

                <p>
                  Building a transparent, educated,
                  empowered, and digitally connected society.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            BOTTOM SECTION
        ========================= */}

        <div className="about-bottom">

          <div className="bottom-box">

            <h3>Education</h3>

            <p>
              John Kumar completed his education in
              Computer Science and developed strong
              leadership and public service values
              from an early stage.
            </p>

          </div>

          <div className="bottom-box">

            <h3>Political Journey</h3>

            <ul>

              <li>
                Elected as MLA (2019 - Present)
              </li>

              <li>
                State Minister (2016 - 2019)
              </li>

              <li>
                Municipal Councilor (2010 - 2015)
              </li>

            </ul>

          </div>

          <div className="bottom-box">

            <h3>Vision & Mission</h3>

            <ul>

              <li>
                Empowering youth through education
              </li>

              <li>
                Healthcare accessibility for all
              </li>

              <li>
                Transparent governance system
              </li>

              <li>
                Sustainable infrastructure development
              </li>

            </ul>

          </div>

        </div>

        {/* =========================
            JOURNEY SECTION
        ========================= */}

        <div className="journey-section">

          <div className="section-header">

            <span>Leadership Journey</span>

            <h2>
              A Vision Built Through Action
            </h2>

          </div>

          <div className="journey-grid">

            <div className="journey-card">

              <h3>2012</h3>

              <p>
                Started public welfare initiatives
                focusing on rural education.
              </p>

            </div>

            <div className="journey-card">

              <h3>2016</h3>

              <p>
                Expanded healthcare and digital
                infrastructure projects.
              </p>

            </div>

            <div className="journey-card">

              <h3>2020</h3>

              <p>
                Launched youth employment and
                women empowerment programs.
              </p>

            </div>

            <div className="journey-card">

              <h3>2025</h3>

              <p>
                Introduced smart development
                initiatives and AI-based education support.
              </p>

            </div>

          </div>

        </div>

        {/* =========================
            CORE VALUES
        ========================= */}

        <div className="values-section">

          <div className="section-header">

            <span>Core Values</span>

            <h2>
              Principles That Guide Leadership
            </h2>

          </div>

          <div className="values-grid">

            <div className="value-card">

              <h3>Transparency</h3>

              <p>
                Open governance with citizen-first policies.
              </p>

            </div>

            <div className="value-card">

              <h3>Innovation</h3>

              <p>
                Technology-driven development initiatives.
              </p>

            </div>

            <div className="value-card">

              <h3>Equality</h3>

              <p>
                Equal opportunities for every citizen.
              </p>

            </div>

            <div className="value-card">

              <h3>Community Growth</h3>

              <p>
                Sustainable and inclusive progress.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
