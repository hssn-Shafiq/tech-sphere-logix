import React from "react";

function TopCards() {
  return (
    <>
      <section className="ftco-section ftco-services ftco-no-pt bg-light">
        <div className="container container-2">
          <div className="row">
            <div className="col-md-3 d-flex align-self-stretch ">
              <div className="services">
                <div className="icon d-flex">
                  <span className="flaticon-ux" />
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">UX/UI Design</h3>
                  <p>
                    Tech Sphere Logix specializes in creating intuitive UX/UI
                    designs that prioritize user satisfaction and engagement. We
                    focus on enhancing usability and aesthetics for seamless
                    digital experiences.
                  </p>
                  <p></p>
                  <p></p>
                </div>
                <a
                  href="services.html"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right" />
                </a>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ">
              <div className="services">
                <div className="icon d-flex">
                  <span className="flaticon-web-programming" />
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Development</h3>
                  <p>
                    Tech Sphere Logix excels in developing innovative web
                    applications tailored to your business needs, utilizing
                    cutting-edge technology to ensure robust performance and
                    seamless user experiences.
                  </p>
                  <p></p>
                  <p></p>
                </div>
                <a
                  href="services.html"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right" />
                </a>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ">
              <div className="services">
                <div className="icon d-flex">
                  <span className="flaticon-branding" />
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Branding</h3>
                  <p>
                    Tech Sphere Logix enhances brands with captivating visual
                    identities and strategic social media marketing. We create
                    impactful campaigns that resonate and elevate brand presence
                    in the digital landscape.
                  </p>
                  <p></p>
                  <p></p>
                </div>
                <a
                  href="services.html"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right" />
                </a>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ">
              <div className="services">
                <div className="icon d-flex">
                  <span className="flaticon-stats" />
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Graphics</h3>
                  <p>
                    We provide graphic designing services, creating visually
                    stunning and impactful designs that effectively communicate
                    your brand’s message and captivate your audience.
                  </p>
                  <p></p>
                </div>
                <a
                  href="services.html"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopCards;
