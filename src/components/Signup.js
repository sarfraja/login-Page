import React from "react";
import './signup.css'

class SignUp extends React.Component {
  render() {
    return (
        <div>
      <form className="form">
          <div className="input-container">
        <label className="lable" for="fname">First Name</label>
        <input className="input" type="text" placeholder="First name" required/>
        </div>
        <div className="input-container">
        <label className="lable" for="sname">Last Name</label>
        <input className="input" type="text" placeholder="Last name" required/>
        </div>
        <div className="input-container">
        <label className="lable" for="email">Email Address</label>
        <input className="input" type="text" placeholder="Email Address" required/>
        </div>
        <div className="input-container">
        <label className="lable" for="password">Password</label>
        <input className="input" type="text" placeholder="Password" required/>
        </div>
        <a href="/signup"><button type="submit" id="login-btn">
          Signup
        </button></a>
      </form>

      <p className="signup-label">
          Already have an account?{" "}
          <a href="/" className="link">
             Login
          </a>
        </p>
        </div>
    );
  }
}

export default SignUp;
