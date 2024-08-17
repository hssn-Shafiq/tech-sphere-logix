import React from "react";
import icon1 from "../../images/company-vision.png"
import icon2 from "../../images/corporate.png"
function MissionStatement() {
  return (
    <>
      <section className="ftco-section py-0">
        {/* visions statement */}
        <div className="container my-5 vision_main">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card card-custom card-blue">
                <div className="card-body text-white">
                  <div className="card-icon">
                    <img src={icon1} alt="Icon" />
                  </div>
                  <h3 className="card-title fs-2 fw-bolder">Our Vision</h3>
                  <p style={{ textAlign: "justify" }}>
                    To be a global leader in innovative technology solutions,
                    empowering businesses...
                  </p>
                  <a href="about.html" className="btn btn-link text-white">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-custom card-teal">
                <div className="card-body text-white">
                  <div className="card-icon">
                    <img src={icon2} alt="Icon" />
                  </div>
                  <h5 className="card-title fs-2 fw-bolder">Our Mission</h5>
                  <p style={{ textAlign: "justify" }}>
                    Our Mission is to make the world better by delivering
                    technology that improves our clients' success....
                  </p>
                  <a href="about.html" className="btn btn-link text-white">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MissionStatement;
