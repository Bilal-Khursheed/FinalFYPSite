import React, { Component } from "react";
import $, { event, post } from "jquery";
import LoadingOverlay from "react-loading-overlay";
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/core";
import axios from "axios";

const Loader = () => (
  <div class="divLoader">
    <svg class="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
      <path
        stroke="none"
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#51CACC"
        transform="rotate(179.719 50 51)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 51;360 50 51"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
      </path>
    </svg>
  </div>
);

class FileUpload extends Component {
  state = {
    selectedFile: null,
    withskull: "#",
    withoutskull: null,
    allow: false,
    loading: false,
    isactive: false,
  };
  handlefile = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
    });
  };
  uploadFile = async () => {
    //this.setState({ loading: true });
    this.setState({ isactive: true });
    //$("#img-upload").attr("src", `gif/source.gif`);
    const filedata = new FormData();
    filedata.append("image", this.state.selectedFile);
    var name = "Bilal";
    // $("#img-stripped").attr("src", "gif/waiting.gif");
    await axios
      .post(`http://localhost:3002/?name=${name}`, filedata, {
        onUploadProgress: (progressEvent) => {
          console.log(
            "uploading" +
              Math.round((progressEvent.loaded / progressEvent.total) * 100) +
              "%"
          );
        },
      })
      .then((respone) => {
        console.log(respone.data.message);
        if (respone.data.message === "skullStripped") {
          console.log("working");
          // $("#imgInp").attr("src", respone.data.withskull);
          this.setState({ withoutskull: respone.data.withoutskull });
          this.setState({ withskull: respone.data.withskull });
          this.setState({ allow: true });
          this.setState({ loading: false });
          this.setState({ isactive: false });
          console.log("hee is the link" + this.state.withoutskull);
          var withskull = this.state.withskull;
          $("#img-stripped").attr("src", "gif/found.gif");
          console.log("url is " + this.state.withoutskull);
          $("#img-upload").attr("src", `${this.state.withskull}`);
        } else {
          console.log("not working");
        }
      });
    // .then(() => setTimeout(() => this.setState({ navigate: true }), 2000))
    // .then(() => setTimeout(() => this.setState({ navigate: true }), 2000))
    /* .then( (Result) => {
        console.log("message  : " + Result.message)
        if (Result.message === "skullStripped") {
          console.log("working");
        }
      });*/
  };
  handleURL = () => {
    if (this.state.allow === true) {
      $("#img-stripped1").click(function () {
        //sleep(1000);
        $("#img-stripped").attr("src", "img/back/withoutskull.gif");
      });
      $("#img-segmented1").click(function () {
        // sleep(1000);
        $("#img-segmented").attr("src", "img/seg.gif");
      });
    }
  };
  render() {
    $(document).ready(function () {
      function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if (new Date().getTime() - start > milliseconds) {
            break;
          }
        }
      }
      $(document).on("change", ".btn-file :file", function () {
        var input = $(this),
          label = input.val().replace(/\\/g, "/").replace(/.*\//, "");
        input.trigger("fileselect", [label]);
      });

      $(".btn-file :file").on("fileselect", function (event, label) {
        var input = $(this).parents(".input-group").find(":text"),
          log = label;

        if (input.length) {
          input.val(log);
        } else {
          if (log) alert(log);
        }
      });
      /*async function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            $("#img-upload").attr("src", e.target.result);
          };

          reader.readAsDataURL(input.files[0]);
        }
      }*/

      $("#imgInp").click(function () {
        //sleep(1000);
      });
    });

    return (
      <div>
        {
          <LoadingOverlay
            active={this.state.isactive}
            spinner={
              <ScaleLoader
                color={"#FFFFFF"}
                height={100}
                width={20}
                radius={20}
                margin={12}
              />
            }
            text="Loading your content..."
          ></LoadingOverlay>
        }
        <div className="col-sm-12 py-3 pb-5 ">
          <div class="container col-sm-12 ">
            <div class="row py-4">
              <div class="col-lg-6 mx-auto">
                {/* <!-- Upload image input--> */}
                <div class="form-group">
                  <label>Upload MRI</label>
                  <div class="input-group">
                    <span class="input-group-btn">
                      <span class="btn btn-light btn-file">
                        Upload...{" "}
                        <input
                          type="file"
                          id="imgInp"
                          accept=".mnc"
                          onChange={this.handlefile}
                        />
                      </span>
                    </span>
                    <input type="text" class="form-control" readonly />
                    <button onClick={this.uploadFile}>upload file</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="stepwizard  col-sm-12 bt-5">
              <div class="stepwizard-row setup-panel ">
                <div class="stepwizard-step">
                  <a
                    href="#step-1"
                    type="button"
                    class="btn btn-light btn-circle"
                  >
                    1
                  </a>
                  <p>Uploaded Image</p>

                  {/* <!-- Uploaded image area--> */}
                  <button className="btn btn-light" id="img-upload1 bl-1">
                    Img with skull
                  </button>
                  <img
                    id="img-upload"
                    alt=""
                    class="rounded img-responsive"
                    width="100%"
                    src=""
                  />
                </div>
                <div class="stepwizard-step">
                  <a
                    href="#step-2"
                    type="button"
                    class="btn btn-light btn-circle"
                  >
                    2
                  </a>
                  <p>Skull Stripped Img</p>
                  {/* <!-- Skull Stripped image area--> */}

                  <button
                    className="btn btn-light bl-1"
                    id="img-stripped1"
                    onClick={this.handleURL}
                  >
                    SkullStripped Img
                  </button>
                  {this.state.loading ? <Loader /> : null}
                  <img
                    id="img-stripped"
                    alt=""
                    class="rounded img-responsive"
                    src=""
                    width="100%"
                  />
                </div>
                <div class="stepwizard-step">
                  <a
                    href="#step-3"
                    type="button"
                    class="btn btn-light btn-circle"
                  >
                    3
                  </a>
                  <p>Segmented Img</p>
                  {/* <!-- Segmented image area--> */}
                  <button className="btn btn-light" id="img-segmented1">
                    Segmented Img
                  </button>
                  <img
                    id="img-segmented"
                    alt=""
                    class="rounded img-responsive"
                    src=""
                  />
                </div>
                <div class="stepwizard-step">
                  <a
                    href="#step-3"
                    type="button"
                    class="btn btn-light btn-circle"
                  >
                    4
                  </a>
                  <p>Prognosis</p>
                  <div className="mt-4">
                    {" "}
                    <h4>128 days</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FileUpload;
