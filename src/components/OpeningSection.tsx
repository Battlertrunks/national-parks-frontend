import "./OpeningSection.css";

// Just the opening screen when the user is not logged in
// Mainly for new users coming in.
const OpeningSection = () => {
  return (
    <div className="OpeningSection">
      <ul>
        <li>
          <h2>Nature</h2>
        </li>
        <li>
          <span className="divider" />
        </li>
        <li>
          <h2>Explore</h2>
        </li>
      </ul>
      <h3>Simply Outdoors</h3>
    </div>
  );
};

export default OpeningSection;
