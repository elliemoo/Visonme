import VisionMeContainer from "../components/VisionMeContainer";
import "./Chatbot.css";

const Chatbot = () => {
  return (
    <div className="chatbot">
      <VisionMeContainer />
      <section className="discussion-frame">
        <div className="your-vision-frame">
          <div className="one-step-closer-container">
            <span>{`One step closer to your vision, `}</span>
            <span className="liah">Liah</span>
          </div>
          <div className="chat-parent-frame">
            <div className="chat-parent-frame-child" />
            <img
              className="af2f35-c3b2-4be7-a715-db8fde1e-icon"
              loading="eager"
              alt=""
              src="/98af2f35c3b24be7a715db8fde1e8c6d-1@2x.png"
            />
          </div>
        </div>
        <div className="wrapper-discuss-topic-frame">
          <input
            className="discuss-topic-frame"
            placeholder="Present Me, What do you want to discuss today?"
            type="text"
          />
          <div className="rectangle-parent">
            <div className="frame-child" />
            <div className="present-me-what">
              Present Me, What do you want to discuss today?
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chatbot;
