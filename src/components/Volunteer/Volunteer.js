import "./Volunteer.css";

function Volunteer() {

  return (

    <section
      className="volunteer-page"
      id="volunteer"
    >

      <div className="volunteer-container">

        {/* HERO SECTION */}

        <div className="volunteer-hero">

          <div className="volunteer-overlay"></div>

          <div className="volunteer-content">

            <p>
              Home / Volunteer
            </p>

            <h1>
              Join TDP Volunteer Network
            </h1>

            <span>
              Become a part of public welfare activities,
              development initiatives, youth campaigns,
              village outreach programs, healthcare drives,
              and constituency support activities.
            </span>

          </div>

        </div>

        {/* MAIN SECTION */}

        <div className="volunteer-wrapper">

          {/* LEFT FORM */}

          <div className="volunteer-form-box">

            <h2>
              Volunteer Registration
            </h2>

            <form>

              <div className="input-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter Your Name"
                />

              </div>

              <div className="input-group">

                <label>
                  Mobile Number
                </label>

                <input
                  type="text"
                  placeholder="+91 Enter Mobile Number"
                />

              </div>

              <div className="input-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter Email Address"
                />

              </div>

              <div className="input-group">

                <label>
                  District
                </label>

                <input
                  type="text"
                  placeholder="Ex: Guntur"
                />

              </div>

              <div className="checkbox-section">

                <h4>
                  Interested Areas
                </h4>

                <label>
                  <input type="checkbox" />
                  Public Meetings
                </label>

                <label>
                  <input type="checkbox" />
                  Welfare Activities
                </label>

                <label>
                  <input type="checkbox" />
                  Youth Campaigns
                </label>

                <label>
                  <input type="checkbox" />
                  Social Media Promotion
                </label>

              </div>

              <button type="submit">
                Register as Volunteer
              </button>

            </form>

          </div>

          {/* RIGHT SIDE */}

          <div className="volunteer-right">

            <div className="volunteer-image">

              <img
                src="https://images.indianexpress.com/2024/06/chandrababu-naidu-1.jpg"
                alt="TDP Volunteers"
              />

            </div>

            {/* STATS */}

            <div className="volunteer-stats">

              <div className="stat-card">

                <h2>
                  48,000+
                </h2>

                <p>
                  Active Volunteers
                </p>

              </div>

              <div className="stat-card">

                <h2>
                  720+
                </h2>

                <p>
                  Village Campaigns
                </p>

              </div>

              <div className="stat-card">

                <h2>
                  310+
                </h2>

                <p>
                  Welfare Activities
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RECENT VOLUNTEERS */}

        <div className="volunteer-list-section">

          <h2>
            Recent Volunteers
          </h2>

          <div className="volunteer-list">

            {/* CARD */}

            <div className="volunteer-card">

              <img
                src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                alt="Volunteer Avatar"
              />

              <div>

                <h3>
                  Naga Teja
                </h3>

                <p>
                  Vijayawada • Public Campaign Volunteer
                </p>

              </div>

            </div>

            {/* CARD */}

            <div className="volunteer-card">

              <img
                src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                alt="Volunteer Avatar"
              />

              <div>

                <h3>
                  Harika Devi
                </h3>

                <p>
                  Guntur • Women Welfare Volunteer
                </p>

              </div>

            </div>

            {/* CARD */}

            <div className="volunteer-card">

              <img
                src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                alt="Volunteer Avatar"
              />

              <div>

                <h3>
                  Sai Charan
                </h3>

                <p>
                  Rajahmundry • Social Media Volunteer
                </p>

              </div>

            </div>

            {/* CARD */}

            <div className="volunteer-card">

              <img
                src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                alt="Volunteer Avatar"
              />

              <div>

                <h3>
                  Keerthana Reddy
                </h3>

                <p>
                  Visakhapatnam • Youth Wing Volunteer
                </p>

              </div>

            </div>

            {/* CARD */}

            <div className="volunteer-card">

              <img
                src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                alt="Volunteer Avatar"
              />

              <div>

                <h3>
                  Phani Kumar
                </h3>

                <p>
                  Tirupati • Event Management Volunteer
                </p>

              </div>

            </div>

            {/* CARD */}

            <div className="volunteer-card">

              <img
                src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                alt="Volunteer Avatar"
              />

              <div>

                <h3>
                  Siri Lakshmi
                </h3>

                <p>
                  Nellore • Digital Outreach Volunteer
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Volunteer;