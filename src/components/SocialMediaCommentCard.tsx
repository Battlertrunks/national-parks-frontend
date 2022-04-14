import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import CommentContext from "../context/CommentContext";
import CommentModel from "../models/CommentModel";
import "./SocialMediaCommentCard.css";

// Sends down values for comments and their index within their array.
interface Props {
  comment: CommentModel[];
  index: number;
}

const SocialMediaCommentCard = ({ comment, index }: Props) => {
  // Gets context to delete a user's post using the user context too.
  const { deleteCommentFromPost } = useContext(CommentContext);
  const { user } = useContext(AuthContext);

  // Button shows for only authors of comments to delete them.
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
