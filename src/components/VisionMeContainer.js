import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./VisionMeContainer.css";

const VisionMeContainer = () => {
  const navigate = useNavigate();

  const onSystemFrameContainerClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onInterfaceLogoutContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="group-div">
      <div className="frame-child1" />
      <h1 className="visionme5">VisionMe</h1>
      <div className="file-document-frame">
        <div className="chat-history-frame">
          <div className="system-frame" onClick={onSystemFrameContainerClick}>
            <img
              className="system-qr-code"
              loading="eager"
              alt=""
              src="/system--qr-code.svg"
            />
            <div className="dashboard">Dashboard</div>
          </div>
          <div className="system-frame1">
            <img
              className="file-file-document"
              loading="eager"
              alt=""
              src="/file--file-document.svg"
            />
            <div className="chat-history">Chat History</div>
          </div>
          <div className="system-frame2">
            <img
              className="fluentbook-search-24-regular-icon"
              loading="eager"
              alt=""
              src="/fluentbooksearch24regular.svg"
            />
            <div className="user-guide">User Guide</div>
          </div>
          <div className="system-frame3">
            <img
              className="lets-iconssetting-line"
              loading="eager"
              alt=""
              src="/letsiconssettingline.svg"
            />
            <div className="setting">Setting</div>
          </div>
        </div>
      </div>
      <div className="rectangle-shape" />
      <div className="logout-frame">
        <div className="one-step-closer-frame">
          <div className="line-separator" />
          <div
            className="interface-logout"
            onClick={onInterfaceLogoutContainerClick}
          >
            <img
              className="interface-log-out"
              loading="eager"
              alt=""
              src="/interface--log-out@2x.png"
            />
            <div className="log-out">Log out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMeContainer;
