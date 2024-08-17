import React from "react";

// Import images
import webImage from "../../images/web.png";
import appImage from "../../images/App.jpg";
import shopifyImage from "../../images/work-3.jpg";
import wordpressImage from "../../images/work-4.jpg";
import webflowImage from "../../images/wordpress.jpg";
import graphicImage from "../../images/graphic.jpg";
import softwareImage from "../../images/portfolio-software-development-1.jpg";
import marketingImage from "../../images/portfolio-md-1.jpg";
import uxuiImage from "../../images/portfolioux.jpg";

function Portfolio() {
  return (
    <>
      {/* ======= Portfolio Section ======= */}
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ">
              <span className="subheading">Recent Portfolio</span>
              <h2 className="mb-4">Our Exceptional Quality Work</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ">
              <div
                className="project-wrap img d-flex align-items-end"
                style={{ backgroundImage: `url(${webImage})` }}
              >
                <div className="text">
                  <span>Web</span>
                  <h3>
                    <a href="web1-services.html">Creative Web Apps</a>
                  </h3>
                  <a
                    href="web1-services.html"
                    className="icon d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div
                className="project-wrap img d-flex align-items-end"
                style={{ backgroundImage: `url(${appImage})` }}
              >
                <div className="text">
                  <span>App</span>
                  <h3>
                    <a href="app-services.html">Creative Apps</a>
                  </h3>
                  <a
                    href="app-services.html"
                    className="icon d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div
                className="project-wrap img d-flex align-items-end"
                style={{ backgroundImage: `url(${shopifyImage})` }}
              >
                <div className="text">
                  <span>Shopify</span>
                  <h3>
                    <a href="shopify-services.html">Creative Shopify Apps</a>
                  </h3>
                  <a
                    href="shopify-services.html"
                    className="icon d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div
                className="project-wrap img d-flex align-items-end"
                style={{ backgroundImage: `url(${wordpressImage})` }}
              >
                <div className="text">
                  <span>Wordpress</span>
                  <h3>
                    <a href="wordpress-services.html">Creative Wordpress</a>
                  </h3>
                  <a
                    href="wordpress-services.html"
                    className="icon d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div
                className="project-wrap img d-flex align-items-end"
                style={{ backgroundImage: `url(${webflowImage})` }}
              >
                <div className="text">
                  <span>Web Flow</span>
                  <h3>
                    <a href="webflow-services.html">Creative Web Flow Apps</a>
                  </h3>
                  <a
                    href="webflow-services.html"
                    className="icon d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div
                className="project-wrap img d-flex align-items-end"
                style={{ backgroundImage: `url(${graphicImage})` }}
              >
                <div className="text">
                  <span>Graphics</span>
                  <h3>
                    <a href="graphic-services.html">Creative Design</a>
                  </h3>
                  <a
                    href="graphic-services.html"
                    className="icon d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div
                className="project-wrap img d-flex align-items-end"
                style={{ backgroundImage: `url(${softwareImage})` }}
              >
                <div className="text">
                  <span>Software</span>
                  <h3>
                    <a href="software-services.html">Software Development</a>
                  </h3>
                  <a
                    href="software-services.html"
                    className="icon d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div
                className="project-wrap img d-flex align-items-end"
                style={{ backgroundImage: `url(${marketingImage})` }}
              >
                <div className="text">
                  <span>Marketing</span>
                  <h3>
                    <a href="marketing-services.html">Digital Marketing</a>
                  </h3>
                  <a
                    href="marketing-services.html"
                    className="icon d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div
                className="project-wrap img d-flex align-items-end"
                style={{ backgroundImage: `url(${uxuiImage})` }}
              >
                <div className="text">
                  <span>UX/UI</span>
                  <h3>
                    <a href="UXUI.html">User Interface</a>
                  </h3>
                  <a
                    href="UXUI.html"
                    className="icon d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-chevron-right" />
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

export default Portfolio;
