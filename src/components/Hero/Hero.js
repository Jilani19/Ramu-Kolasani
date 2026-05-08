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

              {/* LEADER TAG */}

              <div className="leader-tag">

                <span className="tag-line"></span>

                Ramu Kolasani • Visionary Youth Leader

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

            <h3>
              Latest Updates
            </h3>

            <div className="update-item">

              <h4>
                AI-Based Rural Education Program Launched
              </h4>

              <p>
                June 18, 2026
              </p>

            </div>

            <div className="update-item">

              <h4>
                Smart Healthcare Vans Introduced
              </h4>

              <p>
                June 10, 2026
              </p>

            </div>

            <a href="/">
              Read More →
            </a>

          </div>

          {/* CENTER COLUMN */}

          <div className="bottom-card">

            <h3>
              Our Achievements
            </h3>

            <div className="achievement-grid">

              <div className="achievement-box">

                <h2>
                  850+
                </h2>

                <p>
                  Villages Connected
                </p>

              </div>

              <div className="achievement-box">

                <h2>
                  1.2M+
                </h2>

                <p>
                  Citizens Benefited
                </p>

              </div>

              <div className="achievement-box">

                <h2>
                  300K+
                </h2>

                <p>
                  Scholarships Distributed
                </p>

              </div>

              <div className="achievement-box">

                <h2>
                  500+
                </h2>

                <p>
                  Healthcare Camps
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <div className="bottom-card">

            <h3>
              Public Welfare
            </h3>

            <div className="welfare-grid">

              <div className="welfare-box">

                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                  alt="Education"
                />

                <p>
                  Digital Education Mission
                </p>

              </div>

              <div className="welfare-box">

                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514"
                  alt="Women Empowerment"
                />

                <p>
                  Women Empowerment Drive
                </p>

              </div>

              <div className="welfare-box">

                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
                  alt="Healthcare"
                />

                <p>
                  Healthcare Accessibility
                </p>

              </div>

              <div className="welfare-box">

                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309"
                  alt="Medical Camps"
                />

                <p>
                  Medical Mega Camps
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;
