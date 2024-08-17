import React from "react";
import bg from "../../images/about.jpg"

function BreadCrumb({pageTitle, from , bgImg}) {
  return (
    <>
     <section className="hero-wrap hero-wrap-2" id="hero-container-other">
        <div className="overlay" style={{backgroundImage: `url(${bgImg})`}} />
        <div className="container">
          <div
            className="row no-gutters slider-text align-items-end"
            id="heading-hero"
          >
            <div className="col-md-9  pb-5">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">
                    {from}<i className="fa fa-chevron-right" />
                  </a>
                </span>{" "}
                <span>
                  {pageTitle}<i className="fa fa-chevron-right" />
                </span>
              </p>
              <h1 className="mb-0 bread">{pageTitle}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BreadCrumb;
