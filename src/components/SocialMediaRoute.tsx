import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import CommentContext from "../context/CommentContext";
import PostModel from "../models/PostModel";
import SocialMeidaPostForm from "./SocialMediaPostForm";
import "./SocialMediaRoute.css";

const SocialMediaRoute = () => {
  const { posts, getAndSetPosts } = useContext(CommentContext);
  const [holdPost, setHoldPost] = useState<PostModel[]>([]);

  useEffect(() => {
    getAndSetPosts();
    setHoldPost(posts);
  }, []);

  return (
    <section className="SocialMediaRoute">
      <SocialMeidaPostForm />
      <h2>Most Recent Post</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h4>{post?.username}</h4>
            <p>{post.dateAndTime}</p>
            <h3>{post?.title}</h3>
            <img src={post.imageURL} alt={post.imageURL} />
            <p>{post?.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialMediaRoute;
