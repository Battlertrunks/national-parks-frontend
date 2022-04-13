import { createContext } from "react";
import CommentModel from "../models/CommentModel";
import PostModel from "../models/PostModel";

interface CommentContextModel {
  comments: CommentModel[];
  getAndSetComments: (parkCode: string) => void;
  addCommentToPark: (comment: CommentModel) => void;
  posts: PostModel[];
  getAndSetPosts: () => void;
  addPost: (post: PostModel) => void;
  likePost: (id: string, likedPost: PostModel) => void;
  deleteUserPost: (id: string) => void;
  addCommentToPost: (id: string, userPostId: CommentModel) => void;
  deleteCommentFromPost: (id: string) => void;
}

const defaultValues: CommentContextModel = {
  comments: [],
  getAndSetComments: () => {},
  addCommentToPark: () => {},
  posts: [],
  getAndSetPosts: () => {},
  addPost: () => {},
  likePost: () => {},
  deleteUserPost: () => {},
  addCommentToPost: () => {},
  deleteCommentFromPost: () => {},
};

const CommentContext = createContext(defaultValues);
export default CommentContext;
