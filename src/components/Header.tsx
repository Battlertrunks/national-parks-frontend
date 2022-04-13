import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [menuDropdown, setMenuDropdown] = useState<boolean>(true);

  // const setDropdown = menuDropdown ? "menu-dropdown" : "menu-dropdown-open";

  return (
    <header className="Header">
      <Link to="/">
        <h1>National Treasures</h1>
      </Link>
      <div>
        {user ? (
          <div>
            <Link to="/account">
              <p className="username">{user.displayName}</p>

              {user.photoURL && <img src={user.photoURL} alt="Profile Image" />}
            </Link>
            <button onClick={signOut}>Sign Out</button>
          </div>
        ) : (
          <button onClick={signInWithGoogle}>Sign In</button>
        )}
        <div className="dropdown">
          <button>
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="dropdown-content">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/parks/search">Search</Link>
              </li>
              <li>
                <Link to="/parks/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
