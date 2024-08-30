import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LastName from "../components/LastName";
import CreatePasswordLabel from "../components/CreatePasswordLabel";
import "./GetStartedRegister.css";

const GetStartedRegister = () => {
  const navigate = useNavigate();

  const onLeftArrowClick = useCallback(() => {
    navigate("/get-started-sign-in");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/get-started-sign-in");
  }, [navigate]);

  return (
    <div className="get-started-register">
      <section className="rectangle-group">
        <div className="frame-item" />
        <div className="registration-frame" />
        <h1 className="visionme">VisionMe</h1>
        <form className="first-frame">
          <div className="first-name-email-address-frame">
            <div className="first-name">
              <div className="email-address">
                <div className="sign-in-text" onClick={onSignInTextClick}>
                  <h3 className="sign-in">Sign In</h3>
                </div>
                <div className="last-name-frame">
                  <LastName />
                </div>
              </div>
            </div>
            <div className="confirm-password-text">
              <button className="create-password-frame">
                <div className="create-password-text">
                  <div className="register">
                    <p className="register1">Register</p>
                  </div>
                </div>
              </button>
              <div className="continue-text">
                <div className="last-name">Last Name</div>
                <input className="back-button-frame" type="text" />
              </div>
            </div>
          </div>
          <div className="confirmation-frame">
            <input className="input-frame" type="text" />
          </div>
          <div className="confirm-password">Confirm Password</div>
          <div className="register-label">
            <CreatePasswordLabel onLeftArrowClick={onLeftArrowClick} />
          </div>
        </form>
      </section>
    </div>
  );
};

export default GetStartedRegister;
