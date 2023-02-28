import { FaEnvelope, FaLock, FaLockOpen, FaUser } from "react-icons/fa";

const SignUp = () => {
  const onRegister = () => {};

  return (
    <div className="login">
      <div className="lgn-box">
        <div className="signUp">
          <div
            style={{
              fontSize: "5vh",
              fontFamily: "sans-serif",
              fontWeight: "700",
              marginTop: "6vh",
              marginLeft: "1vw",
            }}
          >
            Sign Up
          </div>
          <div className="lgn-form">
            <form action="" method="post">
              <div
                style={{
                  margin: "7% 0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaUser
                  style={{
                    maxWidth: "20%",
                    paddingTop: "1%",
                  }}
                />
                <input
                  style={{ borderBottom: "1px solid #999" }}
                  className="lgn-input"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div
                style={{
                  margin: "7% 0",
                  display: "flex",
                  justifyContent:"space-between" ,
                  alignItems: "center",
                }}
              >
                <FaEnvelope
                  style={{
                    maxWidth: "20%",
                    paddingTop: "1%",
                  }}
                />
                <input
                  style={{ borderBottom: "1px solid #999" }}
                  className="lgn-input"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <div
                style={{
                  margin: "7% 0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaLock
                  style={{
                    maxWidth: "20%",
                    paddingTop: "1%",
                  }}
                />
                <input
                  style={{ borderBottom: "1px solid #999" }}
                  className="lgn-input"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div
                style={{
                  margin: "7% 0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaLockOpen
                  style={{
                    maxWidth: "20%",
                    paddingTop: "1%",
                  }}
                />
                <input
                  style={{ borderBottom: "1px solid #999" }}
                  className="lgn-input"
                  type="password"
                  placeholder="Repeat Your Password"
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "10vh",
                  marginBottom: "5vh",
                }}
              >
                <button type="submit" className="btn" onClick={onRegister}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="vecImage">
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "80%", height: "auto" }}
              src="../static/signup-image.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              textAlign: "center",
              alignSelf: "center",
              marginTop: "3vh",
            }}
          >
            <a href="/signin">
              <span style={{ textDecorationLine: "underline" }}>
                Already a member
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
