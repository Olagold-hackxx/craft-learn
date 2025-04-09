import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/LandingPage";
import "./tailwind.css";
import SignUp from "./pages/Signup";
import ContextProvider from "./context/index";
import HomePage from "./pages/HomePage";
import Assessment from "./pages/Assessment";
import DashboardLayout from "./components/DashboardLayout";
import CertificateCard from "./pages/Download";
import Certificate from "./pages/Certificates";
import CoursesPage from "./pages/Courses";
import { OCConnect } from "@opencampus/ocid-connect-js";
import RedirectPage from "./pages/Redirect";
// import { LoginCallBack } from "@opencampus/ocid-connect-js";

const domain = import.meta.env.VITE_DOMAIN ?? "http://localhost:5173";

const opts = {
  clientId: "",
  redirectUri: `${domain}/redirect`,
  // referralCode: 'PARTNER6'
};
function App() {
  return (
    <div>
      <OCConnect opts={opts} sandboxMode={true}>
        <ContextProvider>
          <ToastContainer />
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/redirect" element={<RedirectPage />} />
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<HomePage />} />
                <Route path="assessments" element={<Assessment />} />
                <Route
                  path="completed-assessment"
                  element={<CertificateCard />}
                />
                <Route path="certificates" element={<Certificate />} />
                <Route path="courses" element={<CoursesPage />} />
              </Route>
            </Routes>
          </Router>
        </ContextProvider>
      </OCConnect>
    </div>
  );
}

export default App;
