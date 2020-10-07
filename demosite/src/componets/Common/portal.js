import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../auth/loginAuth";
import $ from "jquery";
const SubStyle = {
  color: "#fec503",
};

class portal extends Component {
  render() {
    $(document).ready(function () {
      var navListItems = $("div.setup-panel div a"),
        allWells = $(".setup-content"),
        allNextBtn = $(".nextBtn"),
        allPrevBtn = $(".prevBtn");

      allWells.hide();

      navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr("href")),
          $item = $(this);

        if (!$item.hasClass("disabled")) {
          navListItems.removeClass("btn-primary").addClass("btn-default");
          $item.addClass("btn-primary");
          allWells.hide();
          $target.show();
          $target.find("input:eq(0)").focus();
        }
      });

      allPrevBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          prevStepWizard = $(
            'div.setup-panel div a[href="#' + curStepBtn + '"]'
          )
            .parent()
            .prev()
            .children("a");

        prevStepWizard.removeAttr("disabled").trigger("click");
      });

      $("div.setup-panel div a.btn-primary").trigger("click");
    });



    return (
      <body className="sb-nav-fixed">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <Link className="navbar-brand" to={this.props.portallink}>
            {this.props.PortalName}
          </Link>
          {/* <button
            className="btn btn-link btn-sm order-1 order-lg-0"
            id="sidebarToggle"
            to="#"
          >
            <i className="fas fa-bars"></i>
          </button> */}

          <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>

          <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown">
              {/* <Link
                className="nav-link dropdown-toggle"
                id="userDropdown"
                to="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-user fa-fw"></i>
              </Link> */}
              <div
                // className="dropdown-menu dropdown-menu-right"
                // aria-labelledby="userDropdown"
              >
                {/* <Link className="dropdown-item" to="#">
                  Settings
                </Link>
                <Link className="dropdown-item" to="#">
                  Activity Log
                </Link> */}
                {/* <div className="dropdown-divider"></div> */}
                <Link
                  className="navbar-nav ml-auto text-light"
                  to="/login"
                  onClick={Auth.logout}
                >
                  <h5>Logout</h5>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              className="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <div className="sb-sidenav-menu">
                <div className="nav">
                  {/* Heading 1 */}
                  <div className="sb-sidenav-menu-heading">
                    {this.props.mainoption1}
                  </div>
                  <Link className="nav-link" to={this.props.linksmall1}>
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-tachometer-alt"></i>
                    </div>
                    {/* Small Heading 01 of 1 */}
                    {this.props.smalloption1}
                  </Link>

                  {this.props.showOption2 && (
                    <Link className="nav-link" to={this.props.linksmall2}>
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-columns"></i>
                      </div>
                      {/* Small Heading 02 of 1 */}
                      {this.props.smalloption2}
                    </Link>
                  )}

                  {this.props.showOption3 && (
                    <Link className="nav-link" to={this.props.linksmall3}>
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-tachometer-alt"></i>
                      </div>
                      {/* Small Heading 03 of 1 */}
                      {this.props.smalloption3}
                    </Link>
                  )}

                  {/* Heading 02 */}
                  <div className="sb-sidenav-menu-heading">
                    {this.props.mainoption2}
                  </div>
                  {/* Small Heading 1 on 2 */}
                  {this.props.showOption4 && (
                    <Link className="nav-link" to={this.props.linksmall4}>
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-columns"></i>
                      </div>
                      {this.props.smalloption4}
                    </Link>
                  )}

                  {/* Small Heading 2 on 2 */}
                  {this.props.showOption5 && (
                    <Link className="nav-link" to={this.props.linksmall5}>
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-book-open"></i>
                      </div>
                      {this.props.smalloption5}
                    </Link>
                  )}

                  {/* Small Heading 3 on 2 */}
                  {this.props.showOption6 && (
                    <Link
                      className="nav-link collapsed"
                      to={this.props.linksmall6}
                    >
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-book-open"></i>
                      </div>
                      {this.props.smalloption6}
                    </Link>
                  )}

                  {/* Main Heading 3 */}
                  <div className="sb-sidenav-menu-heading">
                    {this.props.mainoption3}
                  </div>
                  {/* Small Heading 1 on 3 */}
                  {this.props.showOption7 && (
                    <Link className="nav-link" to={this.props.linksmall7}>
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-chart-area"></i>
                      </div>
                      {this.props.smalloption7}
                    </Link>
                  )}
                  {/* Small Heading 2 on 3 */}
                  {this.props.showOption8 && (
                    <Link className="nav-link" to={this.props.linksmall8}>
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-table"></i>
                      </div>
                      {this.props.smalloption8}
                    </Link>
                  )}
                </div>
              </div>
              {/* <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                {this.props.PersonName}
              </div> */}
            </nav>
          </div>
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid">
                <h1 className="mt-4">{this.props.PersonName}</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <Link to={this.props.portallink}>
                      {this.props.PortalName}
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    {this.props.SideBarName}
                  </li>
                </ol>

                {/* There is body of the window portal */}

                {this.props.uploadImage && (
                  <div className="card mb-4 w-100">
                    <div className="card-body">
                      {/* <h1 className="tc mt6-ns f1 lh-title" style={SubStyle}>
                      BRAIN TUMOR
                    </h1> */}
                      <div class="form-group">
                        <label for="name">
                          Email Or ID Card Number of Patient:
                        </label>
                        <input
                          type="text"
                          class="form-control col-sm-4"
                          id="name"
                          placeholder="Enter Email or Id card"
                          name="name"
                          required
                        />
                      </div>
                      <div className="tc dib col-xl-6 col-sm-8 mb-8">
                        <div className="tc bg-white rounded shadow-sm py-5 px-4 tc ma4-ns">
                          <h1 className="tc mb-0">
                            <input
                              type="file"
                              id="file"
                              onChange={this.fileChangedHandler}
                            />
                          </h1>
                        </div>

                        <h3 className="mb-0">
                          <Link to="/report">
                            <button
                              type="button"
                              className="ma4 pa3-ns btn btn-outline-warning tc"
                            >
                              Generate Report
                            </button>
                          </Link>
                        </h3>
                      </div>
                    </div>
                    {this.props.children}
                  </div>
                )}
                <div className="card mb-4 w-100">
                  <div className="card-header">
                    {/* Start of add Doctor Patient */}
                    {this.props.addpatdoc && (
                      <div class="container bg-dark pb-5 pt-5">
                        <h2>Add {this.props.addtype}</h2>
                        <p>
                          Add details of {this.props.addtype}, you want to add
                        </p>
                        <form class="form" action="/action_page.php">
                          <div class="form-group">
                            <label for="name">Name:</label>
                            <input
                              type="text"
                              class="form-control col-sm-4"
                              id="name"
                              placeholder="Enter name"
                              name="name"
                            />
                          </div>

                          {/* <div class="form-group">
                            <label for="username">User Name:</label>
                            <input
                              type="text"
                              class="form-control col-sm-4"
                              id="username"
                              placeholder="Enter Username"
                              name="username"
                            />
                          </div> */}

                          <div class="form-group">
                            <label for="email">Email:</label>
                            <input
                              type="email"
                              class="form-control col-sm-4"
                              id="email"
                              placeholder="Enter email"
                              name="email"
                            />
                          </div>

                          <div class="form-group">
                            <label for="Idcard">Id Card Number:</label>
                            <input
                              type="Number"
                              class="form-control col-sm-4"
                              id="Idcard"
                              placeholder="Enter Id card Number"
                              name="Idcard"
                            />
                          </div>

                          <div class="form-group">
                            <label for="Address">Address:</label>
                            <input
                              type="text"
                              class="form-control col-sm-4"
                              id="Address"
                              placeholder="Enter Address"
                              name="Address"
                            />
                          </div>

                          {/* <div class="checkbox">
                          <label>
                            <input type="checkbox" name="remember" /> Remember
                            me
                          </label>
                        </div> */}
                          <button
                            type="submit"
                            class="btn btn-default text-primary bg-light"
                          >
                            Add {this.props.addtype}
                          </button>
                        </form>
                      </div>
                    )}
                    {/* End Of add Doctor Patient */}

                    {/* Start of Delete Doctor / Patient */}
                    {this.props.delpatdoc && (
                      <div class="container bg-dark pb-5 pt-5">
                        <h2>Delete {this.props.addtype}</h2>
                        <p>
                          Add Email or CNIC of {this.props.addtype}, you want to
                          delete
                        </p>
                        <form class="form" action="/action_page.php">
                          <div class="form-group">
                            <label for="email">Email:</label>
                            <input
                              type="email"
                              class="form-control col-sm-4"
                              id="email"
                              placeholder="Enter email"
                              name="email"
                            />
                          </div>

                          <div class="form-group">
                            <label for="Idcard">Id Card Number:</label>
                            <input
                              type="Number"
                              class="form-control col-sm-4"
                              id="Idcard"
                              placeholder="Enter Id card Number"
                              name="Idcard"
                            />
                          </div>

                          {/* <div class="checkbox">
                          <label>
                            <input type="checkbox" name="remember" /> Remember
                            me
                          </label>
                        </div> */}
                          <button
                            type="submit"
                            class="btn btn-default text-primary bg-light"
                          >
                            Delete {this.props.addtype}
                          </button>
                        </form>
                      </div>
                    )}
                    {/* End Of Delete Doctor Patient */}

                    {/* Start Of Doc Patient History */}
                    {this.props.history1 && (
                      <div>
                        <h2>{this.props.addtype} List</h2>
                        <table class="table table-hover table-dark">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Id Card Number</th>
                              <th scope="col">Address</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Muhammad Umar</td>
                              <td>umarnazaket@gmail.com</td>
                              <td>37405-1234533-7</td>
                              <td>Dakh khana bees bagla, Bagh, AJK</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Bilal Khursheed</td>
                              <td>bilalkhursheed@gmail.com</td>
                              <td>82101-5434355-6</td>
                              <td>gawo chak 18, Mirpur, AJK</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td colspan="1">Ahmed Khan</td>
                              <td>Akhan@gmail.com</td>
                              <td>12345-6789012-8</td>
                              <td>
                                House No. 123, Mohalla 234, Satellite Town, RWP
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                    {/* End Of Doc/Patient History */}

                    {/* Start of Get Report */}
                    {this.props.getReport && (
                      <div class="container bg-dark pb-5 pt-5">
                        <h2>Report</h2>
                        <p>Add ID of report You want to get.</p>
                        <form class="form" action="/action_page.php">
                          <div class="form-group">
                            <label for="reportid">Report ID:</label>
                            <input
                              type="number"
                              class="form-control col-sm-4"
                              id="reportid"
                              placeholder="Enter Report ID"
                              name="reportid"
                            />
                          </div>

                          {/* <div class="checkbox">
                          <label>
                            <input type="checkbox" name="remember" /> Remember
                            me
                          </label>
                        </div> */}
                          <button
                            type="submit"
                            class="btn btn-default text-primary bg-light"
                          >
                            Get Report
                          </button>
                        </form>
                      </div>
                    )}
                    {/* End Of Get Report */}

                    {/* Start Of Single Patient History */}
                    {this.props.history2 && (
                      <div>
                        <h2>{this.props.addtype} List</h2>
                        <table class="table table-hover table-dark">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Report ID</th>
                              <th scope="col">Date</th>
                              <th scope="col">Hospital</th>
                              <th scope="col">Doctor Name</th>
                              <th scope="col">View Report</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>12345</td>
                              <td>10, january, 2020</td>
                              <td>PIMS, Islamabad</td>
                              <td>Dr. Bilal Kashmiri</td>
                              <td>
                                <button type="button" class="btn btn-primary">
                                  <i class="far fa-eye"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>23423</td>
                              <td>20, january, 2020</td>
                              <td>Al-Shifa, Islamabad</td>
                              <td>Dr. Muhammad Umar</td>
                              <td>
                                <button type="button" class="btn btn-primary">
                                  <i class="far fa-eye"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td colspan="1">12378</td>
                              <td>22, April, 2020</td>
                              <td>Shoukat Khanam</td>
                              <td>Dr. Uzair Iqbal Janjua</td>
                              <td>
                                <button type="button" class="btn btn-primary">
                                  <i class="far fa-eye"></i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                    {/* End Of Single Patient History */}

                    {/* Change Account Info */}
                    {this.props.changeAccInfo && (
                      <div class="container">
                        <div class="stepwizard col-md-offset-3">
                          <div class="stepwizard-row setup-panel">
                            <div class="stepwizard-step">
                              <a
                                href="#step-1"
                                type="button"
                                class="btn btn-light btn-circle"
                              >
                                1
                              </a>
                              <p>Change Email</p>
                            </div>
                            <div class="stepwizard-step">
                              <a
                                href="#step-2"
                                type="button"
                                class="btn btn-light btn-circle"
                                disabled="disabled"
                              >
                                2
                              </a>
                              <p>Change Address</p>
                            </div>
                            <div class="stepwizard-step">
                              <a
                                href="#step-3"
                                type="button"
                                class="btn btn-light btn-circle"
                                disabled="disabled"
                              >
                                3
                              </a>
                              <p>Change Password</p>
                            </div>
                          </div>
                        </div>

                        <form role="form" action="" method="post">
                          <div class="row setup-content" id="step-1">
                            <div class="col-xs-6 col-md-offset-3">
                              <div class="col-md-12">
                                <h3> Change Email</h3>
                                <div class="form-group">
                                  <label class="control-label">Old Email</label>
                                  <input
                                    maxlength="100"
                                    type="email"
                                    required="required"
                                    class="form-control"
                                    placeholder="Enter Old Email"
                                  />
                                </div>
                                <div class="form-group">
                                  <label class="control-label">New Email</label>
                                  <input
                                    maxlength="100"
                                    type="email"
                                    required="required"
                                    class="form-control"
                                    placeholder="Enter New Email"
                                  />
                                </div>
                                <div class="form-group">
                                  <label class="control-label">Password</label>
                                  <input
                                    maxlength="100"
                                    type="password"
                                    required="required"
                                    class="form-control"
                                    placeholder="Enter Password"
                                  />
                                </div>

                                <button
                                  class="btn btn-primary btn-lg pull-right"
                                  type="button"
                                >
                                  Change Email
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="row setup-content" id="step-2">
                            <div class="col-xs-6 col-md-offset-3">
                              <div class="col-md-12">
                                <h3> Change Address</h3>
                                <div class="form-group">
                                  <label class="control-label">
                                    Add Address
                                  </label>
                                  <input
                                    maxlength="300"
                                    type="email"
                                    required="required"
                                    class="form-control"
                                    placeholder="Enter Address"
                                  />
                                </div>

                                <div class="form-group">
                                  <label class="control-label">Password</label>
                                  <input
                                    maxlength="100"
                                    type="password"
                                    required="required"
                                    class="form-control"
                                    placeholder="Enter Password"
                                  />
                                </div>

                                <button
                                  class="btn btn-primary btn-lg pull-right"
                                  type="button"
                                >
                                  Change Address
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="row setup-content" id="step-3">
                            <div class="col-xs-6 col-md-offset-3">
                              <div class="col-md-12">
                                <h3> Change Password</h3>
                                <div class="form-group">
                                  <label class="control-label">
                                    Old Password
                                  </label>
                                  <input
                                    maxlength="100"
                                    type="password"
                                    required="required"
                                    class="form-control"
                                    placeholder="Enter Old Password"
                                  />
                                </div>
                                <div class="form-group">
                                  <label class="control-label">
                                    New Password
                                  </label>
                                  <input
                                    maxlength="100"
                                    type="password"
                                    required="required"
                                    class="form-control"
                                    placeholder="Enter New Password"
                                  />
                                </div>
                                <div class="form-group">
                                  <label class="control-label">
                                    Confirm Password
                                  </label>
                                  <input
                                    maxlength="100"
                                    type="password"
                                    required="required"
                                    class="form-control"
                                    placeholder="Confirm Password"
                                  />
                                </div>

                                <button
                                  class="btn btn-primary btn-lg pull-right"
                                  type="button"
                                >
                                  Change Password
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    )}
                    {/* End Of Change Account Info */}
                  </div>
                  <div className="card-body"></div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    );
  }
}

export default portal;
