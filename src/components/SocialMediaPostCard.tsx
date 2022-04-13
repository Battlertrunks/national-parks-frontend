import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import CommentContext from "../context/CommentContext";
import PostModel from "../models/PostModel";
import CommentForm from "./CommentForm";
import SocialMediaCommentCard from "./SocialMediaCommentCard";
import "./SocialMediaPostCard.css";

interface Props {
  post: PostModel;
}

const SocialMediaPostCard = ({ post }: Props) => {
  const { likePost, deleteUserPost } = useContext(CommentContext);

  const { user } = useContext(AuthContext);

  const [commentToggle, setCommentToggle] = useState<boolean>(false);
  const [showMoreComments, setShowMoreComments] = useState<number>(5);

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
    <li className="SocialMediaPostCard">
      {post.uid === user?.uid && (
        <button onClick={() => deleteYourPost(post._id!)}>Delete Post</button>
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
      <button onClick={() => setCommentToggle((prev) => !prev)}>Comment</button>
      {commentToggle && (
        <CommentForm commentLocation={post._id!} postDetails={post} />
      )}
      <ul>
        {[
          ...Array(
            post.comments.length > showMoreComments
              ? showMoreComments
              : post.comments.length
          ),
        ]?.map((comment, index) => (
          <SocialMediaCommentCard comment={post.comments} index={index} />
        ))}
      </ul>
      <button onClick={() => setShowMoreComments((prev) => prev + 5)}>
        Show More Comments
      </button>
    </li>
  );
};

export default SocialMediaPostCard;
