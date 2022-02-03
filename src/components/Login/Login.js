import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../Contex/UserAuthContex";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginHeader from "./LoginHeader";
import Axios from "axios";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError("Please Enter The Correct Login Credentials");
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  const approvedLogin = (e) => {
    Axios.post("http://localhost:3001/create", {
      email: email,
      password: password,
    }).then((e) => {
      console.log("success");
    });
  };

  return (
    <>
    <LoginHeader />
    <div className="login">
         <div className="log">
         <div className="login-container">
         <h2 className="mb-3">Login Details</h2>
         <div className="p-4 box">
         {error && <Alert variant="danger">{error}</Alert>}
         <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Email</label>
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <label>Password</label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
                <button className="login-btn" onClick={approvedLogin} type="submit">
                       LogIn
                </button>
          </div>
        </Form>
        <hr />
        <div>
          {/* <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          /> */}
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
         </div>
         </div>
    </div>
    </>
  );
};

export default Login;