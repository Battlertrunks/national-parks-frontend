import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "./Account.css";

const Account = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="Account">
      <h2>Your Visited Parks</h2>
      <div>
        <h3>Your Score:</h3>
        <p>TODO POINTS</p>
      </div>
      <h1>How do you gain points?</h1>
    </div>
  );
};

export default Account;
