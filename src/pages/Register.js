import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

function Register() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    error_list: {},
  });

  const onInputChange = (e) => {
    setUser({
      // need to use spread syntax ...
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      confirm_password: user.confirm_password,
    };
    // create a request via AXIOS
    axios
      .post("/users/register", data)
      .then((res) => {
        swal("Success", "Registered successfully", "success");
        // to set the textbox as empty
        setUser({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirm_password: "",
          error_list: {},
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
        setUser({ ...user, error_list: err.response.data });
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Register User</h4>
            </div>
            <div className="card-body">
              <form onSubmit={onFormSubmit}>
                <div className="input-group mb-3">
                  <label htmlFor="first_name" className="input-group-text">
                    First Name
                  </label>
                  <input
                    className={`form-control ${
                      user.error_list.first_name ? "is-invalid" : ""
                    }`}
                    name="first_name"
                    id="first_name"
                    type="text"
                    onChange={onInputChange}
                    value={user.first_name}
                  />
                  <span className="invalid-feedback">
                    {user.error_list.first_name}
                  </span>
                </div>

                <div className="input-group mb-3">
                  <label htmlFor="last_name" className="input-group-text">
                    Last Name
                  </label>
                  <input
                    className={`form-control ${
                      user.error_list.last_name ? "is-invalid" : ""
                    }`}
                    name="last_name"
                    id="last_name"
                    type="text"
                    onChange={onInputChange}
                    value={user.last_name}
                  />
                  <span className="invalid-feedback">
                    {user.error_list.last_name}
                  </span>
                </div>

                <div className="input-group mb-3">
                  <label htmlFor="email" className="input-group-text">
                    Email
                  </label>
                  <input
                    className={`form-control ${
                      user.error_list.email ? "is-invalid" : ""
                    }`}
                    name="email"
                    id="email"
                    type="email"
                    onChange={onInputChange}
                    value={user.email}
                  />
                  <span className="invalid-feedback">
                    {user.error_list.email}
                  </span>
                </div>

                <div className="input-group mb-3">
                  <label htmlFor="password" className="input-group-text">
                    Password
                  </label>
                  <input
                    className={`form-control ${
                      user.error_list.password ? "is-invalid" : ""
                    }`}
                    name="password"
                    id="password"
                    type="password"
                    onChange={onInputChange}
                    value={user.password}
                  />
                  <span className="invalid-feedback">
                    {user.error_list.password}
                  </span>
                </div>
                <div className="input-group mb-3">
                  <label
                    htmlFor="confirm_password"
                    className="input-group-text"
                  >
                    Confirm Password
                  </label>
                  <input
                    className={`form-control ${
                      user.error_list.confirm_password ? "is-invalid" : ""
                    }`}
                    name="confirm_password"
                    id="confirm_password"
                    type="password"
                    onChange={onInputChange}
                    value={user.confirm_password}
                  />
                  <span className="invalid-feedback">
                    {user.error_list.confirm_password}
                  </span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary w-100"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
