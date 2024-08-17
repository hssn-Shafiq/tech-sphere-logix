import React from "react";
import "animate.css"

function MainBanner() {
  return (
    <>
      <>
        <div className="container-fluid" id="hero-container">
          <div className="row d-flex align-items-center justify-content-center">
            <div
              style={{ marginTop: 100 }}
              className="col-md-5   d-flex align-items-center justify-content-center"
            >
              <div className="text w-100">
                <span className="subheading" data-aos="fade-up">
                  Welcome to Tech Sphere Logix{" "}
                </span>
                <h1
                  style={{ fontWeight: "bold", marginTop: 40 }}
                  data-aos="fade-up"
                >
                  A leading IT Services Provider Firm dedicated to Crafting
                  Solutions.
                </h1>
                <p className="mb-4" data-aos="fade-up">
                  We empower businesses with cutting-edge technology,
                  exceptional design, and innovative thinking to reach new
                  heights.
                </p>
                {/* <p><a href="#" class="btn btn-primary">Learn More</a>  */}
                <a
                  href="/portfolio"
                  className="btn btn-white"
                  data-aos="fade-up"
                >
                  View Portfolio
                </a>
                <p />
              </div>
              {/* 2nd section heading */}
            </div>
            <div className="col-md-5" data-aos="fade-left">
              {/* from */}
              <div className="form-container-custom">
                <h1 className="form-heading-custom">
                  CONNECT{" "}
                  <span className="form-heading-span-custom">WITH US</span>
                </h1>
                <p className="form-description-custom">Get a Free Quote Now!</p>
                <form
                  className="contact-form-custom"
                  action="form_handler.php"
                  method="post"
                >
                  <input
                    type="text"
                    name="name"
                    className="form-input-custom"
                    placeholder="Enter Your Name"
                    required=""
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-input-custom"
                    placeholder="Enter Your Email"
                    required=""
                  />
                  <input
                    type="text"
                    name="phone"
                    className="form-input-custom"
                    placeholder="Enter Phone Number"
                    required=""
                  />
                  <input
                    type="text"
                    name="city"
                    className="form-input-custom"
                    placeholder="City"
                    required=""
                  />
                  <input
                    type="text"
                    name="business"
                    className="form-input-custom"
                    placeholder="Enter Your Business Name"
                    required=""
                  />
                  <select
                    name="interest"
                    className="form-select-custom"
                    required=""
                  >
                    <option value="">I'm interested in?</option>
                    <option value="web development">Web Development</option>
                    <option value="app development">App Development</option>
                    <option value="ecommerce">Software Development</option>
                    <option value="ecommerce">Graphics Designing</option>
                    <option value="ecommerce">Digital Marketing</option>
                    <option value="ui ux design">UI/UX Design</option>
                    <option value="ecommerce">Wordpress</option>
                    <option value="ecommerce">Shopify</option>
                    <option value="ecommerce">WebFlow</option>
                  </select>
                  <textarea
                    placeholder="Hello Tech Sphere Logix"
                    name="messge"
                    id="msg"
                    defaultValue={""}
                  />
                  {/* <option value="seo">SEO Services</option> */}
                  <button type="submit" className="form-button-custom">
                    SUBMIT
                  </button>
                </form>
              </div>
              {/* end form */}
            </div>
          </div>
        </div>
        {/* end hero section */}
      </>
    </>
  );
}

export default MainBanner;
