import axios from "axios";
import CommentModel from "../models/CommentModel";

const url: string = process.env.REACT_APP_API_COMMENTS_URL || "";

export const getComments = async (
  parkCode: string
): Promise<CommentModel[]> => {
  return (await axios.get(url, { params: { parkCode: parkCode } })).data;
};

export const postComment = async (
  comment: CommentModel
): Promise<CommentModel> => {
  return (await axios.post(url, comment)).data;
};
