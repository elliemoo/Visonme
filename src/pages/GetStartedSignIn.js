import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PasswordFrame from "../components/PasswordFrame";
import "./GetStartedSignIn.css";

const GetStartedSignIn = () => {
  const navigate = useNavigate();

  const onRegisterTextContainerClick = useCallback(() => {
    navigate("/get-started-register");
  }, [navigate]);

  const onContinueButtonClick = useCallback(() => {
    navigate("/personal-information");
  }, [navigate]);

  return (
    <div className="get-started-sign-in">
      <section className="group-section">
        <div className="rectangle-div" />
        <div className="main-frame" />
        <h1 className="visionme2">VisionMe</h1>
        <form className="content-frame">
          <div className="email-address-frame">
            <button className="password-frame">
              <div className="sign-in1">Sign In</div>
            </button>
            <div className="registration-frames-group">
              <div
                className="register-text"
                onClick={onRegisterTextContainerClick}
              >
                <div className="register-wrapper">
                  <div className="register2">
                    <p className="register3">Register</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-frame">
            <div className="email-address-frame1">
              <PasswordFrame
                emailAddress="Email Address"
                breeje7gmailcomPlaceholde="breeje7@gmail.com"
              />
              <PasswordFrame
                emailAddress="Password"
                breeje7gmailcomPlaceholde="**********"
                propPadding="0px 0px var(--padding-xs)"
                propWidth="85px"
              />
              <button
                className="continue-button"
                onClick={onContinueButtonClick}
              >
                <div className="continue">Continue</div>
                <img
                  className="arrow-arrow-left-lg"
                  alt=""
                  src="/arrow--arrow-left-lg.svg"
                />
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default GetStartedSignIn;
