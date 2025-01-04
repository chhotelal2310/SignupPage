import React from "react";
import "../styles/sign.css";

const Signup = () => {
  return (
    <>
      <div className="Container">
        <div className="signupContainer">
          <h1>Linked in</h1>
          <h2>Make the most of your professional life</h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "white",
              width: "350px",
              height: "400px",
              padding: 20,
            }}
          >
            <div style={{ width: "100%" }}>
              <form action="">
                <label htmlFor="fname">First name</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  style={{ width: "100%", marginBottom: "15px", height: 26 }}
                />
                <br />
                <label htmlFor="lname">Last name</label>
                <br />
                <input
                  type="text"
                  id="lname"
                  style={{ width: "100%", marginBottom: "15px", height: 26 }}
                />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  style={{ width: "100%", marginBottom: "15px", height: 26 }}
                />
                <br />
                <label htmlFor="name">Password (6 more characters)</label>
                <br />
                <input
                  type="password"
                  id="password"
                  style={{ width: "100%", marginBottom: "15px", height: 26 }}
                />
              </form>
            </div>

            <p>
              By clicking Join now, you agree to Linkdedin's User Agreement
              Privacy Policy and Cookie Policy
            </p>
            <button>Join now</button>
            <div>or</div>

            <button>Continue with Facebook</button>
            <p>Already on Linkedin? Sign in</p>
          </div>
          <p>Linkedin Coporation @ 2016</p>
        </div>
      </div>
    </>
  );
};

export default Signup;
