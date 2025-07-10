import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/home";

function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
