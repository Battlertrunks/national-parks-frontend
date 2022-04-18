import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeRoute from "./components/HomeRoute";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AccountRoute from "./components/AccountRoute";
import AboutUs from "./components/AboutUs";
import GalleryRoute from "./components/GalleryRoute";
import ParkDetailsCard from "./components/ParkDetailsCard";
import TeamPageRoute from "./components/TeamPageRoute";
import SocialMediaRoute from "./components/SocialMediaRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/account" element={<AccountRoute />} />
          <Route path="/account/:id" element={<AccountRoute />} />
          <Route path="/parks/search" element={<GalleryRoute />} />
          <Route path="/parks/aboutUs" element={<AboutUs />} />
          <Route path="/parks/details" element={<ParkDetailsCard />} />
          <Route path="/team" element={<TeamPageRoute />} />
          <Route path="/posts" element={<SocialMediaRoute />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
