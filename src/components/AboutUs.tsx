import "./AboutUs.css";

// Explains who we are.
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <h1 className="AboutUsTitle">About Us</h1>
      <ul>
        <li>
          <h2>Our Goals</h2>
          <p>
            Dream Park is a motivational National Park finder application that
            incorporates a park completion component. Users are able work
            towards "completing" parks by doing activities like hiking, fishing,
            paddling, and more.
          </p>
          <p>
            Our goal is to make people more active and go out and see what
            nature is really about. Being active promotes a healthy lifestyle.
            Furthermore, being active is a positive for mental health. Not
            enough people realize the true importance of nature and take it for
            granted at times.
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <h2>Our Company</h2>
          <p>
            Our company strives for the world to become environmental friendly.
            We want to increase awareness and support for our parks. this will
            help to keep nature safe and prevent environmental damage to wild
            life such as animals and vegetation by raising awareness of its
            important.
          </p>
          <p>
            We want people to realize that what we do now will affect how our
            national parks and any wild will be in the future.
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <h2>Contact</h2>
          <p>Phone: (123)-456-7890</p>
          <p>Fax: (098)-765-4321</p>
          <p>Email: help@dreampark.com</p>
        </li>
      </ul>
      <ul>
        <li>
          <h2>Address</h2>
          <p>12345 Cascade dr.</p>
          <p>Portland, OR 12345</p>
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
