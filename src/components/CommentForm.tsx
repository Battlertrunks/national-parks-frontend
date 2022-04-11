import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import CommentContext from "../context/CommentContext";
import ParkDetailsCardModel from "../models/ParkDetailsCardModel";
import "./CommentForm.css";

interface Props {
  parkCode: string;
}

const CommentForm = ({ parkCode }: Props) => {
  const { user } = useContext(AuthContext);
  const { addComment } = useContext(CommentContext);
  const [commentText, setCommentText] = useState<string>("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    addComment({
      text: commentText,
      username: user?.displayName!,
      uid: user?.uid!,
      park_code: parkCode,
    });

    setCommentText("");
  };

  return (
    <form className="CommentForm" onSubmit={submitHandler}>
      <label htmlFor="comment">Comment:</label>
      <input
        type="text"
        name="Comment"
        id="Comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default CommentForm;
