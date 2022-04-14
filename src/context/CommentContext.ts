import { createContext } from "react";
import CommentModel from "../models/CommentModel";
import PostModel from "../models/PostModel";

interface CommentContextModel {
  // stores comments
  comments: CommentModel[];
  // gets and sets the comments
  getAndSetComments: (parkCode: string) => void;
  // Adds comments
  addCommentToPark: (comment: CommentModel) => void;
  // stores the posts
  posts: PostModel[];
  // gets and sets the posts
  getAndSetPosts: () => void;
  // adds posts
  addPost: (post: PostModel) => void;
  // adds likes to post
  likePost: (id: string, likedPost: PostModel) => void;
  // deletes user's post
  deleteUserPost: (id: string) => void;
  // adds comments to post
  addCommentToPost: (id: string, userPostId: CommentModel) => void;
  // deletes user's comment on a post
  deleteCommentFromPost: (id: string, deletedCommentPost: CommentModel) => void;
}

// Initializing values and functions
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
