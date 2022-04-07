import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="divider" />
      <ul className="links-container">
        <li className="logo-social-container">
          <h2>Dream Park</h2>
          <p>Copyright 2022 Szczesniak</p>
          <ul className="social-media-container">
            <li>
              <a href="#" className="youtube-icon">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#" className="twitter-icon">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="facebook-icon">
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
              <a href="#">Support</a>
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
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
