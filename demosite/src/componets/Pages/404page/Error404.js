import React, { Component } from "react";
import { Link } from "react-router-dom";
import Copyright from "../../Common/MIDWebsite/Copyright";

class Error404 extends Component {
  render() {
    return (
      <div>
        <div id="layoutError">
          <div id="layoutError_content" className="pb-5 pt-5">
            <main>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-6">
                    <div class="text-center mt-4">
                      <img
                        class="mb-4 img-error bt-5 pt-5"
                        src="./img/error-404-monochrome.svg"
                      />
                      <p class="lead">
                        This requested URL was not found on this server.
                      </p>
                      <Link to="/">
                        <i class="fas fa-arrow-left mr-1 pb-5"></i>
                        Return to Home Page
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <Copyright />
      </div>
    );
  }
}
export default Error404;
