import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
//import pic from "../componets/assests/img/team/1.jpg";
import pic from "../componets/assests/img/team/logo.png";
import { Link, Redirect } from "react-router-dom";
//C:\Users\DELL\Desktop\React Work\demoProject\demosite\public\img\team\logo.png
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
    };
  }
  printDocument() {
    // setTimeout(() => this.setState({ navigate: true }), 20);
    const input = document.getElementById("output");

    html2canvas(input, { quality: 1, scale: 1 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      // window.open(pdf.output("bloburl"), "Loading");
      const pdf = new jsPDF({ quality: 1, scale: 1, orientation: "landscape" });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "Jpeg", 0, 0, pdfWidth, pdfHeight);
      window.open(pdf.output("bloburl"), "Loading");
      pdf.save("test.pdf");
    });

    /*
    const input = document.getElementById("output");
    html2canvas(input).then((canvas) => {
      var imgWidth = 200;
      var pageHeight = 290;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      var position = 0;
      var heightLeft = imgHeight;
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
        /*
    var doc = new jsPDF("p", "pt");

    doc.text(20, 20, "This is the first title.");

    doc.setFont("helvetica");
    doc.setFontType("normal");
    doc.text(20, 60, "This is the second title.");

    doc.setFont("helvetica");
    doc.setFontType("normal");
    doc.text(20, 100, "This is the thrid title.");

    doc.save("demo.pdf");*/
  }

  render() {
    if (this.state.navigate) {
      return <Redirect to="/doctorportal" />;
    }
    setTimeout(() => this.setState({ navigate: true }), 20);
    return (
      <div>
        <div id="output" onLoad={this.printDocument} style={{ color: "black" }}>
          <div class="container ">
            <div class="bg-light">
              <div class="pt-5 px-3 text-center">
                <img
                  class="d-inline mx-auto mb-4"
                  src={pic}
                  alt=""
                  width="72"
                  height="72"
                ></img>
                <h1 class="d-inline text-center mx-4 text-center">
                  Medical Imaging and Diagnostic System
                </h1>{" "}
                <br /> <br />
              </div>
              <div>
                <table class="table text-center mb-5">
                  <thead>
                    <tr>
                      <th scope="col">Report number</th>
                      <th scope="col">Patient Name</th>
                      <th scope="col">Address </th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "black" }}>
                    <tr>
                      <th scope="row">1234</th>
                      <td>Muhammad Umar</td>
                      <td>House 123, Street abc, Rwp</td>
                      <td>August 24, 2020</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 class="text-center mt-5">Medical Report</h3>
              <table class="table table-active text-center">
                <thead>
                  <tr>
                    <th scope="col">Test</th>
                    <th scope="col">Results</th>
                    <th scope="col">unit </th>
                    <th scope="col">Reference Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Skull Striping</th>
                    <td>0.9</td>
                    <td>U/L</td>
                    <td>
                      Adult 0.1-1.2 <br /> children 0.2-1
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Segmentation</th>
                    <td>1.2</td>
                    <td>U/L</td>
                    <td>
                      Adult 0.4-1.9 <br /> children 0.5-2
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Prognosis</th>
                    <td>2</td>
                    <td>Years</td>
                    <td>
                      Adult 1.5-3 <br /> children 2-5
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <footer class="my-5 text-muted text-center text-small">
              <hr style={{ height: "100%" }} />
              <p class="mb-1" style={{ color: "black" }}>
                This is a computer generated report and should be signed by a
                radiologist
              </p>
              <hr style={{ height: "100%" }} />
              <p class="my-0" style={{ color: "black" }}>
                Dr. Muhammad Umar
              </p>
              <p class="my-0" style={{ color: "black" }}>
                MBBS, Mphil, FCPS
              </p>
              <p class="my-0" style={{ color: "black" }}>
                Radiologist
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
export default Report;
