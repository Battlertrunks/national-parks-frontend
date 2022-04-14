import { ReactNode, useState } from "react";
import CommentModel from "../models/CommentModel";
import PostModels from "../models/PostModel";
import { getComments, postComment } from "../services/PostCommentServices";
import {
  commentUserPost,
  deletePost,
  likingUserPost,
  retrievePosts,
  uploadPost,
} from "../services/SocialMediaServices";
import CommentContext from "./CommentContext";

interface Props {
  children: ReactNode;
}

const CommentContextProvider = ({ children }: Props) => {
  // Initializing state for comments and posts
  const [comments, setComments] = useState<CommentModel[]>([]);
  const [posts, setPosts] = useState<PostModels[]>([]);

  // gets and sets comments calling the getComments from services sending parkCode to get correct comments.
  const getAndSetComments = (parkCode: string): void => {
    getComments(parkCode).then((response) => setComments(response));
  };

  // Adds comment to post sending the comment to services to appended it to comments
  // Calls get and set comments function to appended it to the comments state.
  const addCommentToPark = (comment: CommentModel): void => {
    postComment(comment).then(() => getAndSetComments(comment.park_code!));
  };

  // gets and sets post from services from the API, then appends it to posts
  const getAndSetPosts = (): void => {
    retrievePosts().then((response) => setPosts(response));
  };

  // adds a post to mongo and calls get and set posts to update the posts state
  const addPost = (post: PostModels): void => {
    uploadPost(post).then(() => getAndSetPosts());
  };

  // increments a like to the post and calls get and set posts to update the state
  const likePost = (id: string, likedPost: PostModels): void => {
    likingUserPost(id, likedPost).then(() => getAndSetPosts());
  };

  // deletes a post and updates the post state runnning get and set posts state
  const deleteUserPost = (id: string): void => {
    deletePost(id).then(() => getAndSetPosts());
  };

  // adds a comment to the post on the social media page then runs get and set post to update posts state.
  const addCommentToPost = (id: string, userPostId: CommentModel): void => {
    commentUserPost(id, userPostId).then(() => getAndSetPosts());
  };

  // deletes comment on a post and then updates posts state by calling get and sets posts.
  const deleteCommentFromPost = (id: string): void => {
    deletePost(id).then(() => getAndSetPosts());
  };

  return (
    <CommentContext.Provider
      value={{
        comments,
        getAndSetComments,
        addCommentToPark,
        posts,
        getAndSetPosts,
        addPost,
        likePost,
        deleteUserPost,
        addCommentToPost,
        deleteCommentFromPost,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
