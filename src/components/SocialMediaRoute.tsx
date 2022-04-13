import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import CommentContext from "../context/CommentContext";
import PostModel from "../models/PostModel";
import { postComment } from "../services/PostCommentServices";
import CommentForm from "./CommentForm";
import SocialMediaPostCard from "./SocialMediaPostCard";
import SocialMeidaPostForm from "./SocialMediaPostForm";
import "./SocialMediaRoute.css";

const SocialMediaRoute = () => {
  const { posts, getAndSetPosts } = useContext(CommentContext);

  useEffect(() => {
    getAndSetPosts();
  }, []);

  return (
    <section className="SocialMediaRoute">
      <SocialMeidaPostForm />
      <h2>Most Recent Post</h2>
      <ul>
        {posts.map((post) => (
          <SocialMediaPostCard post={post} key={post._id} />
        ))}
      </ul>
    </section>
  );
};

export default SocialMediaRoute;
