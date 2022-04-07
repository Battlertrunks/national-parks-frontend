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
<<<<<<< HEAD
import AboutUs from "./components/AboutUs";
import ParkDetails from "./components/ParkDetails";
=======
import Account from "./components/Account";
>>>>>>> 89395fe2c04e63785a668fc9b456f42adb871ae0

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/account" element={<Account />} />
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
