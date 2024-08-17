import React from 'react';
import img1 from "../../images/about-1.jpg"
import img2 from "../../images/about.jpg"

function WelcomeSection() {
    return ( <>
    
    
    <section className="ftco-section ftco-no-pt ftco-about img">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-12 about-intro">
              <div className="row d-flex">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div
                    className="img d-flex align-items-center align-self-stretch justify-content-center"
                    style={{
                        backgroundImage: `url(${img1})`,
                     }}
                  >
                    <div
                      className="img-2 d-flex align-items-center justify-content-center"
                      style={{ backgroundImage: `url(${img2})` }}
                    ></div>
                  </div>
                </div>
                <div className="col-md-6 pl-md-5 py-5">
                  <div className="row justify-content-start pb-3">
                    <div className="col-md-12 heading-section ">
                      <span className="subheading">
                        Welcome to Tech Sphere Logix
                      </span>
                      <h2 className="mb-4">
                        We Are Tech Sphere Logix a Complete IT Solution Company
                      </h2>
                      <p>
                        Tech Sphere Logix is your trusted partner for
                        comprehensive IT solutions. We specialize in developing
                        innovative web applications, creating captivating UX/UI
                        designs, enhancing brand identities through strategic
                        branding and social media marketing, and optimizing
                        search visibility. Our goal is to drive digital
                        transformation and growth for businesses worldwide.
                      </p>
                      <div className="row mb-4">
                        <div className="col-md-6 ">
                          <div className="services-2 d-flex align-items-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                              <span className="flaticon-conversation" />
                            </div>
                            <div className="media-body">
                              <h3 className="heading">
                                Expert
                                <br /> Team
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 ">
                          <div className="services-2 d-flex align-items-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                              <span className="flaticon-light-bulb" />
                            </div>
                            <div className="media-body">
                              <h3 className="heading">
                                Solution
                                <br /> For Business
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        <a href="contact.html" className="btn btn-primary">
                          Get in touch with us
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </> );
}

export default WelcomeSection;