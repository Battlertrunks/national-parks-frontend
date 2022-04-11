import { createContext } from "react";
import CommentModel from "../models/CommentModel";

interface CommentContextModel {
  comments: CommentModel[];
  getAndSetComments: (parkCode: string) => void;
  addComment: (comment: CommentModel) => void;
}

const defaultValues: CommentContextModel = {
  comments: [],
  getAndSetComments: () => {},
  addComment: () => {},
};

const CommentContext = createContext(defaultValues);
export default CommentContext;
