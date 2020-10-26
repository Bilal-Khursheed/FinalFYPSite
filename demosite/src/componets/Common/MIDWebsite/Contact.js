import React, { Component } from "react";
import Field from "./Field";
import axios from "axios";

const fields = {
  section: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your Name",
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        placeholder: "Your email",
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Your Phone Number",
      },
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "text",
        placeholder: "Type your message",
      },
    ],
  ],
};

const colore = {
  color: "#fec503",
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  handleSubmit = async (e) => {
    console.log("name" + this.state.name);
    console.log("email" + this.state.email);
    e.preventDefault();
    //this will assign these variable values from this.state
    const { name, email, phone, message } = this.state;
    console.log("name after assigning" + name);
    //this will send data to rest api then api will send mail with given data to admin
    const form = await axios.post("/api/form", {
      name,
      email,
      phone,
      message,
    });
    alert("your message is resived");
  };

  render() {
    return (
      <div>
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2
                  className="section-heading text-uppercase pa4-ns pb0"
                  style={colore}
                >
                  Contact Us
                </h2>
                <h3 className="section-subheading text-muted">
                  Contact Us For More Information
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form //this will call api with method post
                  method="post"
                  //handleSubmit will call api and will send data to backend
                  onSubmit={this.handleSubmit}
                  id="contactForm"
                  name="sentMessage"
                  novalidate="novalidate"
                >
                  <div className="row">
                    {fields.section.map((section, sectionIndex) => {
                      console.log(
                        "Rendering Section ",
                        sectionIndex,
                        "with",
                        section
                      );
                      return (
                        <div className="col-md-6" key={sectionIndex}>
                          {section.map((field, i) => {
                            return (
                              <Field
                                {...field}
                                key={i}
                                value={this.state[field.name]}
                                onChange={(e) =>
                                  this.setState({
                                    [field.name]: e.target.value,
                                  })
                                }
                              />
                            );
                          })}
                        </div>
                      );
                    })}
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button
                        id="sendMessageButton"
                        className="btn btn-outline-warning btn-xl text-uppercase ma4-ns"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
