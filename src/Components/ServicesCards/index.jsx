import React from "react";
import { Link } from "react-router-dom";

function ServicesCards() {
  return (
    <>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ">
              <span className="subheading">Our Services</span>
              <h2 className="mb-4">
                Core Services - Move from Accuracy to Precision
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="services">
                <div className="icon">
                  <span className="flaticon-good-review"></span>
                </div>

                <div className="media-body">
                  <Link to="web1-services">
                    <h3 className="heading mb-3">Web Development</h3>
                    <p>
                      We offer top-notch web development services tailored to
                      meet your business needs. Our expert team ensures your
                      website is robust, scalable, and user-friendly.
                    </p>
                  </Link>
                </div>
                <Link
                  to="web1-services"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                </Link>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="services">
                <div className="icon">
                  <span className="flaticon-file"></span>
                </div>

                <div className="media-body">
                  <Link to="app-services">
                    <h3 className="heading mb-3">App Development</h3>
                    <p>
                      Our app development services cover both Android and iOS
                      platforms. We create high-performance apps with seamless
                      user experiences to engage your audience effectively.
                    </p>
                  </Link>
                </div>
                <Link
                  to="app-services"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                </Link>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="services">
                <div className="icon">
                  <span className="flaticon-branding"></span>
                </div>

                <div className="media-body">
                  <Link to="UXUI">
                    <h3 className="heading mb-3">UI/UX Design</h3>
                    <p>
                      Our UI/UX design services focus on creating intuitive and
                      engaging interfaces. We ensure your users have a seamless
                      and enjoyable experience on your website or app.
                    </p>
                  </Link>
                </div>
                <Link
                  to="UXUI"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                </Link>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="services">
                <div className="icon">
                  <span className="flaticon-waiter"></span>
                </div>

                <div className="media-body">
                  <Link to="graphic-services">
                    <h3 className="heading mb-3">Graphic Design</h3>
                    <p>
                      Our graphic design services include branding, print
                      design, and digital graphics. We create visually appealing
                      designs that effectively communicate your brand message.
                    </p>
                  </Link>
                </div>
                <Link
                  to="UXUI"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                </Link>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="services">
                <div className="icon">
                  <span className="flaticon-ux"></span>
                </div>

                <div className="media-body">
                  <Link to="wordpress-services">
                    <h3 className="heading mb-3">WordPress</h3>
                    <p>
                      We provide comprehensive WordPress services, including
                      theme customization, plugin development, and site
                      maintenance, ensuring your website is always up-to-date
                      and secure.
                    </p>
                  </Link>
                </div>
                <Link
                  to="wordpress-services"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                </Link>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="services">
                <div className="icon">
                  <span className="flaticon-conversation"></span>
                </div>

                <div className="media-body">
                  <Link to="shopify-services">
                    <h3 className="heading mb-3">Shopify</h3>
                    <p>
                      Our Shopify services include store setup, customization,
                      and optimization. We help you create a powerful e-commerce
                      platform to sell your products online effectively.
                    </p>
                  </Link>
                </div>
                <Link
                  to="shopify-services"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                </Link>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="services">
                <div className="icon">
                  <span className="flaticon-customer-service"></span>
                </div>

                <div className="media-body">
                  <Link to="webflow-services">
                    <h3 className="heading mb-3">Web Flow</h3>
                    <p>
                      Leverage our expertise in Web Flow to build responsive and
                      visually stunning websites. We ensure your site looks
                      great on all devices and delivers an exceptional user
                      experience.
                    </p>
                  </Link>
                </div>
                <Link
                  to="webflow-services"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                </Link>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="services">
                <div className="icon">
                  <span className="flaticon-branding"></span>
                </div>

                <div className="media-body">
                  <Link to="software-services">
                    <h3 className="heading mb-3">Software Development</h3>
                    <p>
                      We provide development services, crafting custom websites,
                      apps, and software solutions that meet your unique
                      business needs and drive growth.
                    </p>
                  </Link>
                </div>
                <Link
                  to="software-services"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                </Link>
              </div>
            </div>

            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="services">
                <div className="icon">
                  <span className="flaticon-branding"></span>
                </div>

                <div className="media-body">
                  <Link to="marketing-services">
                    <h3 className="heading mb-3">Digital Marketing</h3>
                    <p>
                      We provide tailored digital marketing services, including
                      SEO, PPC, social media, content, and email marketing, to
                      boost your online presence.
                    </p>
                  </Link>
                </div>
                <Link
                  to="marketing-services"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesCards;
