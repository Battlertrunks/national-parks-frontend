import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeRoute from "./components/HomeRoute";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeRoute />
      <Footer />
    </div>
  );
}

export default App;
