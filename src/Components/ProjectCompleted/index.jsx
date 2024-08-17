import React from 'react';
import bg from "../../images/bg_4.jpg"

function ProjectCompleted() {
    return ( <>
    <section
  className="ftco-section ftco-counter img"
  id="section-counter"
  style={{ backgroundImage: `url(${bg})` }}
>
  <div className="overlay" />
  <div className="container">
    <div className="row">
      <div className="col-md-3 d-flex counter-wrap ">
        <div className="block-18 d-flex align-items-center">
          <div className="icon d-flex align-items-center justify-content-center">
          <i className="fs-1 fa-solid fa-user" ></i>

          </div>
          <div className="text pl-3">
            <strong className="number" data-number={30}>
              0
            </strong>
            <span>Project Completed</span>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex counter-wrap ">
        <div className="block-18 d-flex align-items-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <i className="fs-1 fa-solid fa-user" ></i>
          </div>
          <div className="text pl-3">
            <strong className="number" data-number={7}>
              0
            </strong>
            <span>Our Staff</span>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex counter-wrap ">
        <div className="block-18 d-flex align-items-center">
          <div className="icon d-flex align-items-center justify-content-center">
          <i className="fs-1 fa-solid fa-user" ></i>

          </div>
          <div className="text pl-3">
            <strong className="number" data-number={9}>
              0
            </strong>
            <span>Services Provide</span>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex counter-wrap ">
        <div className="block-18 d-flex align-items-center">
          <div className="icon d-flex align-items-center justify-content-center">
          <i className="fs-1 fa-solid fa-user" ></i>

          </div>
          <div className="text pl-3">
            <strong className="number" data-number={20}>
              0
            </strong>
            <span>Happy Customers</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </> );
}

export default ProjectCompleted;