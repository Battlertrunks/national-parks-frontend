import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import CommentContext from "../context/CommentContext";
import PostModel from "../models/PostModel";
import CommentForm from "./CommentForm";
import SocialMediaCommentCard from "./SocialMediaCommentCard";
import "./SocialMediaPostCard.css";

// Sends down post value
interface Props {
  post: PostModel;
}

const SocialMediaPostCard = ({ post }: Props) => {
  // gets context for user to like post and delete a post
  const { likePost, deleteUserPost } = useContext(CommentContext);

  // Gets user to let them delete their post or have the ability to like post.
  const { user } = useContext(AuthContext);

  // Toggle to make the comment form appear
  const [commentToggle, setCommentToggle] = useState<boolean>(false);

  // limits the amount of comments per post to 5 at default
  const [showMoreComments, setShowMoreComments] = useState<number>(5);

  // When the user likes a post
  const likingAPost = (likedPost: PostModel): void => {
    // increments number of likes
    likedPost.likes.amountOfLikes += 1;
    // assigns user to likes
    likedPost.likes.uids.push(user!.uid);
    // tells which post that the user likes and sends updated object
    likePost(likedPost._id!, likedPost);
  };

  // When the user unlikes a post
  const unlikeAPost = (unlikedPost: PostModel): void => {
    // decrements number of likes
    unlikedPost.likes.amountOfLikes -= 1;
    // creates new array without the user who unliked the post
    unlikedPost.likes.uids = unlikedPost.likes.uids.filter(
      (keepUser) => keepUser !== user?.uid
    );
    // tells which post the the user unlikes and sends updated object
    likePost(unlikedPost._id!, unlikedPost);
  };

  // Runs function when the user clicks the delete post button
  const deleteYourPost = (postToDelete: string): void => {
    // sends the id of the post to delete
    deleteUserPost(postToDelete);
  };

  return (
    <li className="SocialMediaPostCard">
      {/* If the post is the authors, displays button to user */}
      {post.uid === user?.uid && (
        <button
          className="delete-btn"
          onClick={() => deleteYourPost(post._id!)}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      )}
      <div className="profile-name-and-image">
        <img
          src={post.userPhoto}
          alt={`${user?.displayName}'s profile photo.`}
        />
        <h4>{post?.username}</h4>
      </div>
      <h3 className="title">{post?.title}</h3>
      {post.imageURL && (
        <img className="img-post" src={post.imageURL} alt={post.imageURL} />
      )}
      <p className="body-text">{post?.body}</p>
      <p className="date">{post.dateAndTime}</p>
      <div className="like-container">
        {user && !post.likes.uids.some((users) => users === user.uid) ? (
          <button className="heart-btn" onClick={() => likingAPost(post)}>
            <i className="fa-regular fa-heart"></i>
          </button>
        ) : (
          <button className="heart-btn" onClick={() => unlikeAPost(post)}>
            <i className="fa-solid fa-heart"></i>
          </button>
        )}
        <p>Likes: {post.likes.amountOfLikes}</p>
      </div>
      <ul>
        {/* Sets how many comments to display */}
        {[
          ...Array(
            post.comments.length > showMoreComments
              ? showMoreComments
              : post.comments.length
          ),
        ]?.map((comment, index) => (
          <SocialMediaCommentCard
            comment={post.comments}
            index={index}
            postID={post._id!}
            key={post.comments[index]._id}
          />
        ))}
      </ul>
      {/* Adds five more comments to the limit when clicked */}
      <button
        className="show-more-comments-btn"
        onClick={() =>
          setShowMoreComments((prev) =>
            prev < post.comments.length ? prev + 5 : prev
          )
        }
      >
        Show More Comments
      </button>
      <button
        className="comment-btn"
        onClick={() => setCommentToggle((prev) => !prev)}
      >
        Comment
      </button>
      {commentToggle && (
        <CommentForm commentLocation={post._id!} postDetails={post} />
      )}
    </li>
  );
};

export default SocialMediaPostCard;
