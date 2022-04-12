import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import CommentContext from "../context/CommentContext";
import "./SocialMediaPostForm.css";

const SocialMediaPostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const { addPost } = useContext(CommentContext);
  const { user } = useContext(AuthContext);

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();

    if (user) {
      addPost({
        uid: user?.uid,
        username: user?.displayName!,
        title,
        body,
      });
    }
  };

  return (
    <form className="SocialMediaPostForm" onSubmit={submitHandler}>
      <label htmlFor="title">Post Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="body"
        id="body"
        placeholder="Insert text here..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default SocialMediaPostForm;
