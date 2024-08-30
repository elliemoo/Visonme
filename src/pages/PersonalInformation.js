import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LastName from "../components/LastName";
import CreatePasswordLabel from "../components/CreatePasswordLabel";
import "./PersonalInformation.css";

const PersonalInformation = () => {
  const navigate = useNavigate();

  const onContinueBtnClick = useCallback(() => {
    navigate("/chatbot");
  }, [navigate]);

  return (
    <div className="personal-information">
      <section className="rectangle-container">
        <div className="frame-inner" />
        <div className="f-r-a-m-e" />
        <h1 className="visionme1">VisionMe</h1>
        <div className="f-r-a-m-e1">
          <div className="f-r-a-m-e2">
            <h3 className="questions">
              <p className="questions1">Questions</p>
            </h3>
          </div>
          <div className="f-r-a-m-e3">
            <form className="f-r-a-m-e4">
              <div className="n-a-m-e-a-n-d-e-m-a-i-l">
                <LastName propMinWidth="130px" />
                <div className="l-a-s-t-n-a-m-e">
                  <div className="last-name1">Last Name</div>
                  <input className="c-r-e-a-t-e-p-a-s-s-w-o-r-d" type="text" />
                </div>
              </div>
              <input className="f-r-a-m-e5" type="text" />
              <CreatePasswordLabel
                propFlex="unset"
                propAlignSelf="stretch"
                onLeftArrowClick={onContinueBtnClick}
              />
            </form>
          </div>
          <div className="confirm-password1">Confirm Password</div>
        </div>
      </section>
    </div>
  );
};

export default PersonalInformation;
