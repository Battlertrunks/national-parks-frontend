import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import CommentContext from "../context/CommentContext";
import CommentModel from "../models/CommentModel";
import PostModels from "../models/PostModel";
import "./SocialMediaCommentCard.css";

interface Props {
  comment: CommentModel[];
  index: number;
}

const SocialMediaCommentCard = ({ comment, index }: Props) => {
  const { deleteCommentFromPost } = useContext(CommentContext);
  const { user } = useContext(AuthContext);

  return (
    <li className="SocialMediaCommentCard">
      <h5>{comment[index]?.username}</h5>
      <p>{comment[index]?.dateAndTime}</p>
      <p>{comment[index]?.text}</p>
      {user?.uid === comment[index].uid && (
        <button onClick={() => deleteCommentFromPost(comment[index]._id!)}>
          Delete your comment
        </button>
      )}
    </li>
  );
};

export default SocialMediaCommentCard;
