import axios from "axios";
import CommentModel from "../models/CommentModel";
import PostModels from "../models/PostModel";

const url: string = process.env.REACT_APP_API_COMMENTS_URL || "";

export const getComments = async (
  parkCode: string
): Promise<CommentModel[]> => {
  console.log(parkCode);
  return (await axios.get(url, { params: { parkCode: parkCode } })).data;
};

export const postComment = async (
  comment: CommentModel | PostModels
): Promise<CommentModel> => {
  return (await axios.post(url, comment)).data;
};
