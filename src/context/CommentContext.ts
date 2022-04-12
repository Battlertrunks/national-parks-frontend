import { createContext } from "react";
import CommentModel from "../models/CommentModel";
import PostModel from "../models/PostModel";

interface CommentContextModel {
  comments: CommentModel[];
  getAndSetComments: (parkCode: string) => void;
  addComment: (comment: CommentModel) => void;
  posts: PostModel[];
  getAndSetPosts: () => void;
  addPost: (post: PostModel) => void;
  likePost: (id: string, likedPost: PostModel) => void;
}

const defaultValues: CommentContextModel = {
  comments: [],
  getAndSetComments: () => {},
  addComment: () => {},
  posts: [],
  getAndSetPosts: () => {},
  addPost: () => {},
  likePost: () => {},
};

const CommentContext = createContext(defaultValues);
export default CommentContext;
