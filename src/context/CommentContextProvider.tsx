import { ReactNode, useState } from "react";
import CommentModel from "../models/CommentModel";
import PostModels from "../models/PostModel";
import { getComments, postComment } from "../services/PostCommentServices";
import { retrievePosts, uploadPost } from "../services/SocialMediaServices";
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

  const addComment = (comment: CommentModel): void => {
    postComment(comment).then(() => getAndSetComments(comment.park_code));
  };

  const getAndSetPosts = (): void => {
    retrievePosts().then((response) => setPosts(response));
  };

  const addPost = (post: PostModels): void => {
    uploadPost(post).then(() => getAndSetPosts());
  };

  return (
    <CommentContext.Provider
      value={{
        comments,
        getAndSetComments,
        addComment,
        posts,
        getAndSetPosts,
        addPost,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
