import CommentModel from "../models/CommentModel";
import PostModels from "../models/PostModel";
import "./SocialMediaCommentCard.css";

interface Props {
  comment: CommentModel[];
  index: number;
}

const SocialMediaCommentCard = ({ comment, index }: Props) => {
  return (
    <li className="SocialMediaCommentCard">
      <h5>{comment[index]?.username}</h5>
      <p>{comment[index]?.dateAndTime}</p>
      <p>{comment[index]?.text}</p>
    </li>
  );
};

export default SocialMediaCommentCard;
