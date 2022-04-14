import { useContext, useEffect } from "react";
import CommentContext from "../context/CommentContext";
import SocialMediaPostCard from "./SocialMediaPostCard";
import SocialMeidaPostForm from "./SocialMediaPostForm";
import "./SocialMediaRoute.css";

const SocialMediaRoute = () => {
  // Gets context to see post and load them in.
  const { posts, getAndSetPosts } = useContext(CommentContext);

  // Runs once on load to get and set the post
  useEffect(() => {
    getAndSetPosts();
  }, []);

  return (
    <section className="SocialMediaRoute">
      <SocialMeidaPostForm />
      <h2>Most Recent Post</h2>
      <ul>
        {/* Loads post on the page */}
        {posts.map((post) => (
          <SocialMediaPostCard post={post} key={post._id} />
        ))}
      </ul>
    </section>
  );
};

export default SocialMediaRoute;
