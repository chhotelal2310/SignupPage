import React from "react";
import "../styles/sign.css";

const Signup = () => {
  return (
    <>
      <div className="Container">
        <div className="signupContainer">
          <h1>Linked in</h1>
          <h2>Make the most of your professional life</h2>

          <div className="SignupFormContainer">
            <div className="SingnupContainerDetails">
              <form action="" className="formContainer">
                <label htmlFor="fname">First name</label>
                <br />
                <input type="text" id="fname" />
                <br />
                <label htmlFor="lname">Last name</label>
                <br />
                <input type="text" id="lname" />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" id="email" />
                <br />
                <label htmlFor="name">Password (6 more characters)</label>
                <br />
                <input type="password" id="password" />
              </form>
            </div>

            <p>
              By clicking Join now, you agree to Linkdedin's User Agreement
              Privacy Policy and Cookie Policy
            </p>
            <button className="joinContainer">Join now</button>
            <div className="dividerOR">
              <div></div>
              <span>or</span>
              <div></div>
            </div>

            <button className="facebookContainer">
              Continue with Facebook
            </button>
            <p className="footerText" style={{ fontSize: "16px" }}>
              Already on Linkedin? <span>Sign in</span>
            </p>
          </div>

          <p style={{ marginTop: "10px", color: "white" }}>
            Linkedin Coporation @ 2016
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
