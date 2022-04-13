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
  const [comments, setComments] = useState<CommentModel[]>([]);
  const [posts, setPosts] = useState<PostModels[]>([]);

  const getAndSetComments = (parkCode: string): void => {
    getComments(parkCode).then((response) => setComments(response));
  };

  const addCommentToPark = (comment: CommentModel): void => {
    postComment(comment).then(() => getAndSetComments(comment.park_code!));
  };

  const getAndSetPosts = (): void => {
    retrievePosts().then((response) => setPosts(response));
  };

  const addPost = (post: PostModels): void => {
    uploadPost(post).then(() => getAndSetPosts());
  };

  const likePost = (id: string, likedPost: PostModels): void => {
    likingUserPost(id, likedPost).then(() => getAndSetPosts());
  };

  const deleteUserPost = (id: string): void => {
    deletePost(id).then(() => getAndSetPosts());
  };

  const addCommentToPost = (id: string, userPostId: CommentModel): void => {
    commentUserPost(id, userPostId).then(() => getAndSetPosts());
  };

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
