import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onGetStartedTextClick = useCallback(() => {
    navigate("/get-started-sign-in");
  }, [navigate]);

  return (
    <footer className="landing-page">
      <div className="header-frame" />
      <section className="f-r-a-m-e6">
        <header className="rectangle">
          <div className="vision-me-label">
            <h1 className="visionme3">VisionMe</h1>
            <div className="use-cases-label">
              <div className="about">About</div>
              <div className="support">Support</div>
              <div className="use-cases">
                <span>Use</span>
                <span className="span">{` `}</span>
                <span>Cases</span>
              </div>
              <button
                className="get-started-text"
                onClick={onGetStartedTextClick}
              >
                <div className="get-started">get started</div>
              </button>
            </div>
          </div>
        </header>
        <div className="welcome-to-vision-me-frame">
          <div className="ellipse-pair" />
          <div className="welcome-to-vision-me-frame-child" />
          <div className="terms-of-use-privacy-policy-fr">
            <h1 className="welcome-to-visionme-container">
              <span>{`Welcome to `}</span>
              <span className="visionme4">VisionMe</span>
              <span>,</span>
            </h1>
            <div className="future-frame">
              <div className="helps-me-time">
                helps me time travel into a future where I can enhance my career
                goals, health and finances
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="terms-of-use-privacy-policy-fr1">
        <div className="terms-of-use">Terms of Use</div>
        <div className="privacy-policy">Privacy policy</div>
      </div>
    </footer>
  );
};

export default LandingPage;
