import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import CommentContext from "../context/CommentContext";
import PostModel from "../models/PostModel";
import SocialMeidaPostForm from "./SocialMediaPostForm";
import "./SocialMediaRoute.css";

const SocialMediaRoute = () => {
  const { posts, getAndSetPosts, likePost, deleteUserPost } =
    useContext(CommentContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getAndSetPosts();
  }, []);

  const likingAPost = (likedPost: PostModel): void => {
    likedPost.likes.amountOfLikes += 1;
    likedPost.likes.uids.push(user!.uid);
    likePost(likedPost._id!, likedPost);
  };

  const unlikeAPost = (unlikedPost: PostModel): void => {
    unlikedPost.likes.amountOfLikes -= 1;
    unlikedPost.likes.uids = unlikedPost.likes.uids.filter(
      (keepUser) => keepUser !== user?.uid
    );
    likePost(unlikedPost._id!, unlikedPost);
  };

  const deleteYourPost = (postToDelete: string): void => {
    deleteUserPost(postToDelete);
  };

  return (
    <section className="SocialMediaRoute">
      <SocialMeidaPostForm />
      <h2>Most Recent Post</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            {post.uid === user?.uid && (
              <button onClick={() => deleteYourPost(post._id!)}>
                Delete Post
              </button>
            )}
            <h4>{post?.username}</h4>
            <p>{post.dateAndTime}</p>
            <h3>{post?.title}</h3>
            <img src={post.imageURL} alt={post.imageURL} />
            <p>{post?.body}</p>
            {user && !post.likes.uids.some((users) => users === user.uid) ? (
              <button onClick={() => likingAPost(post)}>Like</button>
            ) : (
              <button onClick={() => unlikeAPost(post)}>Unlike</button>
            )}
            <p>Likes: {post.likes.amountOfLikes}</p>
            <button>Comment</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialMediaRoute;
