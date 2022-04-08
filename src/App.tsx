import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeRoute from "./components/HomeRoute";
import AuthContextProvider from "./context/AuthContextProvider";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import GalleryRoute from "./components/GalleryRoute";
import AboutUs from "./components/AboutUs";
import ParkDetails from "./components/ParkDetailsCard";
import Account from "./components/Account";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/account" element={<Account />} />
          <Route path="/parks/search" element={<GalleryRoute />} />
          <Route path="/parks/aboutus" element={<AboutUs />} />
          <Route path="/parks/details" element={<ParkDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
