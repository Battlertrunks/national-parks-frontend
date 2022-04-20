import { useContext } from "react";
import CommentContext from "../context/CommentContext";
import SocialMediaPostCard from "./SocialMediaPostCard";
import SocialMeidaPostForm from "./SocialMediaPostForm";
import "./SocialMediaRoute.css";

const SocialMediaRoute = () => {
  // Gets context to see post and load them in.
  const { posts } = useContext(CommentContext);

  return (
    <section className="SocialMediaRoute">
      <SocialMeidaPostForm />
      <h2 className="recent-post">Most Recent Post</h2>
      <ul className="posts-container">
        {/* Loads post on the page */}
        {posts
          .map((post) => <SocialMediaPostCard post={post} key={post._id} />)
          .reverse()}
      </ul>
    </section>
  );
};

export default SocialMediaRoute;
