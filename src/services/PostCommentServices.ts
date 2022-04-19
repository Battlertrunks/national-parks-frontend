import axios from "axios";
import CommentModel from "../models/CommentModel";

// Gets our databases comments for parks using our API as the middle man
const url: string = process.env.REACT_APP_API_COMMENTS_URL || "";

// Gets comments users have posted on a park
export const getComments = async (
  parkCode: string
): Promise<CommentModel[]> => {
  return (await axios.get(url, { params: { parkCode: parkCode } })).data;
};

// Uploads comments that users have posted on a park
export const postComment = async (
  comment: CommentModel
): Promise<CommentModel> => {
  return (await axios.post(url, comment)).data;
};
