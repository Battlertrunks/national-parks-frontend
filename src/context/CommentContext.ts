import { createContext } from "react";
import CommentModel from "../models/CommentModel";
import PostModels from "../models/PostModel";

interface CommentContextModel {
  comments: CommentModel[];
  getAndSetComments: (parkCode: string) => void;
  addComment: (comment: CommentModel) => void;
  posts: PostModels[];
  getAndSetPosts: () => void;
  addPost: (post: PostModels) => void;
}

const defaultValues: CommentContextModel = {
  comments: [],
  getAndSetComments: () => {},
  addComment: () => {},
  posts: [],
  getAndSetPosts: () => {},
  addPost: () => {},
};

const CommentContext = createContext(defaultValues);
export default CommentContext;
