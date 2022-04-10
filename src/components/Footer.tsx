import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="divider" />
      <ul className="links-container">
        <li className="logo-social-container">
          <h2>National Treasures</h2>
          <p>Copyright 2022 National Treasures</p>
          <ul className="social-media-container">
            <li>
              <a href="https://www.youtube.com/" className="youtube-icon">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" className="twitter-icon">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" className="facebook-icon">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
          </ul>
        </li>
        <li className="community-container">
          <h3>Community</h3>
          <ul>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <Link to="/support">
                <a>Support</a>
              </Link>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
          </ul>
        </li>
        <li className="company-container">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/parks/aboutUs">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <a href="https://www.grandcircus.co/apply/">Career</a>
            </li>
            <li>
              <Link to="/parks/aboutUs">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
