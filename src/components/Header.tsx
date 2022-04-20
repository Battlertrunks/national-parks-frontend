import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import logo from "../images/NationalParksLogo.png";
import "./Header.css";

const Header = () => {
  // Gets user info if logged in
  const { user } = useContext(AuthContext);

  // const setDropdown = menuDropdown ? "menu-dropdown" : "menu-dropdown-open";

  // We store our links here to go to different pages.
  // Users can return to homepage when they click our logo too.
  return (
    <header className="Header">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Natioanl Tresaures Logo" />
          <h1>National Treasures</h1>
        </div>
      </Link>

      <ul className="navlinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/parks/search">Search</Link>
        </li>
        <li>
          <Link to="/parks/aboutus">About Us</Link>
        </li>
        {user && (
          <li>
            <Link to="/account">Account</Link>
          </li>
        )}
        <li>
          <Link to="/posts">Blog</Link>
        </li>
      </ul>
      <div className="userinfo-and-dropmenu">
        <div className="user-info">
          {user ? (
            <div className="sign-in-container">
              <div className="name-and-pic">
                <Link to="/account">
                  <p className="username">
                    {user.displayName}
                    {user.photoURL && (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="profile-img"
                      />
                    )}
                  </p>
                </Link>
              </div>
              <div className="disappear-btn">
                <button className="sign-out-btn" onClick={signOut}>
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <button className="sign-in-btn" onClick={signInWithGoogle}>
              Sign In
            </button>
          )}
        </div>

        <div className="dropdown">
          <button>
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="dropdown-content">
            {user ? (
              <div className="dropdown-sign-in-container">
                <Link to="/account">
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="profile-img"
                    />
                  )}
                  <p>{user.displayName}</p>
                </Link>
                <button className="sign-out-btn" onClick={signOut}>
                  Sign Out
                </button>
              </div>
            ) : (
              <button className="sign-in-btn" onClick={signInWithGoogle}>
                Sign In
              </button>
            )}
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
              <li>
                <Link to="/posts">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
