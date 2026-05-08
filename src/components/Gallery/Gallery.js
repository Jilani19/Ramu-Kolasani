import "./Gallery.css";

/* =========================
   TDP GALLERY IMAGES
========================= */

const galleryImages = [

  "https://sc0.blr1.digitaloceanspaces.com/large/871085-80931-vjgwfednqv-1519633068.jpg",

  "https://www.livemint.com/lm-img/img/2024/03/09/600x338/ANI-20240228366-0_1709975155298_1709975185162.jpg",

  "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/chandrababu-naidu-103146392-16x9_0.jpg",

  "https://images.indianexpress.com/2024/06/chandrababu-naidu-1.jpg",

  "https://images.moneycontrol.com/static-mcnews/2024/06/20240612123420_Chandrababu-Naidu.jpg",

  "https://cdn.siasat.com/wp-content/uploads/2024/06/Chandrababu-Naidu.jpg",

  "https://images.news18.com/ibnlive/uploads/2024/05/chandrababu-naidu-2024-05-7c7e56f4d67d3f3e8d1f4f4d6c0d3f1.jpg",

  "https://images.deccanherald.com/deccanherald%2F2024-06%2F3f8f1d96-2e65-48e6-b8cf-0eb5db76d3de%2FPTI06_09_2024_000247A.jpg"

];

function Gallery() {

  return (

    <section className="gallery-page">

      <div className="gallery-container">

        {/* =========================
            HERO SECTION
        ========================= */}

        <div className="gallery-hero">

          <p>
            Home / Gallery
          </p>

          <h1>
            Gallery
          </h1>

          <span>
            A glimpse into political campaigns,
            welfare activities, public meetings,
            leadership events, constituency visits,
            and development programs.
          </span>

        </div>

        {/* =========================
            IMAGE GRID
        ========================= */}

        <div className="gallery-grid">

          {
            Array.from({ length: 32 }).map((_, index) => (

              <div
                className="gallery-card"
                key={index}
              >

                <img
                  src={
                    galleryImages[
                      index % galleryImages.length
                    ]
                  }
                  alt="TDP Party"
                />

                <div className="image-overlay">

                  <span>
                    View
                  </span>

                </div>

              </div>

            ))
          }

        </div>

        {/* =========================
            VIDEO SECTION
        ========================= */}

        <div className="video-section">

          <h2>
            Video Highlights
          </h2>

          <div className="video-grid">

            <div className="video-card">

              <img
                src="https://images.indianexpress.com/2024/06/chandrababu-naidu-1.jpg"
                alt=""
              />

              <div className="play-btn">
                ▶
              </div>

              <div className="video-content">

                <h3>
                  Massive Public Rally
                </h3>

                <p>
                  Leadership addressing
                  thousands of supporters.
                </p>

              </div>

            </div>

            <div className="video-card">

              <img
                src="https://images.moneycontrol.com/static-mcnews/2024/06/20240612123420_Chandrababu-Naidu.jpg"
                alt=""
              />

              <div className="play-btn">
                ▶
              </div>

              <div className="video-content">

                <h3>
                  Development Review Meeting
                </h3>

                <p>
                  Reviewing infrastructure
                  and welfare initiatives.
                </p>

              </div>

            </div>

            <div className="video-card">

              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/chandrababu-naidu-103146392-16x9_0.jpg"
                alt=""
              />

              <div className="play-btn">
                ▶
              </div>

              <div className="video-content">

                <h3>
                  Youth Interaction Program
                </h3>

                <p>
                  Engaging with students
                  and young professionals.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Gallery;