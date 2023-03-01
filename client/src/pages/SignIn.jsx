import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaLock,
  FaTwitterSquare,
  FaUser,
} from "react-icons/fa";

const SignIn = () => {
  const onLogin = () => {};

  return (
    <div className="login">
      <div className="lgn-box">
        <div className="vecImage">
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "80%", height: "auto" }}
              src="../static/signin-image.jpg"
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
            <a href="/signUp">
              <span style={{ textDecorationLine: "underline" }}>
                Create a account
              </span>
            </a>
          </div>
        </div>
        <div className="signIn">
          <div
            style={{
              fontSize: "5vh",
              fontFamily: "sans-serif",
              fontWeight: "700",
              marginTop: "6vh",
              marginLeft: "1vw",
            }}
          >
            Sign In
          </div>
          <div className="lgn-form">
            <form action="" method="post">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "7% 0",
                }}
              >
        
                  <FaUser
                    style={{
                      maxWidth: "20%",
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
              <div style={{ marginTop: "5vh",textAlign:'center' }}>
                <button type="submit" className="btn" onClick={onLogin}>
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div style={{ paddingBottom: "9vh" }} className="auth">
            <div>Or login with</div>
            <div>
              <FaFacebookSquare />
            </div>
            <div>
              <FaTwitterSquare />
            </div>
            <div>
              <FaGooglePlusSquare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
