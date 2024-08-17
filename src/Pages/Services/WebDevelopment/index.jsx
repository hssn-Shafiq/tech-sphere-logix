import React from "react";
import Header from "../../../Components/Header";
import BreadCrumb from "../../../Components/BreadCrumb";
import bg from "../../../images/about.jpg";
import img1 from "../../../images/Content-Management-System.jpg"
import img2 from "../../../images/Web-development-designing-Anvar-Freelancer-1.png"
import img3 from "../../../images/E-Commerce-Development-Bloom-IT.jpg"
import img4 from "../../../images/opensource.jpg"
import img5 from "../../../images/payment.jpg"
import img6 from "../../../images/custom-software-development.jpg"
import img7 from "../../../images/frontend.jpeg"
import img8 from "../../../images/What-is-back-end-development-2.jpg"
import img9 from "../../../images/API-Integration-Blog-header.png"
import Footer from "../../../Components/Footer";
import MainBanner from "../../../Components/MainBanner";

const WebDevelopment = () => {
  return (
    <>
      <Header />
      <BreadCrumb
        from="Services"
        pageTitle="Custom Web Development Solutions "
        bgImg={img9}
      />
      <section className="ftco-section bg-light">
        <div className="container">
          <span className="portfolio-category text-center">
            Web Development
          </span>
          <h2 className="mb-3 heading-title text-center" id="services-h">
            Web Services
          </h2>
          <div className="row d-flex" style={{ marginTop: 20 }}>
            <div className="col-lg-4 ">
              <div className="blog-entry">
                <div
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage:
                      `url(${img1})`,
                  }}
                ></div>
                <div className="text d-block text-center">
                  <h3 className="heading">CMS Management</h3>
                  <p>
                    We offer top-notch CMS management services to streamline
                    your content updates, enhance user experience, and boost
                    your digital presence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="blog-entry">
                <div
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage:
                      `url(${img2})`,
                  }}
                ></div>
                <div className="text d-block text-center">
                  <h3 className="heading">Web Designing And Development</h3>
                  <p>
                    Transform your online presence with our exceptional web
                    design and development services, creating visually stunning,
                    user-friendly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="blog-entry">
                <div
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage:
                      `url(${img3})`,
                  }}
                ></div>
                <div className="text d-block text-center">
                  <h3 className="heading">E-Commerce Development</h3>
                  <p>
                    Empower your business with our eCommerce development,
                    creating secure, scalable, and sales-driven online stores
                    for success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="blog-entry">
                <div
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage:
                      `url(${img4})`,
                  }}
                ></div>
                <div className="text d-block text-center">
                  <h3 className="heading">Open Source Development</h3>
                  <p>
                    Transform your business with our open source development
                    services, offering customizable, scalable, and
                    cost-effective solutions for success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="blog-entry">
                <div
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage:
                      `url(${img5})`,
                  }}
                ></div>
                <div className="text d-block text-center">
                  <h3 className="heading">Payment Gateway</h3>
                  <p>
                    Secure and seamless payment gateway services, ensuring
                    smooth transactions and boosting your business with
                    reliable, easy integration.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="blog-entry">
                <div
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage:
                      `url(${img6})`,
                  }}
                ></div>
                <div className="text d-block text-center">
                  <h3 className="heading">Custom Development</h3>
                  <p>
                    Custom development services tailored to your needs,
                    providing innovative solutions for your unique business
                    requirements.p&gt;
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-4 ">
              <div className="blog-entry">
                <div
                  className="block-20"
                  style={{
                    backgroundImage:
                      `url(${img7})`,
                  }}
                ></div>
                <div className="text d-block text-center">
                  <h3 className="heading">Frontend Development</h3>
                  <p>
                    Transforming concepts into engaging user interfaces with
                    modern frameworks and responsive design for seamless digital
                    experiences on any device.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="col-lg-4 ">
              <div className="blog-entry">
                <div
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage:
                      `url(${img8})`,
                  }}
                ></div>
                <div className="text d-block text-center">
                  <h3 className="heading">Backend Development</h3>
                  <p>
                    Building powerful server-side solutions for seamless data
                    management, performance optimization, and scalable
                    application architectures
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="col-lg-4 ">
              <div className="blog-entry">
                <div
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage:
                      `url(${img9})`,
                  }}
                ></div>
                <div className="text d-block text-center">
                  <h3 className="heading">System Integration And APIs</h3>
                  <p>
                    Seamlessly integrating systems and APIs to enhance
                    operational efficiency, data flow, and business automation
                    with robust reliability
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>

      <MainBanner />
      <Footer />
    </>
  );
};
export default WebDevelopment;
