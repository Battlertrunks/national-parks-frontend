import Activities from "../models/Activities";
import "./AccountActivitiesCard.css";

interface Props {
  onDisplayCard: Activities;
}

const AccountActivitiesCard = ({ onDisplayCard }: Props) => {
  return (
    <li className="AccountActivitiesCard">
      <p>{onDisplayCard.name}</p>
    </li>
  );
};

export default AccountActivitiesCard;
