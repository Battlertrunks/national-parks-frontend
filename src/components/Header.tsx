import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <header className="Header">
      <Link to="/">
        <h1>Dream Park</h1>
      </Link>
      <div>
        <ul>
          <li>
            <Link to="/parks/search">Search</Link>
          </li>
          <li>
            <Link to="/parks/aboutus">About Us</Link>
          </li>
        </ul>
        {user ? (
          <div>
            <p>{user.displayName}</p>
            <button onClick={signOut}>Sign Out</button>
          </div>
        ) : (
          <button onClick={signInWithGoogle}>Sign In</button>
        )}

        <button>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
