// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Shopping from "../pages/shopping";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/shopping"
          element={
            <PageTransition>
              <Shopping />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
function AppRoutes() {
  return (
    <Router>
      <header>
        <nav>
          <Header />
        </nav>
      </header>

      <main className="mb-28">
        <AnimatedRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}
export default AppRoutes;
