import { useMemo } from "react";
import "./PasswordFrame.css";

const PasswordFrame = ({
  emailAddress,
  breeje7gmailcomPlaceholde,
  propPadding,
  propWidth,
}) => {
  const passwordFrameStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const breeje7gmailcomStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="password-frame2" style={passwordFrameStyle}>
      <div className="email-address2">{emailAddress}</div>
      <div className="email-label">
        <input
          className="breeje7gmailcom"
          placeholder={breeje7gmailcomPlaceholde}
          type="text"
          style={breeje7gmailcomStyle}
        />
      </div>
    </div>
  );
};

export default PasswordFrame;
