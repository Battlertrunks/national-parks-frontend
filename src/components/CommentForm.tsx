import { FormEvent, useContext, useState } from "react";
import CommentContext from "../context/CommentContext";
import "./CommentForm.css";

interface Props {
  userInfo: string | undefined;
  parkCode: string;
}

const CommentForm = ({ userInfo, parkCode }: Props) => {
  const { addComment } = useContext(CommentContext);
  const [commentText, setCommentText] = useState<string>("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    addComment({
      text: commentText,
      uid: userInfo!,
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
