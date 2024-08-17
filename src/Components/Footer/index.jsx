import React from "react";
import img1 from "../../images/short.jpg"
import img2 from "../../images/short2.png"

function Footer() {
  return (
    <>
      <footer className="ftco-footer">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-12 col-md">
              <div className="ftco-footer-widget mb-4">
                <a href="index.html">
                  <img src={img2} width={60} alt="" />
                </a>

                <p className="mt-3">
                  Your Trusted Partner For Comprehensive IT Solutions
                </p>
                <ul className="ftco-footer-social list-unstyled mt-0">
                  <li className="">
                    <a href="https://www.linkedin.com/company/tech-sphere-logix/" className="d-flex align-items-center justify-content-center">
                      <i class="fa-brands fa-linkedin fs-5 text-light"></i>
                    </a>
                  </li>
                  <li className="">
                    <a href="https://www.facebook.com/profile.php?id=61561550277288&mibextid=ZbWKwL" className="d-flex align-items-center justify-content-center">
                      <i class="fa-brands fa-facebook fs-5 text-light"></i>
                    </a>
                  </li>
                  <li className="">
                    <a href="https://www.linkedin.com/company/tech-sphere-logix/" className="d-flex align-items-center justify-content-center">
                      <i class="fa-brands fa-instagram fs-5 text-light"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div class="col-sm-12 col-md">
					<div class="ftco-footer-widget mb-4 ml-md-4">
						<h2 class="ftco-heading-2">Explore</h2>
						<ul class="list-unstyled">
							<li><a href="services.html"><span class="fa fa-chevron-right mr-2"></span>Services</a></li>
							<li><a href="portfolio.html"><span class="fa fa-chevron-right mr-2"></span>Portfolio</a></li>
							<li><a href="projects.html"><span class="fa fa-chevron-right mr-2"></span>Our Projects</a>
							</li>

						</ul>
					</div>
				</div> */}
            <div className="col-sm-12 col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Services</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/web-development">
                      <span className="fa fa-chevron-right mr-2" />
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="app-services.html">
                      <span className="fa fa-chevron-right mr-2" />
                      App Development
                    </a>
                  </li>
                  <li>
                    <a href="graphic-services.html">
                      <span className="fa fa-chevron-right mr-2" />
                      Graphic Designing
                    </a>
                  </li>
                  <li>
                    <a href="software-services.html">
                      <span className="fa fa-chevron-right mr-2" />
                      Software Development
                    </a>
                  </li>
                  <li>
                    <a href="marketing-services.html">
                      <span className="fa fa-chevron-right mr-2" />
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="UXUI.html">
                      <span className="fa fa-chevron-right mr-2" />
                      UI/UX
                    </a>
                  </li>
                  <li>
                    <a href="wordpress-services.html">
                      <span className="fa fa-chevron-right mr-2" />
                      Wordpress
                    </a>
                  </li>
                  <li>
                    <a href="shopify-services.html">
                      <span className="fa fa-chevron-right mr-2" />
                      Shopify
                    </a>
                  </li>
                  <li>
                    <a href="webflow-services.html">
                      <span className="fa fa-chevron-right mr-2" />
                      Webflow
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Company</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="about.html">
                      <span className="fa fa-chevron-right mr-2" />
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <span className="fa fa-chevron-right mr-2" />
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="services.html">
                      <span className="fa fa-chevron-right mr-2" />
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="projects.html">
                      <span className="fa fa-chevron-right mr-2" />
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="portfolio.html">
                      <span className="fa fa-chevron-right mr-2" />
                      Portfolio
                    </a>
                  </li>
                  {/* <li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Careers</a></li> */}
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <i className="fa fa-map icon" />
                      <span className="text">
                        51 Mor Pull Sanny Rahim Yar Khan
                      </span>
                    </li>
                    <li>
                      <a href="https://api.whatsapp.com/send/?phone=%2B923089850893&fbclid=IwZXh0bgNhZW0CMTAAAR0O0Yi8HhvaXKJy8NHF9QyeglR0j90MRt-SnIM95c9jQh2FsEfY7qdg6oA_aem_ijwB8Za-WWX4IZ7GHl7ACA ">
                        <i className="fa fas fa-phone-square icon" />
                        <span className="text">+92 308 9850 893</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@techspherelogix.com">
                        <i className="fa fab fa-facebook-messenger icon" />
                        <span className="text">
                          <span
                            className="__cf_email__"
                            data-cfemail="640d0a020b241d0b1116000b09050d0a4a070b09"
                          >
                            info@techspherelogix.com
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid px-0 py-5 "
          style={{ borderTop: "2px solid #dee2e606" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="mb-0" style={{ color: "rgba(255,255,255,.5)" }}>
                  Copyright © All rights reserved |{" "}
                  <a href="#" target="_blank" rel="nofollow noopener">
                    Tech Sphere Logix
                  </a>
                  {/*  */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
