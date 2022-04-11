import { ReactNode, useState } from "react";
import CommentModel from "../models/CommentModel";
import { getComments, postComment } from "../services/PostCommentServices";
import CommentContext from "./CommentContext";

interface Props {
  children: ReactNode;
}

const CommentContextProvider = ({ children }: Props) => {
  const [comments, setComments] = useState<CommentModel[]>([]);

  const getAndSetComments = (parkCode: string): void => {
    getComments(parkCode).then((response) => setComments(response));
  };

  const addComment = (comment: CommentModel): void => {
    postComment(comment).then(() => getAndSetComments(comment.park_code));
  };

  return (
    <CommentContext.Provider
      value={{ comments, getAndSetComments, addComment }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
