import React from "react";
import TopBar from "../components/TopBar";
import Bottom from "../components/Bottom";
import { Link } from "react-router-dom";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

import { object, string } from "yup";

import { useState } from "react";
import { useEffect } from "react";
import sendUserInfoIntoServer from "../store/register-action";

import { useSelector, useDispatch } from "react-redux";


function RegisterScree() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  let userSchema = object({
    firstName: string().required("First Name is required"),
    lastName: string().required("Last Name is required"),
    email: string().email("Email is required"),
    username: string().required("Username is required"),
    password: string().password().required("Password is required"),
    confirmPassword: string()
      .password()
      .required("Confirm passwaord is required"),
  });


  const submitFormHandler = async (event) => {
    event.preventDefault();
    
  }

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  }


  return (
    <>
      <TopBar />
      <br></br>
      <MDBContainer>
        <MDBRow center>
          <MDBCol className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <h1 className="text-center">রেজিস্টার</h1>
            <form onSubmit={submitFormHandler}>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    type="text"
                    name="firstName"
                    required
                    onChange={onChangeHandler}
                    id="form3Example1"
                    label="First name"
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    type="text"
                    name="lastName"
                    required
                    onChange={onChangeHandler}
                    id="form3Example2"
                    label="Last name"
                  />
                </MDBCol>
              </MDBRow>
              <MDBInput
                className="mb-4"
                type="email"
                name="email"
                required
                onChange={onChangeHandler}
                id="form3Example3"
                label="Email address"
              />
              <MDBInput
                className="mb-4"
                type="text"
                name="username"
                onChange={onChangeHandler}
                required
                id="form3Example4"
                label="User Name"
              />
              <MDBInput
                className="mb-4"
                type="password"
                name="password"
                onChange={onChangeHandler}
                required
                id="form3Example5"
                label="Password"
              />

              <MDBInput
                className="mb-4"
                type="password"
                name="confirmPassword"
                onChange={onChangeHandler}
                required
                id="form3Example6"
                label="Confirm Password"
              />

              <MDBBtn type="submit" className="mb-4" block>
                Sign Up
              </MDBBtn>

              <div className="text-center">
                <p>
                  <Link to="/login/">or Login</Link>
                </p>

                <MDBBtn floating color="secondary" className="mx-1">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn floating color="secondary" className="mx-1">
                  <MDBIcon fab icon="google" />
                </MDBBtn>

                <MDBBtn floating color="secondary" className="mx-1">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn floating color="secondary" className="mx-1">
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <br></br>
      <Bottom />
    </>
  );
}

export default RegisterScree;
