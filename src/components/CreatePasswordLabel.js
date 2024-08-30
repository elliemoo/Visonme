import { useMemo } from "react";
import "./CreatePasswordLabel.css";

const CreatePasswordLabel = ({ propFlex, propAlignSelf, onLeftArrowClick }) => {
  const createPasswordLabelStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div className="create-password-label" style={createPasswordLabelStyle}>
      <div className="password-frame1">
        <div className="create-password-wrapper">
          <div className="create-password">Create Password</div>
        </div>
        <div className="confirm-password-label">
          <div className="create-password-textfield">
            <input className="continue-button1" type="text" />
            <input className="continue-button2" type="text" />
          </div>
        </div>
      </div>
      <button className="left-arrow" onClick={onLeftArrowClick}>
        <div className="continue1">Continue</div>
        <img
          className="arrow-arrow-left-lg1"
          alt=""
          src="/arrow--arrow-left-lg.svg"
        />
      </button>
    </div>
  );
};

export default CreatePasswordLabel;
