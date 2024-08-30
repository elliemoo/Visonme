import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Chatbot from "./pages/Chatbot";
import GetStartedRegister from "./pages/GetStartedRegister";
import PersonalInformation from "./pages/PersonalInformation";
import GetStartedSignIn from "./pages/GetStartedSignIn";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/chatbot":
        title = "";
        metaDescription = "";
        break;
      case "/get-started-register":
        title = "";
        metaDescription = "";
        break;
      case "/personal-information":
        title = "";
        metaDescription = "";
        break;
      case "/get-started-sign-in":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/get-started-register" element={<GetStartedRegister />} />
      <Route path="/personal-information" element={<PersonalInformation />} />
      <Route path="/get-started-sign-in" element={<GetStartedSignIn />} />
    </Routes>
  );
}
export default App;
