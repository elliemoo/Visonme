import { useMemo } from "react";
import "./LastName.css";

const LastName = ({ propMinWidth }) => {
  const lastNameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="last-name2" style={lastNameStyle}>
      <div className="first-name1">First Name</div>
      <input className="confirm-password-frame" type="text" />
      <div className="email-address1">Email Address</div>
    </div>
  );
};

export default LastName;
