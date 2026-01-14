import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import Dashboard from "./pages/DashboardPage/DashboardPage";
import "./assets/styles/fonts.scss";
import "./assets/styles/styles.scss";
import "./assets/styles/query.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
const App = () => {
  const isAuthorized = false;
  return (
    <Router basename="/ydx">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<Dashboard />}
          // element={isAuthorized ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
