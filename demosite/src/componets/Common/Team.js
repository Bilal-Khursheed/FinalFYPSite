import React, { Component } from "react";
import "tachyons";
import { Link } from "react-router-dom";


class Team extends Component {
  render() {
    return (
      <div className="teambody container">
        <div class="container py-5">
          <div class="row text-center text-white">
            <div class="col-lg-8 mx-auto">
              <h1 class="display-4">Our Professionals</h1>
              <p class="lead mb-0">
                We Have a Team Of Professionals who have years of experience in Machine Learning and Deep Learning
              </p>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row text-center">
            <div class="col-xl-3 col-sm-6 mb-5 grow">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Manuella Nevoky</h5>
                <span class="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-5 grow">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-2.jpg"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Samuel Hardy</h5>
                <span class="small text-uppercase text-muted">
                  Managing Director
                </span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-5 grow">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-1.jpg"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Tom Sunderland</h5>
                <span class="small text-uppercase text-muted">
                  Regional Manager
                </span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-5 grow">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-7.jpg"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">John Tarly</h5>
                <span class="small text-uppercase text-muted">
                  Senior Data Scientist
                </span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li class="list-inline-item">
                    <Link href="#" class="social-link">
                      <i class="fab fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}

export default Team;
