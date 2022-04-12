import "./SocialMediaPostForm.css";

const SocialMediaPostForm = () => {
  return (
    <form className="SocialMediaPostForm">
      <label htmlFor="title">Post Title:</label>
      <input type="text" name="title" id="title" />
      <textarea name="body" id="body" placeholder="Insert text here..." />
      <button>Submit</button>
    </form>
  );
};

export default SocialMediaPostForm;
