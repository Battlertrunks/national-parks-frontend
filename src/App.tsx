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
import SearchParkRoute from "./components/SearchParkRoute";
import AboutUs from "./components/AboutUs";
import ParkDetails from "./components/ParkDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/parks/search" element={<SearchParkRoute />} />
          <Route path="/parks/aboutus" element={<AboutUs />} />
          <Route path="/parks/:id" element={<ParkDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
