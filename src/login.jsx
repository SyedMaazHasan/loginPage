import React, { Component } from "react";
import validator from "validator";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "bootstrap/dist/css/bootstrap.css";
class Form extends Component {
  state = {
    Email: "",
    Password: "",
    error: "",
    login: false
  };

  change = e => {
    this.setState({ error: "" });
    e.preventDefault();
    const key = e.currentTarget.id;
    this.setState({ [key]: e.currentTarget.value });
  };
  submit = async e => {
    e.preventDefault();

    const result = validator.isEmail(this.state.Email);
    console.log(result);
    if (result === false) {
      this.setState({ error: "Please enter a valid email id " });
      return 0;
    }
    if (this.state.Password === "") {
      toast.error("please enter password");
      return 0;
    } else {
      this.setState({ error: "" });
    }

    if (
      this.state.Email === "hruday@gmail.com" &&
      this.state.Password === "hruday123"
    ) {
      console.log("login successful");
      setTimeout(() => {
        this.props.history.push("/Dashboard");
      }, 3000);

      toast.success("Congratulations.. Now Logging in", {
        autoClose: 1000
      });
    } else {
      toast.error("wrong credentials");
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        {this.state.error && (
          <ToastContainer position="top-center">
            {toast.error(this.state.error)}
          </ToastContainer>
        )}

        <form>
          <br />
          <div className="container">
            <h1>login page</h1>
            <div className="row">
              <div
                className="col-sm-5"
                style={{
                  border: "3px solid #f1f1f1",
                  "border-radius": "25px",
                  padding: "20px"
                }}
              >
                <div className="form-group">
                  <label htmlFor="Email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={this.change}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    placeholder="Password"
                    onChange={this.change}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.submit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
