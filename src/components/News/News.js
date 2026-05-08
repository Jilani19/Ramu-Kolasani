import "./News.css";

/* =========================
   ONLINE IMAGES
========================= */

const images = {

  hero:
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1600&auto=format&fit=crop",

  education:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",

  women:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",

  healthcare:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",

  farmers:
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",

  youth:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

  village:
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",

  awards:
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",

  road:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
};

function News() {
  return (

    <section className="news-page">

      <div className="news-container">

        {/* =========================
            TOP HERO
        ========================= */}

        <div className="news-hero">

          <div className="news-overlay"></div>

          <div className="news-hero-content">

            <p>
              Home / News & Development
            </p>

            <h1>
              Public Welfare & Development Updates
            </h1>

            <span>
              Explore recent development activities,
              welfare schemes, public service programs,
              healthcare missions, educational support,
              and constituency progress initiatives.
            </span>

          </div>

        </div>

        {/* =========================
            FEATURED NEWS
        ========================= */}

        <div className="featured-news">

          <div className="featured-left">

            <div className="breaking-badge">
              Breaking Update
            </div>

            <h2>
              AI-Based Smart Education Initiative
              Launched Across Rural Schools
            </h2>

            <p>
              A large-scale digital education mission
              introducing AI-enabled classrooms,
              scholarship assistance, digital skill
              development, and smart learning systems
              for students across villages.
            </p>

            <button>
              Read Full Story
            </button>

          </div>

          <div className="featured-right">

            <img
              src={images.hero}
              alt="Political Activity"
            />

          </div>

        </div>

        {/* =========================
            GOVERNMENT SCHEMES
        ========================= */}

        <div className="schemes-section">

          <div className="section-header">

            <h2>
              Government Schemes & Initiatives
            </h2>

            <p>
              Welfare programs improving the lives
              of citizens across rural and urban areas.
            </p>

          </div>

          <div className="schemes-grid">

            <div className="scheme-card">
              <img src={images.farmers} alt="" />
              <h3>Farmers Support Program</h3>
              <p>
                Financial assistance and modern
                farming resources for farmers.
              </p>
            </div>

            <div className="scheme-card">
              <img src={images.women} alt="" />
              <h3>Women Empowerment</h3>
              <p>
                Skill training and startup
                support initiatives for women.
              </p>
            </div>

            <div className="scheme-card">
              <img src={images.youth} alt="" />
              <h3>Youth Employment Drive</h3>
              <p>
                Job fairs and digital training
                opportunities for youth.
              </p>
            </div>

            <div className="scheme-card">
              <img src={images.healthcare} alt="" />
              <h3>Healthcare for All</h3>
              <p>
                Free healthcare camps and
                improved medical facilities.
              </p>
            </div>

            <div className="scheme-card">
              <img src={images.education} alt="" />
              <h3>Educational Scholarships</h3>
              <p>
                Scholarship support for deserving
                students and digital education.
              </p>
            </div>

            <div className="scheme-card">
              <img src={images.village} alt="" />
              <h3>Smart Village Development</h3>
              <p>
                Infrastructure modernization and
                smart connectivity projects.
              </p>
            </div>

          </div>

        </div>

        {/* =========================
            NEWS GRID
        ========================= */}

        <div className="news-section">

          <div className="section-header">

            <h2>
              Latest Development Activities
            </h2>

            <p>
              Public welfare missions and constituency updates.
            </p>

          </div>

          <div className="news-grid">

            <div className="news-card">

              <img
                src={images.healthcare}
                alt=""
              />

              <div className="news-content">

                <span>
                  June 20, 2026
                </span>

                <h3>
                  Rural Healthcare Expansion Mission
                </h3>

                <p>
                  New healthcare centers and
                  mobile treatment units introduced
                  across rural villages.
                </p>

                <button>
                  Read More →
                </button>

              </div>

            </div>

            <div className="news-card">

              <img
                src={images.education}
                alt=""
              />

              <div className="news-content">

                <span>
                  June 18, 2026
                </span>

                <h3>
                  Scholarship Support Expanded
                </h3>

                <p>
                  Educational assistance and
                  digital learning programs
                  expanded for students.
                </p>

                <button>
                  Read More →
                </button>

              </div>

            </div>

            <div className="news-card">

              <img
                src={images.road}
                alt=""
              />

              <div className="news-content">

                <span>
                  June 15, 2026
                </span>

                <h3>
                  Road & Infrastructure Projects
                </h3>

                <p>
                  Large-scale road construction
                  and infrastructure modernization
                  accelerated across districts.
                </p>

                <button>
                  Read More →
                </button>

              </div>

            </div>

            <div className="news-card">

              <img
                src={images.awards}
                alt=""
              />

              <div className="news-content">

                <span>
                  June 12, 2026
                </span>

                <h3>
                  Awards & Scholarships Distributed
                </h3>

                <p>
                  Scholarships and awards distributed
                  to meritorious students.
                </p>

                <button>
                  Read More →
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            MEDIA COVERAGE
        ========================= */}

        <div className="media-section">

          <div className="media-left">

            <h2>
              National Recognition & Media Coverage
            </h2>

            <p>
              Leadership participation in national
              development, innovation, healthcare,
              and digital governance discussions.
            </p>

            <div className="media-points">

              <div className="media-item">
                National Development Summit Participation
              </div>

              <div className="media-item">
                Healthcare Innovation Recognition
              </div>

              <div className="media-item">
                Digital Governance & AI Development
              </div>

              <div className="media-item">
                Rural Welfare Mission Awards
              </div>

            </div>

          </div>

          <div className="media-right">

            <img
              src={images.hero}
              alt=""
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default News;